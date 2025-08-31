"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { contentSchema } from "@/validation/contentSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"

export const ContentForm = () => {
  return (
    <Formik
      initialValues={{ email: "", description: "" }}
      validationSchema={contentSchema}
      onSubmit={(values) => {
        console.log("Form Submitted:", values);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form className="mx-auto p-6 bg-card text-card-foreground shadow-md rounded-lg space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground"
            >
              Email
            </label>
            <Field
             as={Input}
              type="email"
              name="email"
              className="w-full p-2 mt-1 rounded-md border bg-background text-foreground"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-destructive text-sm mt-1"
            />
          </div>

          {/* Description Field */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-foreground"
            >
              Description
            </label>
            <Field
              as={Textarea}
              name="description"
              rows={4}
              className="w-full p-2 mt-1 rounded-md border bg-background text-foreground"
              placeholder="Enter description..."
            />
            <ErrorMessage
              name="description"
              component="p"
              className="text-destructive text-sm mt-1"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
             variant="outline"
            disabled={isSubmitting || !isValid}
            className="w-full"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
