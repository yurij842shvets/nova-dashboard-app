"use client";

import { signIn } from "next-auth/react";
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton() {
  return (
    <Button
      type="button"
      onClick={() => signIn("google")}
      className="h-16 w-full gap-3 rounded-2xl border border-[#27272A] bg-white text-[20px] text-black hover:bg-[#F4F4F5]"
    >
      <FcGoogle size={24}/>
      <span>Continue with Google</span>
    </Button>
  );
}
