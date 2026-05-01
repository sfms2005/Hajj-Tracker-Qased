"use client";

import { useEffect, useState } from "react";

interface Props {
  stageId: number;
  tasks: string[];
}

export default function TasksList({ stageId, tasks }: Props) {
  const storageKey = `hajj-tasks-${stageId}`;
  const [checked, setChecked] = useState<boolean[]>(() =>
    tasks.map(() => false),
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const stored = JSON.parse(raw) as boolean[];
        if (Array.isArray(stored) && stored.length === tasks.length) {
          setChecked(stored);
        }
      }
    } catch {}
    setHydrated(true);
  }, [storageKey, tasks.length]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {}
  }, [checked, hydrated, storageKey]);

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <ul className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
      {tasks.map((task, i) => {
        const isChecked = checked[i];
        return (
          <li
            key={i}
            className="flex items-center gap-3 border-b border-[#e5e1da] px-4 py-3.5 last:border-b-0"
          >
            <p
              className={`flex-1 text-right text-[14px] font-semibold transition-colors duration-200 ${
                isChecked
                  ? "text-neutral-400 line-through"
                  : "text-[#2b2b2b]"
              }`}
            >
              {task}
            </p>

            <button
              type="button"
              role="checkbox"
              aria-checked={isChecked}
              aria-label={task}
              onClick={() => toggle(i)}
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 active:scale-90 ${
                isChecked
                  ? "scale-105 border-transparent bg-[linear-gradient(135deg,#1f3d2b,#2e6b4a)]"
                  : "border-[#d1ae37] bg-white hover:bg-[#d1ae37]/10"
              }`}
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="white"
                strokeWidth="3"
                className={`h-4 w-4 transition-all duration-200 ${
                  isChecked ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}
                aria-hidden="true"
              >
                <path
                  d="M5 10l3 3 7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
