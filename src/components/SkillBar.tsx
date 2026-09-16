interface Props {
  name: string;
  current: number;
  required: number;
}

export default function SkillBar({
  name,
  current,
  required,
}: Props) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-sm text-slate-700">
          {name}
        </span>

        <span className="text-sm text-slate-500">
          {current}% / {required}%
        </span>
      </div>

      <div className="h-2 bg-slate-100 rounded-full">
        <div
          className={`h-2 rounded-full ${
            current < required ? "bg-orange-500" : "bg-green-500"
          }`}
          style={{ width: `${current}%` }}
        />
      </div>
    </div>
  );
}