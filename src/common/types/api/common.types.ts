/**
 * A success response from the API.
 */
export type ApiSuccessResponse<T> = {
  success: true;
  message?: string;
  status_code?: number;
  data: T;
};

/**
 * A response from the API.
 */
export type ApiResponse<T> = ApiSuccessResponse<T>;
