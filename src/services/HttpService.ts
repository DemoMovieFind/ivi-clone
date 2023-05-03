import axios from "axios";
import { useEffect, useRef, useState } from 'react';

const URL = 'http://188.120.248.77:80';

export const api = axios.create({
  baseURL:URL
});

export type AxiosPropsType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?:Record<string,any>,
  method:'get'|'put'|'post'|'delete'|'patch',
  token?:string,
  url?:string,
}

const useAxios = ({ method, body, token='', url='' }:AxiosPropsType) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loaded, setloaded] = useState(false);
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await api.request({
          data: body,
          signal: controllerRef.current.signal,
          method,
          url,
          headers:{
            Authorization:`Bearer ${token}`
          }
        });
        setResponse(response.data);
      } catch (error) {
        if(axios.isAxiosError(error)) {
          setError(error.message);
        }
      } finally {
        setloaded(true);
      }
    })();
  }, []);

  const clearError = () => setError('');

  return { response, error, loaded, clearError, cancel };
};

export default useAxios;

