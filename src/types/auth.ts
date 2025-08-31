export interface ISignupResponseData {
    email: string;
    name: string;
    otpExpiresAt: string;
}

export interface IVerifyEmailResponseData {
    user:{
        id: string;
        email: string;
        name: string;
        isEmailVerified: boolean;
        role: string;
    },
    accessToken: string;
    refreshToken:string
}

export interface ILoginRequestOtpResponseData {
    email: string;
    otpExpiresAt: string;
}