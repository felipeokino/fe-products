export interface ApiInterface {
  get<T>(url: string, params?: any): Promise<T>;
}