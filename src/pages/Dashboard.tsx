import {
  ArrowUpRight,
  BookOpen,
  Brain,
  Target,
  Trophy,
} from "lucide-react";

import StatCard from "../components/StatCard";
import SkillBar from "../components/SkillBar";
import CourseCard from "../components/CourseCard";
import { competencies, courses } from "../data/mockData";

export default function Dashboard() {
  const highGaps = competencies.filter(
    (skill) => skill.required - skill.current >= 20
  );

  return (
    <div className="p-8">

      <div className="mb-8">
        <p className="text-blue-600 font-medium text-sm">
          AI-powered learning platform
        </p>

        <h1 className="text-3xl font-bold mt-1">
          Good morning, Rahul
        </h1>

        <p className="text-slate-500 mt-2">
          Here's your personalized competency overview.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-5">
        <StatCard
          title="Overall Competency"
          value="68%"
          subtitle="+8% from last assessment"
        />

        <StatCard
          title="Skills Assessed"
          value="18"
          subtitle="Across 4 competency domains"
        />

        <StatCard
          title="Learning Hours"
          value="42h"
          subtitle="This month"
        />

        <StatCard
          title="Courses Completed"
          value="7"
          subtitle="2 courses in progress"
        />
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="col-span-2 bg-white border border-slate-200 rounded-2xl p-6">

          <div className="flex justify-between mb-6">
            <div>
              <h2 className="font-bold text-xl">
                Competency Overview
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Current competency vs required level
              </p>
            </div>

            <button className="text-blue-600 text-sm flex items-center gap-1">
              View all
              <ArrowUpRight size={16} />
            </button>
          </div>

          {competencies.slice(0, 6).map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              current={skill.current}
              required={skill.required}
            />
          ))}
        </div>

        <div className="bg-slate-950 text-white rounded-2xl p-6">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
              <Brain size={20} />
            </div>

            <div>
              <h2 className="font-semibold">
                AI Skill Analysis
              </h2>

              <p className="text-xs text-slate-400">
                Updated just now
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-300 mt-6">
            We identified
          </p>

          <p className="text-4xl font-bold mt-1">
            {highGaps.length}
          </p>

          <p className="text-sm text-slate-400">
            priority skill gaps
          </p>

          <div className="mt-6 space-y-3">
            {highGaps.slice(0, 3).map((gap) => (
              <div
                key={gap.name}
                className="bg-white/10 rounded-xl p-3"
              >
                <p className="text-sm font-medium">
                  {gap.name}
                </p>

                <p className="text-xs text-orange-300 mt-1">
                  {gap.required - gap.current}% gap
                </p>
              </div>
            ))}
          </div>

          <button className="w-full bg-white text-slate-950 py-2.5 rounded-xl mt-6 font-medium">
            View Skill Gaps
          </button>
        </div>
      </div>

      <div className="mt-8">

        <div className="flex justify-between items-center mb-5">
          <div>
            <h2 className="text-xl font-bold">
              AI Recommended Learning
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Personalized based on your competency gaps
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {courses.slice(0, 3).map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      </div>
    </div>
  );
}