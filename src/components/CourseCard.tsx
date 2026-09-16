import { ArrowRight, Clock, Sparkles } from "lucide-react";
import type { Course } from "../types";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-lg transition">
      <div className="flex justify-between">
        <div>
          <p className="text-xs text-blue-600 font-semibold">
            {course.provider}
          </p>

          <h3 className="font-semibold text-lg mt-2">
            {course.title}
          </h3>
        </div>

        <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-lg h-fit text-xs font-semibold">
          <Sparkles size={13} />
          {course.match}% Match
        </div>
      </div>

      <p className="text-sm text-slate-500 mt-3">
        {course.description}
      </p>

      <div className="flex items-center gap-5 mt-4 text-xs text-slate-500">
        <span className="flex gap-1 items-center">
          <Clock size={14} />
          {course.duration}
        </span>

        <span>{course.level}</span>
      </div>

      <button className="mt-5 w-full bg-slate-900 text-white py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-600 transition">
        View Course
        <ArrowRight size={16} />
      </button>
    </div>
  );
}