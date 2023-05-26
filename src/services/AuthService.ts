
import jwt_decode from "jwt-decode";
import { api } from "./HttpService";
import { OutputAuthForm } from "../components/authForm/AuthForm";
import axios from "axios";

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

  static getDecodedToken(token:string):JWTTokenDecodedType|null{
    if (token.length ===0) return null;
    return jwt_decode(token);
  }

  static async getTokenOfGoogleUserOrNull(accessToken: string|undefined){
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
        const response = await api.post(`/google/login?email=${email}`,{});
        if (response?.status === 201) {
            const token:string = response.data.token;
            const refreshToken:string = response.data.refreshToken;
            const decoded:JWTTokenDecodedType = jwt_decode(token);
          return {decoded,token,status:201,refreshToken};
        }
      }
      return null;
    }
  }
}