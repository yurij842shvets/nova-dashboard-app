import { Sparkles } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-60 border-r border-gray-200">
      <div className="flex items-center border-b border-[#c7c7c75d] w-100 pb-2">
        <div className="mx-3 bg-[#d600d6] w-17 rounded-[18px] p-4">
          <Sparkles size={35} />
        </div>

        <h1 className="text-[35px] font-semibold leading-tight tracking-[-1.5px]">
          NOVA
        </h1>
      </div>
    </aside>
  );
}
