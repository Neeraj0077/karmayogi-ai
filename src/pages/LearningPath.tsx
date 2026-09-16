import { CheckCircle2, Clock, Sparkles } from "lucide-react";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/mockData";

export default function LearningPath() {
  return (
    <div className="p-8">

      <div className="mb-8">
        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
          <Sparkles size={16} />
          Personalized by AI
        </div>

        <h1 className="text-3xl font-bold mt-2">
          My Learning Path
        </h1>

        <p className="text-slate-500 mt-2">
          A personalized pathway based on your role and
          competency gaps.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">

        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold text-lg">
              8-Week Recommended Roadmap
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Complete the recommended modules to improve your
              priority competencies.
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-slate-500">
              Progress
            </p>

            <p className="text-xl font-bold">
              28%
            </p>
          </div>
        </div>

        <div className="h-2 bg-slate-100 rounded-full mt-5">
          <div
            className="h-2 bg-blue-600 rounded-full"
            style={{ width: "28%" }}
          />
        </div>
      </div>

      <div className="space-y-4 mb-10">

        {[
          "Python for Data Analysis",
          "SQL for Data Management",
          "Machine Learning Fundamentals",
          "GIS for Official Statistics",
        ].map((title, index) => (
          <div
            key={title}
            className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-5"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              {index + 1}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">
                {title}
              </h3>

              <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock size={13} />
                  {index === 0 ? "8 Hours" : "6 Hours"}
                </span>

                <span>iGOT Karmayogi</span>
              </div>
            </div>

            {index === 0 ? (
              <span className="flex items-center gap-1 text-green-600 text-sm">
                <CheckCircle2 size={16} />
                Completed
              </span>
            ) : (
              <button className="text-sm text-blue-600 font-medium">
                Start
              </button>
            )}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-5">
        Recommended Courses
      </h2>

      <div className="grid grid-cols-2 gap-5">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}
      </div>
    </div>
  );
}