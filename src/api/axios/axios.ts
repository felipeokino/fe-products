import axios from 'axios';

import { ApiInterface } from '../api.interface';

export class AxiosApi implements ApiInterface {
  static instance: AxiosApi = new AxiosApi();
  api: ApiInterface;
  constructor() {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    
    this.api = axios
  }

  async get<T>(url: string, params?: any): Promise<T> {
    const response = await axios.get(url, { params });
    return response.data;
  }
}