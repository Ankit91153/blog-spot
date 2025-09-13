export interface ISignupResponseData {
  email: string;
  name: string;
  otpExpiresAt: string;
}

export interface IVerifyEmailResponseData {
  user: {
    id: string;
    email: string;
    name: string;
    isEmailVerified: boolean;
    role: string;
  };
  accessToken: string;
}

export interface ILoginRequestOtpResponseData {
  email: string;
  otpExpiresAt: string;
}

export interface ILogoutResponseData {}
export interface IProfileData {

   user: IUser;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin"; // extend if more roles
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}
