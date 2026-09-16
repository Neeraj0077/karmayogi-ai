import { Bell, Search, Sparkles, Stars } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-3 text-slate-400"
        />

        <input
          placeholder="Search courses, skills..."
          className="w-80 bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell size={20} className="text-slate-500" />

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">
            PP
          </div>


          <div>
            <p className="font-medium text-sm flex items-center gap-1.5">
              Pari Patel
              <Stars
                size={14}
                strokeWidth={2.2}
                className="text-cyan-500"
              />
            </p>

            <p className="text-xs text-slate-500 flex items-center gap-1">
              From Andromeda Galaxy
              <Sparkles
                size={13}
                strokeWidth={2}
                className="text-pink-500"
              />
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}