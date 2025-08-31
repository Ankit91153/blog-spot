"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useBoundStore } from "@/store/store";
import SignInForm from "../forms/SignInForm";
import { LOGIN, OTP, SINUP } from "@/constant/modelType";
import OTPForm from "../forms/OTPForm";
import SignUpForm from "../forms/SignUpForm";

export function ModalProvider() {
  const { modalType, isOpen, data, closeModal } = useBoundStore();
  console.log("ModalProvider Rendered", { modalType, isOpen, data });
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {modalType === LOGIN && "Login"}
            {modalType === OTP && "OTP Verification"}
            {modalType === SINUP && "Sign Up"}
           
          </DialogTitle>
        </DialogHeader>

        {modalType === LOGIN && <SignInForm />}
        {modalType === OTP && <OTPForm/>}
        {modalType === SINUP && <SignUpForm/>}
      </DialogContent>
    </Dialog>
  );
}
