// Helper function to set access token
export const setAccessToken = (token: string) => {
  localStorage.setItem("access_token", token);
};

// Helper function to get access token
export const getAccessToken = (): string | null => {
  return localStorage.getItem("access_token");
};

export const setUserId = (id: string) => {
  localStorage.setItem("user_id", id);
};

export const getUserId = (): string | null => {
  return localStorage.getItem("user_id");
};

export const setUserInfo = (name: string | null, imageUrl: string | null, email: string | null) => {
  if (name) {
    localStorage.setItem("user_name", name);
  }
  if (imageUrl) {
    localStorage.setItem("user_image", imageUrl);
  }
  if (email) {
    localStorage.setItem("user_email", email);
  }
};

// Helper function to get user data
export const getUserInfo = () => {
  return {
    name: localStorage.getItem("user_name"),
    imageUrl: localStorage.getItem("user_image"),
    email: localStorage.getItem("user_email"),
  };
};
