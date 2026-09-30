"use client";

import { UserPlus, Mail, Lock, FolderPen } from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Label from "../ui/Label";
import GoogleButton from "../ui/GoogleButton";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");

  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!name.trim() || !email.trim() || !password || !confirmedPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password != confirmedPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Registration failed");
        return;
      }

      console.log("REGISTER SUCCESS:", data);
    } catch (error) {
      console.error("Register error:", error);
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="mx-auto w-full max-w-140 py-10"
      action=""
      onSubmit={handleRegister}
    >
      <div className="mx-auto bg-[#d600d6] w-20 rounded-[18px] p-4">
        <UserPlus size={45} />
      </div>

      <div className="mb-16 text-center py-5">
        <h1 className="text-[48px] font-semibold leading-tight tracking-[-1.5px]">
          Create your account
        </h1>

        <p className="mt-4 text-[24px] text-[#A1A1AA]">
          Sign up to get started
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
            Name
          </Label>

          <div className="relative">
            <FolderPen
              color="#b1afaf"
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />

            <Input
              placeholder="username"
              className="pl-12"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              placeholder="you@example.com"
              className="pl-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <Label className="mb-4 block text-[22px] font-medium pt-2">
              Password
            </Label>
          </div>

          <div className="relative">
            <Lock
              color="#b1afaf"
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />

            <Input
              placeholder="••••••••"
              className="pl-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <Label className="mb-4 block text-[22px] font-medium pt-2">
              Confirmed password
            </Label>

            <div className="relative">
              <Lock
                color="#b1afaf"
                className="absolute left-4 top-1/2 -translate-y-1/2"
              />

              <Input
                placeholder="••••••••"
                className="pl-12"
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
              />
            </div>
          </div>

          <Button className="mt-7 h-19 w-full bg-[#9B5DE5] text-[23px] font-medium text-white transition-colors hover:bg-[#8B4DD5] rounded-2xl">
            Create account
          </Button>
        </div>
      </div>

      <p className="mt-10 text-[20px] text-[#A1A1AA] text-center">
        Already have an account?{" "}
        <Button
          className="text-[#9B5DE5] hover:text-[#B47AF0]"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : "Create account"}
        </Button>
      </p>
    </form>
  );
}
