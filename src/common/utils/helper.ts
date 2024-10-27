// Helper function to set access token
export const setAccessToken = (token: string) => {
  localStorage.setItem("access_token", token);
};

// Helper function to get access token
export const getAccessToken = (): string | null => {
  return localStorage.getItem("access_token");
};
