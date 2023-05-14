
import jwt_decode from "jwt-decode";
import { api } from "./HttpService";
import { OutputAuthForm } from "../components/AuthForm/AuthForm";
import axios from "axios";
import { encode } from 'js-base64';

export type JWTTokenDecodedType = {
  email: string,
  exp: number,
  iat: number,
  id: number,
  roles:Array<{
    id:number,
    value:'user'|'admin',
    createdAt:string,
  }>
}

export type GoogleProfile = {
  id: string, 
  email: string,
  verified_email: boolean, 
  name: string, given_name: string, 
  picture: string, 
  locale: string, 
}

export class AuthService {

  static async getTokenOrNull(props:OutputAuthForm){
    const {typeOfData,userType,email,password,accessToken,expiresIn,userId} = props;
    let response;
    let endpoint = '';
    if (typeOfData === 'signin') {
      endpoint = '/login';
      response = await api.post(endpoint,{email,password});
    } else if (typeOfData=== 'signup'){
      if (userType === 'admin') {
        endpoint = '/create-test-admin'
      } else endpoint = '/registration';
      response = await api.post(endpoint,{email,password});
    } else if (typeOfData === 'vk') {
      endpoint = '/vk/login';
      response = await api.post(endpoint,{
        access_token:accessToken,
        expires_in:expiresIn,
        user_id:userId,
      })
    }

    if (response?.status === 201) {
      const token:string = response.data.token;
      const refreshToken:string = response.data.refreshToken;
      const decoded:JWTTokenDecodedType = jwt_decode(token);
      return {decoded,token,status:201,refreshToken};
    }
    return null;
  }

  static getDecodedToken(token:string):JWTTokenDecodedType{
    return jwt_decode(token);
  }

  static preparePassword(unpreparedPassword:string):string {
    const pass = encode(unpreparedPassword);
    const secret = 'gnlkm.lm';
    if (pass.length > 8) {
      return pass.slice(0,8)
    } else {
      const length = pass.length;
      return pass + secret.slice(0,8-length);
    }
  }

  static async getGoogleTokenOrNull(accessToken: string|undefined){
    let response = null;
    if (accessToken){
      const googleUserData = await axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
        }
      );
      if (googleUserData.status === 200) {
        const profile:GoogleProfile = googleUserData.data;
        const {email} = profile;
        try {
          const isUserRegistered = await api.get(`/check-email/${email}`);
          if (isUserRegistered.status === 200) {
          response = await api.post('/registration',{
          email:profile.email,
          password:AuthService.preparePassword(profile.email)
        });
        }
        } catch (error) {
          if (axios.isAxiosError(error) && error.response?.status === 400) {
            response = await api.post('/login',{
              email:profile.email,
              password:AuthService.preparePassword(profile.email)
            });
          }
        }
      }
      if (response?.status === 201) {
        const token:string = response.data.token;
        const refreshToken:string = response.data.refreshToken;
        const decoded:JWTTokenDecodedType = jwt_decode(token);
        return {decoded,token,status:201,refreshToken};
      }
      return null;
    }
  }

}