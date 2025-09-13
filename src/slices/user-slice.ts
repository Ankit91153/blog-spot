// user-slice.ts
import { IProfileData } from "@/types/auth";
import { StateCreator } from "zustand";

export interface IUserSlice {
  user: IProfileData | null;
  setUser: (userData: IProfileData) => void;
  clearUser: () => void;
}

export const createUserSlice: StateCreator<IUserSlice> = (set) => ({
  user: null,
  setUser: (userData) =>
    set({
      user: userData,
    }),
  clearUser: () =>
    set({
      user: null,
    }),
});
