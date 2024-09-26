export type ApiUser = {
  id: string;
  email: string;
};

export type ApiVerifyEmailPayload = {
  email: string;
};

export type ApiValidateOtpPayload = {
  email: string;
  otp: string;
};
export type ApiValidateOtpData = {
  isValid: boolean;
};

export type ApiLoginPayload = {
  email: string;
  password: string;
};
export type ApiLoginData = {
  accessToken: string;
};

export type ApiCheckEmailAvailabilityPayload = {
  email: string;
};
export type ApiCheckEmailAvailabilityData = {
  userExists: boolean;
};
