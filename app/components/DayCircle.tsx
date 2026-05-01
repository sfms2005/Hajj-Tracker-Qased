import Link from "next/link";
import type { Stage } from "@/data/stages";

interface Props {
  stage: Stage;
  isActive?: boolean;
}

export default function DayCircle({ stage, isActive }: Props) {
  const base =
    "flex flex-col items-center justify-center rounded-full text-center leading-tight transition-all duration-200 hover:scale-[1.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d1ae37]/50";

  const activeStyle =
    "h-[120px] w-[120px] bg-[linear-gradient(135deg,#1f3d2b,#2e6b4a)] text-white shadow-[0_12px_28px_rgba(31,61,43,0.32)] ring-2 ring-[#d1ae37]/70 ring-offset-2 ring-offset-[#f7f5f2]";
  const idleStyle =
    "h-[108px] w-[108px] bg-white text-[#1f3d2b] shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]";

  return (
    <Link
      href={`/day/${stage.id}`}
      aria-label={stage.title}
      className={`${base} ${isActive ? activeStyle : idleStyle}`}
    >
      <span
        className={`font-extrabold leading-none ${
          isActive ? "text-3xl" : "text-xl"
        }`}
      >
        {stage.id}
      </span>
      <span
        className={`mt-1 px-2 font-bold ${
          isActive ? "text-[12px]" : "text-[10px]"
        }`}
      >
        {stage.title}
      </span>
    </Link>
  );
}
