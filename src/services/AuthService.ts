
import jwt_decode from "jwt-decode";
import { api } from "./HttpService";
import { OutputAuthForm } from "../components/AuthForm/AuthForm";

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

export class AuthService {

  static async getTokenOrNull(props:OutputAuthForm){
    const {typeOfData,userType,email,password,accessToken,expiresIn,userId} = props;
    console.log('inside getTokenOrNull');
    let endpoint = '';
    if (typeOfData === 'signin') {
      endpoint = '/login';
    } else if (typeOfData=== 'signup'){
      if (userType === 'admin') {
        endpoint = '/create-test-admin'
      } else endpoint = '/registration';
    } else if (typeOfData === 'vk') {
      endpoint = '/vk/login'
    }
    let response;
    if (typeOfData === 'signup' || typeOfData === 'signin') {
      response = await api.post(endpoint,{email,password});
    } else {
      response = await api.post(endpoint,{
        access_token:accessToken,
        expires_in:expiresIn,
        user_id:userId,
      })
    }
    if (response.status === 201) {
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

}