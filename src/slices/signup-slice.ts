import { StateCreator } from "zustand";
import { ILoginRequestOtpResponseData, ISignupResponseData } from "@/types/auth";

export interface ISignUpSlice {
  signupData: ISignupResponseData | ILoginRequestOtpResponseData | null;
  setSignupData: (data: ISignupResponseData | ILoginRequestOtpResponseData) => void;
  clearSignupData: () => void;
}

export const createSignUpSlice: StateCreator<ISignUpSlice> = (set) => ({
  signupData: null,
  setSignupData: (data) => set({ signupData: data }),
  clearSignupData: () => set({ signupData: null }),
});