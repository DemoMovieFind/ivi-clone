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

  static async auth(email:string,password:string,typeOfRequest:"signin" | "signup"){
    const endpoint = typeOfRequest === 'signin' ? '/login' : '/registration';
    const response = (await api.post(endpoint,{email,password}));
    if (response.status === 201) {
      const token:string = response.data.token;
      const decoded:JWTTokenDecodedType = jwt_decode(token);
      return {decoded,token};
    }
    return null;
  }

}