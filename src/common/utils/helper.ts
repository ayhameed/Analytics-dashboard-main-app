const isClient = typeof window !== "undefined";

export const setAccessToken = (token: string) => {
  if (isClient) localStorage.setItem("access_token", token);
};

export const getAccessToken = (): string | null => {
  return isClient ? localStorage.getItem("access_token") : null;
};

export const setUserId = (id: string) => {
  if (isClient) localStorage.setItem("user_id", id);
};

export const getUserId = (): string | null => {
  return isClient ? localStorage.getItem("user_id") : null;
};

export const setUserInfo = (name: string | null, imageUrl: string | null, email: string | null) => {
  if (!isClient) return;

  if (name) localStorage.setItem("user_name", name);
  if (imageUrl) localStorage.setItem("user_image", imageUrl);
  if (email) localStorage.setItem("user_email", email);
};

export const getUserInfo = () => {
  if (!isClient) {
    return {
      name: null,
      imageUrl: null,
      email: null,
    };
  }

  return {
    name: localStorage.getItem("user_name"),
    imageUrl: localStorage.getItem("user_image"),
    email: localStorage.getItem("user_email"),
  };
};
