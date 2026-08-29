import { UserPlus, Mail, Lock } from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Label from "../ui/Label";
import GoogleButton from "../ui/GoogleButton";

export default function Register() {
  return (
    <form className="mx-auto w-full max-w-140 py-10" action="">
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
            Email
          </Label>

          <div className="relative">
            <Mail
              color="#b1afaf"
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />

            <Input placeholder="you@example.com" className="pl-12" />
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

            <Input placeholder="••••••••" className="pl-12" />
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

              <Input placeholder="••••••••" className="pl-12" />
            </div>
          </div>

          <Button className="mt-7 h-19 w-full bg-[#9B5DE5] text-[23px] font-medium text-white transition-colors hover:bg-[#8B4DD5] rounded-2xl">
            Create account
          </Button>
        </div>
      </div>

      <p className="mt-10 text-[20px] text-[#A1A1AA] text-center">
        Already have an account?{" "}
        <Button className="text-[#9B5DE5] hover:text-[#B47AF0]">
          Create one
        </Button>
      </p>
    </form>
  );
}
