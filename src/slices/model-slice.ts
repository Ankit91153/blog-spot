import { ModalType } from "@/types/ModelType";
import { StateCreator } from "zustand";


export interface ModalSlice {
  modalType: ModalType;
  isOpen: boolean;
  data?: any;
  openModal: (type: ModalType, data?: any) => void;
  closeModal: () => void;
}

export const createModalSlice: StateCreator<ModalSlice> = (set) => ({
  modalType: null,
  isOpen: false,
  data: null,
  openModal: (type, data) => set({ modalType: type, isOpen: true, data }),
  closeModal: () => set({ modalType: null, isOpen: false, data: null }),
});
