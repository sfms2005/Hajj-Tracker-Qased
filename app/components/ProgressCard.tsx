interface Props {
  percentage: number;
}

export default function ProgressCard({ percentage }: Props) {
  const safePercent = Math.max(0, Math.min(100, percentage));

  return (
    <div className="rounded-2xl bg-white px-4 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-2.5">
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-[#e5e1da]">
          <div
            className="h-full rounded-full bg-[#1f3d2b] transition-[width] duration-500 ease-out"
            style={{ width: `${safePercent}%` }}
          />
        </div>
        <span className="min-w-11 text-left text-sm font-bold text-[#1f3d2b]">
          %{safePercent}
        </span>
      </div>
    </div>
  );
}
