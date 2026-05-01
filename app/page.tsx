import ProgressCard from "./components/ProgressCard";
import MotivationCard from "./components/MotivationCard";
import Timeline from "./components/Timeline";
import Button from "./components/Button";
import { days } from "@/data/days";

export default function Home() {
  const today = new Date().toISOString().split("T")[0];
  const currentDay = days.find((d) => d.date === today) || days[0];
  const currentStageId = currentDay.stageId;

  return (
    <main className="pb-10">
      <header className="-mt-6 px-5 pt-0 pb-2 text-center">
        <p className="text-sm font-semibold text-neutral-600">أنت الآن في</p>
        <h1 className="mt-1 text-4xl font-extrabold leading-tight text-[#1F5D3B] sm:text-[42px]">
          {currentDay.title}
        </h1>
        <p className="mt-2 text-sm font-bold text-neutral-700">
          من رحلة الحج
        </p>
      </header>

      <div className="flex flex-col gap-5 px-5 pt-5">
        <ProgressCard percentage={currentDay.progress} />

        <MotivationCard message={currentDay.motivation} />

        <Timeline currentStageId={currentStageId} />

        <div className="flex flex-col gap-3">
          <Button href="/duas" variant="secondary" icon={<HeartIcon />}>
            أدعيتي
          </Button>

          <Button href="/emergency" variant="primary" icon={<BellIcon />}>
            مساعدة صحية طارئة
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

function BellIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M12 22a2.2 2.2 0 0 0 2.2-2.2H9.8A2.2 2.2 0 0 0 12 22Zm6-6V11a6 6 0 1 0-12 0v5l-1.6 1.6V19h15.2v-1.4L18 16Z" />
    </svg>
  );
}
