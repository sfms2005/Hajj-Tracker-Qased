"use client";

import ProgressCard from "./components/ProgressCard";
import MotivationCard from "./components/MotivationCard";
import Timeline from "./components/Timeline";
import Button from "./components/Button";
import { getCurrentDay } from "@/data/days";

export default function Home() {
  const currentDay = getCurrentDay();
  const currentStageId = currentDay.stageId;

  return (
    <main className="pb-10">
      <header className="px-5 pt-0 pb-2 text-center">
        <p className="text-sm font-semibold text-neutral-600">
          أنت الآن في
        </p>

        <h1 className="mt-1 qs-gold-underline inline-block pb-2 text-2xl font-extrabold leading-tight text-[#1a1612] sm:text-3xl">
          {currentDay.title}
        </h1>

        <p className="mt-2 text-sm font-bold text-[#1a1612]/75">
          من رحلة الحج
        </p>
      </header>

      <div className="flex flex-col gap-5 px-5 pt-5">
        <ProgressCard percentage={currentDay.progress} />

        <MotivationCard message={currentDay.motivation} />

        <Timeline currentStageId={currentStageId} />

        <div className="flex flex-col gap-3">
          <Button
            href="/duas"
            variant="secondary"
            icon={<HeartIcon />}
          >
            أدعيتي
          </Button>

          <Button
            href="/mashair"
            variant="primary"
            icon={<MapPinIcon />}
          >
            مواقع المشاعر
          </Button>
        </div>
      </div>
    </main>
  );
}

function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M12 21s-7-4.35-9.33-8.83C1.27 9.39 2.6 5.5 6.2 4.7c2.04-.45 4.06.4 5.3 1.95l.5.62.5-.62c1.24-1.55 3.26-2.4 5.3-1.95 3.6.8 4.93 4.69 3.53 7.47C19 16.65 12 21 12 21Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
