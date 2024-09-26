import { AxiosResponse } from "axios";

/**
 * Executes a function and handle success and error cases
 * @param fn Function to execute
 * @param onSuccess Function to execute on success
 * @param onError Function to execute on error
 */
export const tryExecute = async <
  FunctionReturnValue = any,
  SuccessReturnValue = FunctionReturnValue,
>(
  fn: () => Promise<FunctionReturnValue>,
  onSuccess: (data: FunctionReturnValue) => Promise<SuccessReturnValue>,
  onError: (error: any) => Promise<any> = async () => {},
) => {
  try {
    const data = await fn();
    return await onSuccess(data);
  } catch (error) {
    console.error(error);

    if (onError) {
      return await onError(error);
    }

    return null;
  }
};

/**
 * Executes a function and handle success, unauthorized and error cases
 * @param fn Function to execute
 * @param onSuccess Function to execute on success
 * @param onUnauthorized Function to execute on unauthorized
 * @param onError Function to execute on error
 */
export const tryExecuteAuthenticated = async <
  FunctionReturnValue extends AxiosResponse,
  SuccessReturnValue = FunctionReturnValue,
>(
  fn: () => Promise<FunctionReturnValue>,
  onSuccess: (data: FunctionReturnValue) => Promise<SuccessReturnValue>,
  onUnauthorized: () => Promise<any>,
  onError: (error: any) => Promise<any> = async () => {},
) => {
  try {
    const data = await fn();

    if (data.status === 401) {
      return await onUnauthorized();
    }

    return await onSuccess(data);
  } catch (error) {
    console.error(error);

    if (onError) {
      return await onError(error);
    }

    return null;
  }
};

/**
 * Executes a function and handle error cases
 * @param fn Function to execute
 * @param onError Function to execute on error
 */
export const tryCatch = async <FunctionReturnValue = any>(
  fn: () => Promise<FunctionReturnValue>,
  onError: (error: any) => Promise<FunctionReturnValue>,
) => {
  try {
    return await fn();
  } catch (error) {
    console.error(error);
    return await onError(error);
  }
};

/**
 * Executes a function and handle error cases with default value
 * @param fn Function to execute
 * @param defaultValue Default value to return on error
 */
export const tryCatchWithDefault = async <FunctionReturnValue = any>(
  fn: () => Promise<FunctionReturnValue>,
  defaultValue: FunctionReturnValue,
) => {
  try {
    return await fn();
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
};
