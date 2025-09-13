"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { emailSchema } from "@/validation/emailSchema";
import { useBoundStore } from "@/store/store";
import { LOGIN, OTP, SINUP } from "@/constant/modelType";
import { loginRequest } from "@/services/authService";
import { toast } from "react-toastify";

export default function SignInForm() {
  const openModal = useBoundStore((state) => state.openModal);
  const setSignupData = useBoundStore((state) => state.setSignupData);

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={emailSchema}
      onSubmit={async(values, { setSubmitting }) => {
        try {
          const response = await loginRequest(values.email);
          console.log("Signup response:", response);
          if (response?.data) {
            setSignupData(response.data);
            openModal(OTP, { mode: LOGIN });
          }
          toast.success("OTP sent to your email!");
        } catch (error: any) {
          console.error("Signup error:", error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4 w-full">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Field
              as={Input}
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-sm text-red-500 mt-1"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant={"outline"}
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>

          <div className="flex items-center justify-end">
            <span onClick={() => openModal(SINUP)} className="cursor-pointer">
              Sign Up
            </span>
          </div>
        </Form>
      )}
    </Formik>
  );
}
