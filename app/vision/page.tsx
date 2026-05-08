export const metadata = {
  title: "رؤيتنا - حملة قاصد المشاعر",
  description:
    "رؤية قاصد المشاعر في خدمة حاج بيت الله الحرام بأعلى معايير الجودة والاحترافية.",
};

export default function VisionPage() {
  return (
    <main className="relative isolate -mt-6 overflow-hidden px-5 pt-4 pb-10 sm:px-8">
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] z-0 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[min(78vw,22rem)] w-[min(78vw,22rem)] rotate-45 rounded-[2.75rem] bg-[#e5e1da]/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-lg text-right">
        <h1 className="inline-block border-b-[3px] border-[#d1ae37] pb-1 text-[2.25rem] font-extrabold leading-tight tracking-tight text-[#1f3d2b] sm:text-5xl">
          رؤيتنا
        </h1>

        <p className="mt-10 text-[17px] font-medium leading-[2.05] text-[#2b2b2b] sm:text-[1.125rem] sm:leading-[2.1]">
          أن نكون من الشركات الرائدة والمتميزة في خدمة حاج بيت الله الحرام، عبر
          تقديم تجربة حاج آمنة وميسرة بروح إيمانية عالية، وفق أعلى معايير
          الجودة والاحترافية، وبما يحقق تطلعات ضيوف الرحمن ورؤية المملكة 2030.
        </p>
      </div>
    </main>
  );
}
