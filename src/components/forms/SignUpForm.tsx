"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { emailSchema } from "@/validation/emailSchema";
import { useBoundStore } from "@/store/store";
import { LOGIN, OTP } from "@/constant/modelType";
import { signupSchema } from "@/validation/signupSchema";

export default function SignUpForm() {
  const openModal = useBoundStore((state) => state.openModal);

  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={signupSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("✅ Submitted:", values);
        setSubmitting(false);
        openModal(OTP);
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
            <span onClick={() => openModal(LOGIN)} className="cursor-pointer">Sign In</span>
          </div>
        </Form>
      )}
    </Formik>
  );
}
