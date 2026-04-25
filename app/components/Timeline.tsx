import { stages } from "@/data/stages";
import DayCircle from "./DayCircle";

interface Props {
  currentStageId: number;
}

const VIEW_W = 360;
const VIEW_H = 500;

const positions: Record<number, { x: number; y: number }> = {
  1: { x: 280, y: 80 },
  2: { x: 80, y: 80 },
  3: { x: 80, y: 250 },
  4: { x: 280, y: 250 },
  5: { x: 280, y: 420 },
  6: { x: 80, y: 420 },
};

export default function Timeline({ currentStageId }: Props) {
  return (
    <section
      aria-label="مراحل رحلة الحج"
      className="relative mx-auto w-full max-w-md"
      style={{ height: `${VIEW_H}px` }}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        aria-hidden="true"
      >
        <g
          stroke="#1F5D3B"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        >
          <path d="M 280 80 C 220 68, 140 68, 80 80" />
          <path d="M 80 80 C 40 140, 40 190, 80 250" />
          <path d="M 80 250 C 140 280, 220 280, 280 250" />
          <path d="M 280 250 C 320 310, 320 360, 280 420" />
          <path d="M 280 420 C 220 452, 140 452, 80 420" />
        </g>
      </svg>

      {stages.map((stage) => {
        const pos = positions[stage.id];
        const isActive = stage.id === currentStageId;
        const side: "left" | "right" = pos.x > VIEW_W / 2 ? "right" : "left";

        return (
          <div
            key={stage.id}
            className="absolute"
            style={{
              left: `${(pos.x / VIEW_W) * 100}%`,
              top: `${(pos.y / VIEW_H) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="relative">
              <DayCircle stage={stage} isActive={isActive} />
              {isActive && <HereIndicator side={side} />}
            </div>
          </div>
        );
      })}
    </section>
  );
}

function HereIndicator({ side }: { side: "left" | "right" }) {
  const isRight = side === "right";

  return (
    <div
      className="pointer-events-none absolute z-10"
      style={{
        top: "-11px",
        ...(isRight ? { right: "-58px" } : { left: "-58px" }),
      }}
    >
      <span className="block whitespace-nowrap rounded-lg bg-[#1F5D3B] px-3 py-1 text-[12px] font-bold text-white shadow-md">
        أنت هنا
      </span>
      <svg
        width="52"
        height="42"
        viewBox="0 0 52 42"
        fill="none"
        className="absolute"
        style={{
          top: "100%",
          ...(isRight ? { right: "10px" } : { left: "10px" }),
        }}
        aria-hidden="true"
      >
        <g stroke="#1F5D3B" strokeWidth="2" strokeLinecap="round" fill="none">
          {isRight ? (
            <>
              <path d="M 40 4 C 34 14, 22 26, 10 34" strokeDasharray="3 4" />
              <path d="M 10 34 L 17 32 M 10 34 L 14 28" />
            </>
          ) : (
            <>
              <path d="M 12 4 C 18 14, 30 26, 42 34" strokeDasharray="3 4" />
              <path d="M 42 34 L 35 32 M 42 34 L 38 28" />
            </>
          )}
        </g>
      </svg>
    </div>
  );
}
