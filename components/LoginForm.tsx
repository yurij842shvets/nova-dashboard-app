"use client";

import { LogIn, Mail, Lock } from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Label from "../ui/Label";
import GoogleButton from "../ui/GoogleButton";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!email.trim || !password) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
        return;
      }

      console.log("LOGIN SUCCESS");
    } catch (error) {
      console.error("LOGIN ERROR", error);
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="mx-auto w-full max-w-140 py-10"
      action=""
    >
      <div className="mx-auto bg-[#d600d6] w-20 rounded-[18px] p-4">
        <LogIn size={45} color="#fff" />
      </div>

      <div className="mb-16 text-center py-5">
        <h1 className="text-[48px] font-semibold leading-tight tracking-[-1.5px]">
          Welcome back
        </h1>

        <p className="mt-4 text-[24px] text-[#A1A1AA]">
          Log in to your account
        </p>
      </div>

      <div className="w-full rounded-3xl border border-[#27272A] bg-[#111113] p-13">
        <GoogleButton />

        <div className="my-12 flex items-center gap-5">
          <div className="h-px flex-1 bg-[#27272A]" />

          <span className="text-[18px] text-[#A1A1AA]">OR</span>

          <div className="h-px flex-1 bg-[#27272A]" />
        </div>

        <div>
          <Label className="mb-4 block text-[22px] font-medium pt-2">
            Email
          </Label>

          <div className="relative">
            <Mail
              color="#b1afaf"
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />

            <Input
              value={email}
              placeholder="you@example.com"
              className="pl-12"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <Label className="mb-4 block text-[22px] font-medium pt-2">
              Password
            </Label>

            <Button className="text-[19px] text-[#9B5DE5] transition-colors hover:text-[#B47AF0]">
              Forgot password?
            </Button>
          </div>

          <div className="relative">
            <Lock
              color="#b1afaf"
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />

            <Input
              value={password}
              placeholder="••••••••"
              className="pl-12"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="mt-4 text-center text-sm text-red-500">{error}</p>
          )}

          <Button
            disabled={isLoading}
            type="submit"
            className="mt-7 h-19 w-full bg-[#9B5DE5] text-[23px] font-medium text-white transition-colors hover:bg-[#8B4DD5] rounded-2xl"
          >
            {isLoading ? "Signing in..." : "Log in"}
          </Button>
        </div>
      </div>

      <p className="mt-10 text-[20px] text-[#A1A1AA] text-center">
        Don't have an account?{" "}
        <Button onClick={() => router.push("/register")} className="text-[#9B5DE5] hover:text-[#B47AF0]">
          Create one
        </Button>
      </p>
    </form>
  );
}
