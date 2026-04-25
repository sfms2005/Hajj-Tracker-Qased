interface Props {
  percentage: number;
}

export default function ProgressCard({ percentage }: Props) {
  const safePercent = Math.max(0, Math.min(100, percentage));

  return (
    <div className="rounded-2xl bg-white px-5 py-4 shadow-[0_6px_22px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3">
        <div className="relative h-3 w-full overflow-hidden rounded-full bg-[#E9E5DC]">
          <div
            className="h-full rounded-full bg-[#1F5D3B] transition-[width] duration-500 ease-out"
            style={{ width: `${safePercent}%` }}
          />
        </div>
        <span className="min-w-[3.2rem] text-left text-lg font-bold text-[#1F5D3B]">
          %{safePercent}
        </span>
      </div>
    </div>
  );
}
