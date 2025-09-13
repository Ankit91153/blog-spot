"use client";
import { LOGIN, SINUP } from "@/constant/modelType";
import { verifyEmail, verifyLoginOtp } from "@/services/authService";
import { useBoundStore } from "@/store/store";
  import {  toast } from 'react-toastify';

import React, { useRef } from "react";

export default function OTPForm({
  mode,
}: {
  mode: typeof LOGIN | typeof SINUP;
}) {
  const length = 6;
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const { setAccessToken, signupData, closeModal } = useBoundStore();

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }

    if (e.key === "Backspace") {
      if (inputsRef.current[index]?.value) {
        inputsRef.current[index]!.value = "";
      } else if (index > 0) {
        // Otherwise move to previous and clear that
        inputsRef.current[index - 1]?.focus();
        inputsRef.current[index - 1]!.value = "";
      }
    }

    if (e.key === "Delete") {
      // Delete only clears current box
      if (inputsRef.current[index]?.value) {
        inputsRef.current[index]!.value = "";
      }
    }
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    const target = e.currentTarget;
    if (target.value) {
      if (index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      } else {
        document.getElementById("otp-submit")?.focus();
      }
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (!new RegExp(`^[0-9]{${length}}$`).test(text)) {
      return;
    }
    const digits = text.split("");
    digits.forEach((digit, i) => {
      if (inputsRef.current[i]) {
        inputsRef.current[i]!.value = digit;
      }
    });
    document.getElementById("otp-submit")?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otp = inputsRef.current.map((input) => input?.value || "").join("");
    console.log("Submitted OTP:", otp);
    let response;
    try {
      if (!signupData?.email) {
        console.error("No email found for OTP verification.");
        return;
      }
      console.log("Signup Data:", mode,SINUP);
      if (mode === SINUP) {
        console.log("Verifying OTP for signup:", signupData.email, otp);
        
        response = await verifyEmail(signupData.email, otp);
      } else {
        // Call verify OTP API for login
        response = await verifyLoginOtp(signupData.email, otp);

        console.log("Verifying OTP for login:", response);
      }
      if (response?.data?.accessToken) {
        setAccessToken(response.data.accessToken);
      }
       toast.success("Logged in successfully!")
      closeModal()
      console.log("OTP verification response:", response);
    } catch (err) {
      console.error("OTP submission error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center gap-3">
        {[...Array(length)].map((_, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            ref={(el) => (inputsRef.current[i] = el)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onInput={(e) => handleInput(e, i)}
            onFocus={handleFocus}
            onPaste={handlePaste}
            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 
                         border border-transparent hover:border-slate-200 appearance-none rounded 
                         p-4 outline-none focus:bg-white focus:border-indigo-400 
                         focus:ring-2 focus:ring-indigo-100"
          />
        ))}
      </div>

      <div className=" mx-auto mt-4">
        <button
          id="otp-submit"
          type="submit"
          className="w-full inline-flex justify-center whitespace-nowrap rounded-lg 
                       bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white 
                       shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 
                       focus:outline-none focus:ring focus:ring-indigo-300 
                       transition-colors duration-150"
        >
          Verify Account
        </button>
      </div>
    </form>
  );
}
