import Link from "next/link";
import type { Stage } from "@/data/stages";

interface Props {
  stage: Stage;
  isActive?: boolean;
}

export default function DayCircle({ stage, isActive }: Props) {
  const base =
    "flex flex-col items-center justify-center rounded-full text-center leading-tight transition-all duration-200 hover:scale-[1.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5D3B]/40";

  const activeStyle =
    "h-[120px] w-[120px] bg-[#1F5D3B] text-white shadow-[0_12px_28px_rgba(31,93,59,0.32)]";
  const idleStyle =
    "h-[108px] w-[108px] border border-[#E5E0D7] bg-[#F1EEE6] text-[#1F5D3B] hover:border-[#1F5D3B]/40";

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
