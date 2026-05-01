"use client";

import { useState } from "react";

interface Props {
  text: string;
}

export default function DuaCard({ text }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch {
        // ignore
      }
      document.body.removeChild(textarea);
    }
  };

  return (
    <article className="flex items-start justify-between gap-3 rounded-2xl bg-white px-4 py-4 shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
      <p className="flex-1 text-[15px] font-semibold leading-relaxed text-[#2b2b2b]">
        {text}
      </p>

      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "تم النسخ" : "نسخ الدعاء"}
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all ${
          copied
            ? "border-transparent bg-[linear-gradient(135deg,#1f3d2b,#2e6b4a)] text-white"
            : "border-[#d1ae37] bg-transparent text-[#1f3d2b] hover:bg-[#d1ae37]/10 active:scale-95"
        }`}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </article>
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
