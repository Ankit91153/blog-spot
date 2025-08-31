
export interface BaseApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
    error?: any;

}


export interface IBaseApiError {
  message?: string;
  errors?: {
    payload?: {error?: string}[] | {message?: string};
  }[];
}
