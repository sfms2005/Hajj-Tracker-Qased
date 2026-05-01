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
      <h2 className="text-center text-[15px] font-extrabold text-[#1f3d2b]">
        أدعية مقترحة لهذا اليوم
      </h2>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {duas.map((dua, i) => (
          <article
            key={i}
            className="flex min-h-[150px] min-w-[68%] snap-center flex-col items-center justify-center gap-2 rounded-2xl bg-white px-4 py-5 text-center shadow-[0_8px_20px_rgba(0,0,0,0.05)]"
          >
            <span
              aria-hidden="true"
              className="text-3xl leading-none text-[#d1ae37]"
            >
              &ldquo;
            </span>
            <p className="text-[14px] font-semibold leading-relaxed text-[#2b2b2b]">
              {dua}
            </p>
            <span
              aria-hidden="true"
              className="text-3xl leading-none text-[#d1ae37]"
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
                ? "w-4 bg-[#1f3d2b]"
                : "w-1.5 bg-[#e5e1da]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
