import axios from "axios";
import jwt_decode from "jwt-decode";

export const api = axios.create({
  baseURL:'http://localhost:3000'
});

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
    console.log('endpoint='+endpoint);
    const response = (await api.post(endpoint,{email,password}));
    if (response.status === 201) {
      const token:string = response.data.token;
      const decoded:JWTTokenDecodedType = jwt_decode(token);
      return {decoded,token};
    }
    return null;
  }

  static getDecodedToken(token:string):JWTTokenDecodedType{
    return jwt_decode(token);
  }

}