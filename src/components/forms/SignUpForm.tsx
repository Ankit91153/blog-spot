"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { useBoundStore } from "@/store/store";
import { LOGIN, OTP, SINUP } from "@/constant/modelType";
import { signupSchema } from "@/validation/signupSchema";
import { signup } from "@/services/authService";

export default function SignUpForm() {
  const openModal = useBoundStore((state) => state.openModal);
  const setSignupData = useBoundStore((state) => state.setSignupData);

  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={signupSchema}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          const response = await signup(values.email, values.name);
          console.log("Signup response:", response);
          if (response?.data) {
            setSignupData(response.data);
            openModal(OTP, { mode: SINUP });
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
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Field
              as={Input}
              id="name"
              name="name"
              type="name"
              placeholder="Your Name"
              autoComplete="name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-sm text-red-500 mt-1"
            />
          </div>
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
            <span onClick={() => openModal(LOGIN)} className="cursor-pointer">
              Sign In
            </span>
          </div>
        </Form>
      )}
    </Formik>
  );
}
