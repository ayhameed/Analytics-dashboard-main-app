import {
  ApiLoginData,
  ApiLoginPayload,
  ApiResetPasswordPayload,
  ApiResponse,
  ApiSignUpPayload,
  ApiVerifyEmailPayload,
  setAccessToken,
  tryExecute,
  useApi,
} from "@/common";
import { toast } from "react-toastify";

interface EmailCheckResponse {
  user_exists: boolean;
}

export const useUserApi = () => {
  const api = useApi();

  /**
   * Checks if a user email is registered or not
   * @param email the email address to check
   */
  const checkEmail = async (email: string): Promise<boolean> => {
    let success = false;

    await tryExecute(
      () =>
        api.post<ApiResponse<EmailCheckResponse>, ApiVerifyEmailPayload>(
          `/auth/email-check?email=${encodeURIComponent(email)}`,
        ),
      async (response) => {
        const responseData = response.data;

        if (
          responseData.data &&
          typeof responseData.data === "object" &&
          "user_exists" in responseData.data
        ) {
          success = responseData.data.user_exists;
        } else {
          console.error("Unexpected response structure:", responseData);
          toast.error("Unexpected response from server");
        }
      },
      async () => {
        toast.error("An error occurred");
      },
    );

    return success;
  };

  /**
   * Sends a forgot password email to the user
   * @param email the email address to send the email to
   */
  const forgotPassword = async (email: string): Promise<boolean> => {
    let success = false;

    await tryExecute(
      () =>
        api.post<ApiResponse<EmailCheckResponse>, ApiVerifyEmailPayload>(
          `/auth/forgot-password?email=${encodeURIComponent(email)}`,
        ),
      async (response) => {
        const responseData = response.data;

        if (responseData.status_code && responseData.status_code === 200) {
          success = true;
        } else {
          toast.error("User not Found");
        }
      },
      async () => {
        toast.error("An error occurred");
      },
    );

    return success;
  };

  /**
   * Logs in a user and returns an access token if successful.
   * @param email the email address to log in with
   * @param password the password to log in with
   */
  const login = async (email: string, password: string): Promise<boolean> => {
    let loginSuccess = false;

    const data = new URLSearchParams();
    data.append("username", email);
    data.append("password", password);

    await tryExecute(
      () =>
        api.post<ApiResponse<ApiLoginData>, ApiLoginPayload>("/auth/login", data.toString(), {
          headers: {
            accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }),
      async (response) => {
        if (response.status === 200) {
          loginSuccess = true;

          // Set access token
          setAccessToken(response.data.data.tokens.access_token);
        } else {
          toast.error("Invalid Email or password");
        }
      },
      async () => {
        toast.error("An error occurred");
      },
    );

    return loginSuccess;
  };

  const signUp = async (email: string, password: string): Promise<boolean> => {
    let loginSuccess = false;

    await tryExecute(
      () =>
        api.post<ApiResponse<ApiLoginData>, ApiSignUpPayload>("/auth/register", {
          email,
          password,
        }),
      async (response) => {
        if (response.status === 200) {
          loginSuccess = true;
          setAccessToken(response.data.data.tokens.access_token);
        } else {
          toast.error("Failed to create new user");
        }
      },
      async () => {
        toast.error("An error occurred");
      },
    );

    return loginSuccess;
  };

  const resetPassword = async (token: string, password: string): Promise<boolean> => {
    let loginSuccess = false;

    await tryExecute(
      () =>
        api.post<ApiResponse<ApiLoginData>, ApiResetPasswordPayload>("/auth/reset-password", {
          token,
          password,
        }),
      async (response) => {
        if (response.status === 200) {
          loginSuccess = true;
        } else {
          toast.error("Failed to change password");
        }
      },
      async () => {
        toast.error("An error occurred");
      },
    );

    return loginSuccess;
  };

  return {
    checkEmail,
    login,
    signUp,
    forgotPassword,
    resetPassword,
  };
};
