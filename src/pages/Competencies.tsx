import { Brain, CheckCircle2 } from "lucide-react";
import SkillBar from "../components/SkillBar";
import { competencies } from "../data/mockData";

export default function Competencies() {
  const categories = [...new Set(competencies.map((x) => x.category))];

  return (
    <div className="p-8">

      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          My Competencies
        </h1>

        <p className="text-slate-500 mt-2">
          AI-generated competency profile based on your role,
          experience and learning history.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-8">

        <div className="bg-blue-600 text-white rounded-2xl p-6">
          <Brain size={28} />

          <p className="mt-5 text-blue-100">
            Overall competency
          </p>

          <h2 className="text-4xl font-bold mt-1">
            68%
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <p className="text-slate-500 text-sm">
            Strongest competency
          </p>

          <h2 className="text-xl font-bold mt-2">
            Statistical Analysis
          </h2>

          <p className="text-green-600 text-sm mt-2">
            82% proficiency
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <p className="text-slate-500 text-sm">
            Skills requiring attention
          </p>

          <h2 className="text-xl font-bold mt-2">
            4 skills
          </h2>

          <p className="text-orange-600 text-sm mt-2">
            High priority
          </p>
        </div>
      </div>

      {categories.map((category) => (
        <div
          key={category}
          className="bg-white border border-slate-200 rounded-2xl p-6 mb-6"
        >
          <h2 className="font-bold text-lg mb-6">
            {category} Competencies
          </h2>

          <div className="grid grid-cols-2 gap-x-10">
            {competencies
              .filter((x) => x.category === category)
              .map((skill) => (
                <div key={skill.name}>
                  <SkillBar
                    name={skill.name}
                    current={skill.current}
                    required={skill.required}
                  />

                  {skill.current >= skill.required && (
                    <div className="flex items-center gap-1 text-xs text-green-600 -mt-3 mb-4">
                      <CheckCircle2 size={13} />
                      Competency requirement achieved
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}