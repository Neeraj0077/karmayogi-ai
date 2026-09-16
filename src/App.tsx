import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Competencies from "./pages/Competencies";
import SkillGaps from "./pages/SkillGaps";
import LearningPath from "./pages/LearningPath";
import Assessment from "./pages/Assessment";
import AdminDashboard from "./pages/AdminDashboard";

function Layout() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Sidebar />

      <div className="ml-64">

        <Navbar />

        <main>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/competencies" element={<Competencies />} />
            <Route path="/skill-gaps" element={<SkillGaps />} />
            <Route path="/learning" element={<LearningPath />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/admin" element={<AdminDashboard />} />

            <Route
              path="*"
              element={<Navigate to="/dashboard" replace />}
            />
          </Routes>
        </main>

      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/*" element={<Layout />} />

      </Routes>

    </BrowserRouter>
  );
}