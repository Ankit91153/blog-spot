import { create } from "zustand";
import { persist } from "zustand/middleware";

import { createModalSlice, ModalSlice } from "@/slices/model-slice";
import { createSignUpSlice, ISignUpSlice } from "@/slices/signup-slice";
import { createUserSlice, IUserSlice } from "@/slices/user-slice";
import {
  createAccessTokenSlice,
  IAccessTokenSlice,
} from "@/slices/access-token-slice";

type RootState = ModalSlice & ISignUpSlice & IUserSlice & IAccessTokenSlice;

export const useBoundStore = create<RootState>()(
  persist(
    (...a) => ({
      ...createModalSlice(...a),
      ...createSignUpSlice(...a),
      ...createUserSlice(...a),
      ...createAccessTokenSlice(...a),
    }),
    { name: "root-store" }
  )
);
