import { BaseApiResponse } from "@/types/BaseApi";
import BlogBaseApiClient from "./BlogBaseApiClient";
import {
  ILoginRequestOtpResponseData,
  ISignupResponseData,
  IVerifyEmailResponseData,
} from "@/types/auth";

export const signup = async (
  email: string,
  name: string
): Promise<BaseApiResponse<ISignupResponseData>> => {
  const { data: response } = await BlogBaseApiClient.post<
    BaseApiResponse<ISignupResponseData>
  >("/auth/signup", {
    email,

    name,
  });

  return response;
};
export const verifyEmail = async (
  email: string,
  otp: string
): Promise<BaseApiResponse<IVerifyEmailResponseData>> => {
  const { data: response } = await BlogBaseApiClient.post<
    BaseApiResponse<IVerifyEmailResponseData>
  >("/auth/verify-email", {
    email,

    otp,
  });

  return response;
};
export const loginRequest = async (
  email: string
): Promise<BaseApiResponse<ILoginRequestOtpResponseData>> => {
  const { data: response } = await BlogBaseApiClient.post<
    BaseApiResponse<ILoginRequestOtpResponseData>
  >("/auth/login/request-otp", {
    email,
  });

  return response;
};

export const verifyOtp = async (
  email: string,
  otp: string
): Promise<BaseApiResponse<IVerifyEmailResponseData>> => {
  const { data: response } = await BlogBaseApiClient.post<
    BaseApiResponse<IVerifyEmailResponseData>
  >("/auth/login/verify-otp", {
    email,

    otp,
  });

  return response;
};
