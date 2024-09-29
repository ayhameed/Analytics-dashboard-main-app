import {
  ApiCheckEmailAvailabilityData,
  ApiCheckEmailAvailabilityPayload,
  ApiLoginData,
  ApiLoginPayload,
  ApiResponse,
  ApiSignUpPayload,
  ApiValidateOtpData,
  ApiValidateOtpPayload,
  ApiVerifyEmailPayload,
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
   * Validates an OTP sent to an email address. Returns true if the OTP is valid.
   * @param email the email address to validate
   * @param otp the OTP to validate
   */
  const validateOtp = async (email: string, otp: string): Promise<boolean> => {
    let isValid = false;

    await tryExecute(
      () =>
        api.post<ApiResponse<ApiValidateOtpData>, ApiValidateOtpPayload>("v1/user/validate-otp", {
          email,
          otp,
        }),
      async (response) => {
        const responseData = response.data;

        if (responseData.success) {
          isValid = responseData.data.isValid;

          if (!isValid) {
            toast.error("Invalid Code");
          }
        }
      },
      async () => {
        toast.error("An error occurred");
      },
    );

    return isValid;
  };

  /**
   * Checks if an email address is available for registration.
   * @param email the email address to check
   */
  const checkEmailAvailability = async (email: string): Promise<boolean> => {
    let emailAvailable = false;

    await tryExecute(
      () =>
        api.post<ApiResponse<ApiCheckEmailAvailabilityData>, ApiCheckEmailAvailabilityPayload>(
          "v1/user/email-availability",
          { email },
        ),
      async (response) => {
        const responseData = response.data;

        if (responseData.success) {
          emailAvailable = !responseData.data.userExists;

          if (!emailAvailable) {
            toast.error("This email is already registered");
          }
        }
      },
      async () => {
        toast.error("An error occurred");
      },
    );

    return emailAvailable;
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

  return {
    checkEmail,
    validateOtp,
    checkEmailAvailability,
    login,
    signUp,
  };
};
