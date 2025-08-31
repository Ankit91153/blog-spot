import { create } from "zustand";
import { createModalSlice, ModalSlice } from "@/slices/model-slice";

type RootState = ModalSlice;

export const useBoundStore = create<RootState>()((...a) => ({
  ...createModalSlice(...a),
}));