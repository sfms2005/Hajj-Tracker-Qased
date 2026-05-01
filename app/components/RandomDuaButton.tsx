"use client";

import { useEffect, useState } from "react";
import type { DuaCategory } from "@/data/duas";

interface Props {
  categories: DuaCategory[];
}

interface RandomDua {
  text: string;
  category: string;
}

export default function RandomDuaButton({ categories }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState<RandomDua | null>(null);
  const [copied, setCopied] = useState(false);
  const [shuffling, setShuffling] = useState(false);

  const pickRandom = (): RandomDua => {
    const allDuas: RandomDua[] = categories.flatMap((cat) =>
      cat.duas.map((text) => ({ text, category: cat.title })),
    );

    if (!current) {
      const idx = Math.floor(Math.random() * allDuas.length);
      return allDuas[idx];
    }

    const others = allDuas.filter((d) => d.text !== current.text);
    const idx = Math.floor(Math.random() * others.length);
    return others[idx];
  };

  const openWithRandom = () => {
    setCopied(false);
    setCurrent(pickRandom());
    setIsOpen(true);
  };

  const shuffle = () => {
    setShuffling(true);
    setCopied(false);
    setTimeout(() => {
      setCurrent(pickRandom());
      setShuffling(false);
    }, 180);
  };

  const close = () => setIsOpen(false);

  const copyDua = async () => {
    if (!current) return;
    try {
      await navigator.clipboard.writeText(current.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={openWithRandom}
        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-dashed border-[#d1ae37] bg-white px-5 py-4 text-base font-bold text-[#1f3d2b] shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-all hover:bg-[#d1ae37]/10 active:scale-[0.99]"
      >
        <SparkleIcon />
        <span>دعاء عشوائي</span>
      </button>

      <button
        type="button"
        aria-label="إغلاق"
        tabIndex={isOpen ? 0 : -1}
        onClick={close}
        className={`fixed inset-0 z-40 cursor-default bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        aria-label="دعاء عشوائي"
        className={`fixed inset-x-0 bottom-0 z-50 mx-auto flex max-w-md flex-col items-stretch px-4 pb-6 transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between bg-[linear-gradient(135deg,#1f3d2b,#2e6b4a)] px-5 py-4 text-white">
            <button
              type="button"
              onClick={close}
              aria-label="إغلاق"
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/15 active:bg-white/25"
            >
              <CloseIcon />
            </button>
            <h2 className="flex items-center gap-2 text-base font-extrabold">
              <SparkleIcon />
              <span>دعاء عشوائي</span>
            </h2>
          </div>

          <div className="px-5 pt-6 pb-5">
            <p className="text-center text-xs font-bold text-[#d1ae37]">
              {current?.category}
            </p>

            <div
              className={`mt-4 min-h-[110px] rounded-2xl border border-[#e5e1da] bg-[#f7f5f2] px-4 py-5 text-center transition-opacity duration-150 ${
                shuffling ? "opacity-30" : "opacity-100"
              }`}
            >
              <span
                aria-hidden="true"
                className="block text-3xl leading-none text-[#d1ae37]"
              >
                &ldquo;
              </span>
              <p className="mt-1 text-[16px] font-semibold leading-relaxed text-[#2b2b2b]">
                {current?.text}
              </p>
              <span
                aria-hidden="true"
                className="mt-1 block text-3xl leading-none text-[#d1ae37]"
              >
                &rdquo;
              </span>
            </div>

            <div className="mt-5 flex gap-2.5">
              <button
                type="button"
                onClick={copyDua}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all active:scale-[0.98] ${
                  copied
                    ? "bg-[linear-gradient(135deg,#1f3d2b,#2e6b4a)] text-white"
                    : "border border-[#d1ae37] bg-transparent text-[#1f3d2b] hover:bg-[#d1ae37]/10"
                }`}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
                <span>{copied ? "تم النسخ" : "نسخ"}</span>
              </button>

              <button
                type="button"
                onClick={shuffle}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#1f3d2b,#2e6b4a)] px-4 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(31,61,43,0.18)] transition-all hover:brightness-110 active:scale-[0.98]"
              >
                <ShuffleIcon />
                <span>دعاء آخر</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SparkleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2 2M16.5 16.5l2 2M5.5 18.5l2-2M16.5 7.5l2-2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ShuffleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d="M16 3h5v5" />
      <path d="M4 20 21 3" />
      <path d="M21 16v5h-5" />
      <path d="m15 15 6 6" />
      <path d="M4 4l5 5" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h9" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6l-12 12" />
    </svg>
  );
}
