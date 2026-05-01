"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { href: "/", label: "الصفحة الرئيسية" },
  { href: "/about", label: "من نحن" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

  const close = () => setIsOpen(false);

  return (
    <>
      <nav className="flex items-center justify-between px-5 pt-0 pb-0">
        <Link
          href="/"
          aria-label="حملة قاصد - الصفحة الرئيسية"
          className="flex items-center transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Image
            src="/logo.svg"
            alt="حملة قاصد"
            width={1536}
            height={1024}
            priority
            className="h-20 w-auto"
          />
        </Link>

        <button
          type="button"
          aria-label="فتح القائمة"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md transition-colors hover:bg-[#1f3d2b]/5 active:bg-[#1f3d2b]/10"
        >
          <span className="block h-[2.5px] w-6 rounded-full bg-[#1f3d2b]" />
          <span className="block h-[2.5px] w-6 rounded-full bg-[#1f3d2b]" />
          <span className="block h-[2.5px] w-6 rounded-full bg-[#1f3d2b]" />
        </button>
      </nav>

      <button
        type="button"
        aria-label="إغلاق القائمة"
        tabIndex={isOpen ? 0 : -1}
        onClick={close}
        className={`fixed inset-0 z-40 cursor-default bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        dir="rtl"
        aria-hidden={!isOpen}
        aria-label="القائمة الجانبية"
        className={`fixed top-0 left-0 z-50 h-full w-[72%] max-w-xs bg-[linear-gradient(135deg,#1f3d2b,#2e6b4a)] text-white shadow-[0_0_40px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <button
            type="button"
            aria-label="إغلاق القائمة"
            onClick={close}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md transition-colors hover:bg-white/10"
          >
            <span className="block h-[2.5px] w-6 rounded-full bg-white" />
            <span className="block h-[2.5px] w-6 rounded-full bg-white" />
            <span className="block h-[2.5px] w-6 rounded-full bg-white" />
          </button>
          <h2 className="text-2xl font-extrabold tracking-tight">القائمة</h2>
        </div>

        <nav className="mt-4 flex flex-col gap-1 px-3">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="block rounded-lg px-4 py-3 text-right text-xl font-bold text-white/95 transition-colors hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
