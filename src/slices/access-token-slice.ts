import { StateCreator } from "zustand";

export interface IAccessTokenSlice {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  clearAccessToken: () => void;
}

export const createAccessTokenSlice: StateCreator<IAccessTokenSlice> = (set) => ({
  accessToken: null,
  setAccessToken: (token) => set({ accessToken: token }),
  clearAccessToken: () => set({ accessToken: null }),
});
