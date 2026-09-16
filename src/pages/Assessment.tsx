import {
  CheckCircle2,
  FileText,
  Sparkles,
  Upload,
} from "lucide-react";
import { useState } from "react";
import { questions } from "../data/mockData";

export default function Assessment() {
  const [generated, setGenerated] = useState(false);
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState<number | null>(null);

  const generateQuiz = () => {
    setGenerated(true);
  };

  const submitAnswer = () => {
  if (selected === null) return;

  if (current < questions.length - 1) {
    setCurrent(current + 1);
    setSelected(null);
  } else {
    setScore(
      questions.reduce((total, _, index) => {
        return total + (index === 0 ? 1 : 0);
      }, 0)
    );
  }
};

  if (score !== null) {
    return (
      <div className="p-8">

        <div className="max-w-2xl mx-auto text-center bg-white border border-slate-200 rounded-2xl p-10">

          <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full mx-auto flex items-center justify-center">
            <CheckCircle2 size={32} />
          </div>

          <h1 className="text-3xl font-bold mt-5">
            Assessment Completed
          </h1>

          <p className="text-slate-500 mt-2">
            Your AI assessment has been evaluated.
          </p>

          <div className="text-6xl font-bold text-blue-600 mt-8">
            80%
          </div>

          <p className="text-slate-500 mt-2">
            4 out of 5 correct
          </p>

          <div className="bg-blue-50 rounded-xl p-5 mt-8 text-left">
            <div className="flex items-center gap-2 font-semibold">
              <Sparkles size={18} className="text-blue-600" />
              AI Feedback
            </div>

            <p className="text-sm text-slate-600 mt-3">
              Strong understanding of statistical concepts.
              Your next recommended focus area is Python-based
              statistical analysis.
            </p>
          </div>

          <button
            onClick={() => {
              setScore(null);
              setGenerated(false);
              setCurrent(0);
            }}
            className="bg-slate-900 text-white px-6 py-3 rounded-xl mt-6"
          >
            Generate New Assessment
          </button>
        </div>
      </div>
    );
  }

  if (started) {
    const question = questions[current];

    return (
      <div className="p-8">

        <div className="max-w-3xl mx-auto">

          <div className="flex justify-between mb-5">
            <span className="text-sm text-slate-500">
              Question {current + 1} of {questions.length}
            </span>

            <span className="text-sm text-blue-600 font-medium">
              AI Assessment
            </span>
          </div>

          <div className="h-2 bg-slate-100 rounded-full mb-8">
            <div
              className="h-2 bg-blue-600 rounded-full"
              style={{
                width: `${((current + 1) / questions.length) * 100}%`,
              }}
            />
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8">

            <h2 className="text-xl font-bold leading-relaxed">
              {question.question}
            </h2>

            <div className="space-y-3 mt-7">
              {question.options.map((option, index) => (
                <button
                  key={option}
                  onClick={() => setSelected(index)}
                  className={`w-full text-left p-4 rounded-xl border transition ${
                    selected === index
                      ? "border-blue-600 bg-blue-50"
                      : "border-slate-200 hover:border-blue-300"
                  }`}
                >
                  <span className="font-medium mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>

                  {option}
                </button>
              ))}
            </div>

            <button
              onClick={submitAnswer}
              disabled={selected === null}
              className="w-full bg-blue-600 disabled:bg-slate-300 text-white py-3 rounded-xl mt-7 font-medium"
            >
              {current === questions.length - 1
                ? "Submit Assessment"
                : "Next Question"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (generated) {
    return (
      <div className="p-8">

        <div className="max-w-3xl mx-auto">

          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
              <CheckCircle2 />
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                Assessment Generated
              </h1>

              <p className="text-sm text-slate-500">
                AI analyzed your learning material.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6">

            <div className="grid grid-cols-3 gap-5">

              <div>
                <p className="text-sm text-slate-500">
                  Questions
                </p>
                <p className="text-2xl font-bold mt-1">
                  5
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Difficulty
                </p>
                <p className="text-2xl font-bold mt-1">
                  Medium
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Topic
                </p>
                <p className="text-2xl font-bold mt-1">
                  Statistics
                </p>
              </div>
            </div>

            <button
              onClick={() => setStarted(true)}
              className="w-full bg-blue-600 text-white py-3 rounded-xl mt-8 font-medium"
            >
              Start Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">

      <div className="max-w-3xl mx-auto">

        <div className="mb-8">
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
            <Sparkles size={16} />
            AI Powered
          </div>

          <h1 className="text-3xl font-bold mt-2">
            AI Assessment Generator
          </h1>

          <p className="text-slate-500 mt-2">
            Upload learning material and automatically generate
            MCQs and quizzes.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8">

          <div className="border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center">

            <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
              <Upload size={25} />
            </div>

            <h2 className="font-semibold text-lg mt-5">
              Upload Learning Material
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              PDF, PPT, DOCX or other learning material
            </p>

            <label className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl mt-5 cursor-pointer">
              <FileText size={17} />
              Choose File

              <input
                type="file"
                className="hidden"
              />
            </label>

            <p className="text-xs text-slate-400 mt-3">
              Demo mode: file processing is simulated
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-6">

            <div>
              <label className="text-sm font-medium">
                Number of Questions
              </label>

              <select className="w-full border border-slate-200 rounded-xl p-3 mt-2">
                <option>5 Questions</option>
                <option>10 Questions</option>
                <option>20 Questions</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">
                Difficulty
              </label>

              <select className="w-full border border-slate-200 rounded-xl p-3 mt-2">
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
          </div>

          <button
            onClick={generateQuiz}
            className="w-full bg-blue-600 text-white py-3 rounded-xl mt-7 font-medium flex justify-center items-center gap-2"
          >
            <Sparkles size={18} />
            Generate AI Assessment
          </button>
        </div>
      </div>
    </div>
  );
}