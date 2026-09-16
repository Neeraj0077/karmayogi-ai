import {
  BarChart3,
  BookOpen,
  Brain,
  ClipboardCheck,
  LayoutDashboard,
  Settings,
  Target,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "My Competencies",
    path: "/competencies",
    icon: Brain,
  },
  {
    name: "Skill Gaps",
    path: "/skill-gaps",
    icon: Target,
  },
  {
    name: "Learning Path",
    path: "/learning",
    icon: BookOpen,
  },
  {
    name: "AI Assessment",
    path: "/assessment",
    icon: ClipboardCheck,
  },
  {
    name: "Admin Analytics",
    path: "/admin",
    icon: BarChart3,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-950 text-white fixed left-0 top-0">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
            <Brain size={22} />
          </div>

          <div>
            <h1 className="font-bold text-lg">Karmayogi AI</h1>
            <p className="text-xs text-slate-400">
              Skill Intelligence
            </p>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`
              }
            >
              <Icon size={19} />
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="absolute bottom-5 left-4 right-4">
        <div className="border-t border-slate-800 pt-4 flex items-center gap-3 text-slate-400">
          <Settings size={18} />
          <span className="text-sm">Settings</span>
        </div>
      </div>
    </aside>
  );
}