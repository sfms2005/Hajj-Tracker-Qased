"use client";

import { useEffect, useState } from "react";
import type { HajjTask } from "@/data/dayDetails";
import { getRulingBadgeClass } from "@/data/dayDetails";

interface Props {
  stageId: number;
  tasks: HajjTask[];
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
    <section>
      <h2 className="mb-3 text-center text-base font-extrabold text-[#1f3d2b]">
        أعمال اليوم
      </h2>
      <ul className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
        {tasks.map((task, i) => {
          const isChecked = checked[i];
          return (
            <li
              key={i}
              className="border-b border-[var(--color-track)] px-4 py-4 last:border-b-0"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`min-w-0 flex-1 text-right transition-opacity duration-200 ${
                    isChecked ? "opacity-55" : ""
                  }`}
                >
                  <p
                    className={`text-[15px] font-extrabold leading-snug ${
                      isChecked
                        ? "text-neutral-400 line-through"
                        : "text-[#2b2b2b]"
                    }`}
                  >
                    {task.title}
                  </p>

                  {task.appliesTo && (
                    <p className="mt-1 text-[13px] font-medium text-[var(--color-text-muted)]">
                      {task.appliesTo}
                    </p>
                  )}

                  {task.ruling && (
                    <p className="mt-2 flex flex-wrap items-center justify-end gap-1.5">
                      <span className="text-[12px] font-semibold text-[var(--color-text-muted)]">
                        الحكم:
                      </span>
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-[12px] font-bold ${getRulingBadgeClass(task.ruling)}`}
                      >
                        {task.ruling}
                      </span>
                    </p>
                  )}

                  {task.details && task.details.length > 0 && (
                    <ul
                      className={`mt-2.5 list-disc space-y-1 pr-4 text-[13px] leading-relaxed ${
                        isChecked ? "text-neutral-400" : "text-neutral-600"
                      }`}
                    >
                      {task.details.map((line, j) => (
                        <li key={j} className={isChecked ? "line-through" : ""}>
                          {line}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <button
                  type="button"
                  role="checkbox"
                  aria-checked={isChecked}
                  aria-label={task.title}
                  onClick={() => toggle(i)}
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 active:scale-90 ${
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
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
