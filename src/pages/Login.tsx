import { Brain, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="w-[420px] bg-white rounded-3xl p-8">

        <div className="text-center">

          <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl mx-auto flex items-center justify-center">
            <Brain size={28} />
          </div>

          <h1 className="text-2xl font-bold mt-5">
            Karmayogi AI
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Skill Intelligence Platform
          </p>
        </div>

        <div className="mt-8 space-y-5">

          <div>
            <label className="text-sm font-medium">
              Employee ID
            </label>

            <div className="relative mt-2">
              <User
                size={17}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                defaultValue="STAT-2026-001"
                className="w-full border border-slate-200 rounded-xl py-3 pl-10 pr-4"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">
              Password
            </label>

            <div className="relative mt-2">
              <Lock
                size={17}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                type="password"
                defaultValue="123456"
                className="w-full border border-slate-200 rounded-xl py-3 pl-10 pr-4"
              />
            </div>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium"
          >
            Sign In
          </button>

        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          Prototype for SIH 2026 Internal Hackathon
        </p>
      </div>
    </div>
  );
}