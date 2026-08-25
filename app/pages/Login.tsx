import { LogIn, Mail, Lock } from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function Login() {
  return (
    <form className="mx-auto w-full max-w-140 py-10" action="">
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
        {/* <div>google</div> */}

        <div className="my-12 flex items-center gap-5">
          <div className="h-px flex-1 bg-[#27272A]" />

          <span className="text-[18px] text-[#A1A1AA]">OR</span>

          <div className="h-px flex-1 bg-[#27272A]" />
        </div>

        <div>
          <label htmlFor="" className="mb-4 block text-[22px] font-medium">Email</label>

          <div className="relative">
            <Mail color="#b1afaf" />

            <Input />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="" className="mb-4 block text-[22px] font-medium">Password</label>

            <button className="text-[19px] text-[#9B5DE5] transition-colors hover:text-[#B47AF0]">
              Forgot password?
            </button>
          </div>

          <div className="relative">
            <Lock color="#b1afaf" />

            <Input />
          </div>

          <button className="mt-7 h-19 w-full bg-[#9B5DE5] text-[23px] font-medium text-white transition-colors hover:bg-[#8B4DD5] rounded-2xl">
            Log in
          </button>
        </div>
      </div>

      <p className="mt-10 text-[20px] text-[#A1A1AA] text-center">
          Don't have an account?{" "}
          <button className="text-[#9B5DE5] hover:text-[#B47AF0]">
            Create one
          </button>
        </p>
    </form>
  );
}
