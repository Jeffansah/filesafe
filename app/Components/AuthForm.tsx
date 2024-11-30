"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader2Icon, LoaderCircleIcon, PencilIcon } from "lucide-react";
import Link from "next/link";

type FormType = "sign-in" | "sign-up";

const authFormSchema = (formType: FormType) => {
  return z.object({
    email: z.string().email(),
    fullName:
      formType === "sign-up"
        ? z.string().min(2).max(50)
        : z.string().optional(),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
          <h1 className="text-black h1 mx-auto max-lg:text-2xl max-lg:font-semibold">
            {type === "sign-in"
              ? "Sign into your account"
              : "Let's sign you up!"}
          </h1>
          {type === "sign-up" ? (
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <div className="shad-form-item">
                    <FormLabel className="shad-form-label">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        {...field}
                        className="shad-input"
                      />
                    </FormControl>
                  </div>

                  <FormMessage className="shad-form-message" />
                </FormItem>
              )}
            />
          ) : (
            <></>
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="shad-form-item">
                  <FormLabel className="shad-form-label">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="shad-input"
                    />
                  </FormControl>
                </div>

                <FormMessage className="shad-form-message" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="form-submit-button py-8"
            disabled={isLoading}
          >
            {isLoading ? (
              <LoaderCircleIcon className="animate-spin w-48 text-white mx-auto" />
            ) : type === "sign-in" ? (
              "Sign In"
            ) : (
              "Create Account"
            )}
          </Button>
          {errorMessage !== null && (
            <p className="error-message">{errorMessage}</p>
          )}
          <div className="grid place-items-center">
            <Link
              className="text-light-100 text-sm hover:underline cursor-pointer mx-auto"
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            >
              {type === "sign-in"
                ? "Don't have an account? Sign up now."
                : "Already have an account? Sign in here"}
            </Link>
          </div>
        </form>
      </Form>
      {/* OTP Verification */}
    </>
  );
};

export default AuthForm;
