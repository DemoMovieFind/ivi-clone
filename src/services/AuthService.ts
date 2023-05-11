
import jwt_decode from "jwt-decode";
import { api } from "./HttpService";

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

  static async getTokenOrNull(email:string,password:string,typeOfRequest:"signin" | "signup",userType:'user'|'admin'){
    let endpoint = '';
    if (typeOfRequest === 'signin') {
      endpoint = '/login';
    } else {
      if (userType === 'admin') {
        endpoint = '/create-test-admin'
      } else endpoint = '/registration';
    }
    const response = (await api.post(endpoint,{email,password}));
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