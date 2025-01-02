import {
  ApiLoginData,
  ApiLoginPayload,
  ApiResetPasswordPayload,
  ApiResponse,
  ApiSignUpPayload,
  ApiVerifyEmailPayload,
  getAccessToken,
  LoginResult,
  setAccessToken,
  setUserId,
  setUserInfo,
  tryExecute,
  useApi,
} from "@/common";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

interface EmailCheckResponse {
  user_exists: boolean;
}

interface UserSearchHistory {
  id: number;
  user_id: number;
  search_term: string;
  search_time: string;
}

interface SearchHistoryResponse {
  user_search_history: UserSearchHistory[];
}

const SESSION_KEYS = {
  AUTH_TOKEN: "authToken",
  ACCESS_TOKEN: "access_token",
  USER_ID: "user_id",
  USER_INFO: "user_info",
  THEME: "theme",
  SEARCH_HISTORY: "search_history",
  USER_PREFERENCES: "user_preferences",
  REMEMBERED_SEARCHES: "remembered_searches",
  RECENT_ACTIVITIES: "recent_activities",
} as const;

/**
 * Clears all session data and storage items
 */
const clearAllSessionData = () => {
  // Clear all cookies
  Object.values(SESSION_KEYS).forEach((key) => {
    Cookies.remove(key, { path: "/" });
    Cookies.remove(key, { path: "/", domain: window.location.hostname });
  });

  // Clear localStorage
  Object.values(SESSION_KEYS).forEach((key) => {
    localStorage.removeItem(key);
  });

  // Clear sessionStorage
  Object.values(SESSION_KEYS).forEach((key) => {
    sessionStorage.removeItem(key);
  });

  // Clear any additional application state if needed
  // For example, reset any global state management store
  try {
    window.location.reload(); // Optional: Refresh the page to ensure clean state
  } catch (error) {
    console.error("Error during page reload:", error);
  }
};

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
   * Logs in a user and returns login result with admin status if successful.
   * @param email the email address to log in with
   * @param password the password to log in with
   */
  const login = async (email: string, password: string): Promise<LoginResult> => {
    let loginResult: LoginResult = {
      success: false,
      isAdmin: false,
    };

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
          const { user, tokens } = response.data.data;

          loginResult.success = true;
          loginResult.isAdmin = user.is_admin;

          // Set access token
          setAccessToken(tokens.access_token);

          // Save user info
          setUserInfo(user.last_name + " " + user.first_name, user.avatar_url, user.email);

          setUserId(user.id.toString());

          // Set cookie with access token and admin status
          Cookies.set(
            "authToken",
            JSON.stringify({
              token: response.data.data.tokens.access_token,
              isAdmin: response.data.data.user.is_admin,
            }),
            {
              expires: 1, // 1 day
              path: "/",
            },
          );
        } else {
          toast.error("Invalid Email or password");
        }
      },
      async () => {
        toast.error("An error occurred");
      },
    );

    return loginResult;
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

  const getUserSearchHistory = async (id: string) => {
    let success = false;
    let data: UserSearchHistory[] | null = null;

    await tryExecute(
      () => api.get<ApiResponse<SearchHistoryResponse>>(`/admin/users/${id}/search-history`),
      async (response) => {
        if (response.status === 200) {
          data = response.data.data.user_search_history;
          console.log(data);
          success = true;
        } else {
          toast.error("Failed to get search history");
        }
      },
      async () => {
        toast.error("An error occurred");
      },
    );

    return { success, data };
  };

  const logout = async (): Promise<boolean> => {
    let success = false;
    const token = getAccessToken();

    await tryExecute(
      () =>
        api.post<ApiResponse<any>, any>("/auth/logout", "", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      async (response) => {
        if (response.status === 200) {
          success = true;

          // Clear all session data
          clearAllSessionData();
        } else {
          // Even if the server logout fails, clear local data for security
          clearAllSessionData();
        }
      },
      async () => {
        toast.error("An error occurred during logout");
        // Clear local data even if there's an error
        clearAllSessionData();
      },
    );

    return success;
  };

  const updateUserProfile = async (data: FormData) => {
    let success = false;
    const token = getAccessToken();

    await tryExecute(
      () =>
        api.patch<ApiResponse<any>, any>("/users/profile", data, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }),
      async (response) => {
        if (response.status === 200) {
          success = true;
          setUserInfo(
            response.data.data.name,
            response.data.data.avatar_url,
            response.data.data.email,
          );
          toast.success("Profile updated successfully");
        }
      },
      async () => {
        toast.error("Failed to update profile");
      },
    );

    return success;
  };

  return {
    checkEmail,
    login,
    signUp,
    forgotPassword,
    resetPassword,
    getUserSearchHistory,
    updateUserProfile,
    logout,
  };
};
