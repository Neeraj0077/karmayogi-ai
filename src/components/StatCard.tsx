interface Props {
  title: string;
  value: string;
  subtitle: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
}: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <p className="text-sm text-slate-500">{title}</p>

      <h3 className="text-3xl font-bold mt-2 text-slate-900">
        {value}
      </h3>

      <p className="text-xs text-slate-500 mt-2">
        {subtitle}
      </p>
    </div>
  );
}