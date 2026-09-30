import { Sparkles, Sun, CircleUserRound } from "lucide-react";
import { NAVIGATION, SIDEBAR_BOTTOM } from "@/data/navigation";
import Link from "next/link";
import Button from "../ui/Button";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-70 flex-col border-r border-[#c7c7c75d]">
      <div className="flex items-center border-b border-[#c7c7c75d] w-90 p-4">
        <div className="mx-3 bg-[#d600d6] w-17 rounded-[18px] p-4">
          <Sparkles size={32} />
        </div>

        <h1 className="text-[30px] font-semibold leading-tight tracking-[-1.5px]">
          NOVA
        </h1>
      </div>

      <nav className="flex flex-1 flex-col gap-8 p-4">
        {NAVIGATION.map((link) => (
          <div key={link.label}>
            <p className="mb-2 px-3 font-medium text-gray-500 text-xl">
              {link.label}
            </p>
            <div>
              {link.items.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    href={item.href}
                    key={item.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition text-gray-400 hover:bg-[#d600d6] hover:text-black focus:bg-[#d600d6] text-xl"
                  >
                    <Icon size={18} />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        {SIDEBAR_BOTTOM.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              href={item.href}
              key={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition text-gray-400 hover:bg-[#d600d6] hover:text-black focus:bg-[#d600d6] text-xl"
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        <Button className="ml-5 flex items-center gap-3 rounded-lg py-2.5 transition text-gray-400 hover:bg-[#d2d2d2] focus:bg-[#d2d2d2] text-xl pr-28 pl-2">
          <Sun size={18} />
          Light mode
        </Button>

        <div className="flex border-t border-[#c7c7c75d] w-90 mt-2 pt-5 pb-5 pl-5 gap-2 items-center">
          <CircleUserRound size={37} color="#d600d6" />
          <div className="flex flex-col">
            <p className="text-2xl">example</p>
            <p className="text-gray-400">example@gmail.com</p>
          </div>
          <Button className="text-gray-400">Log out</Button>
        </div>
      </div>
    </aside>
  );
}
