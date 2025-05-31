export interface IAxiosResponse<T = any> {
  meta: IMeta;
  data: T;
}

export interface IMeta {
  code: number;
  message: string | string[];
  exception: string;
  path: string;
}
