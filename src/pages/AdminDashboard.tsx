import {
  ArrowUp,
  Brain,
  Users,
  BookOpen,
  AlertTriangle,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { skill: "Statistics", score: 82 },
  { skill: "Python", score: 57 },
  { skill: "SQL", score: 51 },
  { skill: "AI/ML", score: 31 },
  { skill: "GIS", score: 42 },
  { skill: "Cloud", score: 27 },
];

export default function AdminDashboard() {
  return (
    <div className="p-8">

      <div className="mb-8">
        <p className="text-blue-600 text-sm font-medium">
          Organization Intelligence
        </p>

        <h1 className="text-3xl font-bold mt-1">
          Administrator Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Workforce competency and capacity-building insights.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-5">

        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <Users className="text-blue-600" />

          <p className="text-sm text-slate-500 mt-4">
            Total Employees
          </p>

          <p className="text-3xl font-bold mt-1">
            4,280
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <Brain className="text-purple-600" />

          <p className="text-sm text-slate-500 mt-4">
            Avg Competency
          </p>

          <p className="text-3xl font-bold mt-1">
            68%
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <BookOpen className="text-green-600" />

          <p className="text-sm text-slate-500 mt-4">
            Courses Completed
          </p>

          <p className="text-3xl font-bold mt-1">
            12,480
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <AlertTriangle className="text-orange-600" />

          <p className="text-sm text-slate-500 mt-4">
            Critical Skill Gaps
          </p>

          <p className="text-3xl font-bold mt-1">
            1,284
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="col-span-2 bg-white border border-slate-200 rounded-2xl p-6">

          <h2 className="font-bold text-lg">
            Organization Competency
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Average competency by skill
          </p>

          <div className="h-80 mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="skill" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#2563eb" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-950 text-white rounded-2xl p-6">

          <h2 className="font-bold text-lg">
            Emerging Skill Demand
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            AI predicted workforce requirements
          </p>

          <div className="mt-7 space-y-5">

            {[
              ["AI / ML", "+42%"],
              ["Big Data", "+35%"],
              ["Cloud Computing", "+31%"],
              ["GIS", "+26%"],
              ["Data Engineering", "+24%"],
            ].map(([skill, growth]) => (
              <div
                key={skill}
                className="flex justify-between items-center"
              >
                <span className="text-sm">
                  {skill}
                </span>

                <span className="flex items-center gap-1 text-green-400 text-sm">
                  <ArrowUp size={14} />
                  {growth}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}