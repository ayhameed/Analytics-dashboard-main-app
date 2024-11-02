export type ApiVerifyEmailPayload = {
  email: string;
};

export type ApiLoginPayload = string;

export type ApiSignUpPayload = {
  email: string;
  password: string;
};

export type ApiResetPasswordPayload = {
  token: string;
  password: string;
};

export type LoginResult = {
  success: boolean;
  isAdmin: boolean;
};

export type ApiLoginData = {
  user: {
    email: string;
    id: number;
    is_active: boolean;
    is_admin: boolean;
    name: string | null;
    avatar_url: string | null;
  };
  tokens: {
    access_token: string;
    refresh_token: string;
  };
};

export interface blockChainImgs {
  Scroll: string;
  Ethereum: string;
  "BNB COIN": string;
  Fanthom: string;
}
