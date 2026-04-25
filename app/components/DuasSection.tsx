"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  duas: string[];
}

export default function DuasSection({ duas }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    const handleScroll = () => {
      const itemWidth = node.scrollWidth / duas.length;
      const index = Math.round(node.scrollLeft / itemWidth);
      setActiveIndex(Math.abs(index));
    };

    node.addEventListener("scroll", handleScroll, { passive: true });
    return () => node.removeEventListener("scroll", handleScroll);
  }, [duas.length]);

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-center text-[15px] font-extrabold text-neutral-800">
        أدعية مقترحة لهذا اليوم
      </h2>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {duas.map((dua, i) => (
          <article
            key={i}
            className="flex min-h-[150px] min-w-[68%] snap-center flex-col items-center justify-center gap-2 rounded-2xl border border-[#E5E0D7] bg-white px-4 py-5 text-center shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            <span
              aria-hidden="true"
              className="text-3xl leading-none text-[#1F5D3B]"
            >
              &ldquo;
            </span>
            <p className="text-[14px] font-semibold leading-relaxed text-neutral-800">
              {dua}
            </p>
            <span
              aria-hidden="true"
              className="text-3xl leading-none text-[#1F5D3B]"
            >
              &rdquo;
            </span>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-center gap-1.5">
        {duas.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              i === activeIndex
                ? "w-4 bg-[#1F5D3B]"
                : "w-1.5 bg-[#C9C2B5]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
