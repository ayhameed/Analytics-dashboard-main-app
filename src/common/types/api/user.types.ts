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

export type ApiLoginData = {
  accessToken: string;
};

export interface blockChainImgs {
  Scroll: string;
  Ethereum: string;
  "BNB COIN": string;
  Fanthom: string;
}
