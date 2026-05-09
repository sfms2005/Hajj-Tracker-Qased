export const metadata = {
  title: "من نحن - حملة قاصد المشاعر",
  description:
    "قاصد المشاعر شركة وطنية متخصصة في خدمة حجاج الداخل مع خبرة تمتد لأكثر من 25 عامًا.",
};

export default function AboutPage() {
  return (
    <main className="relative isolate -mt-6 overflow-hidden px-5 pt-4 pb-10 sm:px-8">
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] z-0 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[min(78vw,22rem)] w-[min(78vw,22rem)] rotate-45 rounded-[2.75rem] bg-[rgba(28,104,67,0.07)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-lg text-right">
        <h1 className="inline-block border-b-[3px] border-[#d1ae37] pb-1 text-[2.25rem] font-extrabold leading-tight tracking-tight text-[#1f3d2b] sm:text-5xl">
          من نحن
        </h1>

        <h2 className="mt-10 text-2xl font-bold text-[#1f3d2b] sm:text-[1.625rem]">
          قاصد المشاعر
        </h2>

        <div className="mt-10 space-y-7 text-[17px] font-medium leading-[2.05] text-[#2b2b2b] sm:text-[1.125rem] sm:leading-[2.1]">
          <p>
            هي شركة وطنية متخصصة في تقديم خدمات حجاج الداخل، بخبرة تمتد لأكثر من
            خمسة وعشرين عامًا في خدمة ضيوف الرحمن، عملت خلالها على تطوير منظومة
            متكاملة تهدف إلى توفير تجربة حج آمنة، منظمة وميسّرة.
          </p>

          <p>
            نركّز في أعمالنا على التنظيم المحكم، والخدمة الراقية، والالتزام
            الكامل بقيم الحج ومقاصده السامية، مستندين إلى كوادر بشرية مؤهلة،
            وأنظمة تشغيل حديثة، وخبرة ميدانية عميقة في إدارة شؤون الحجاج.
          </p>

          <p>
            نؤمن أن خدمة ضيوف الرحمن{" "}
            <strong className="font-extrabold text-[#1f3d2b]">
              شرف ومسؤولية
            </strong>
            ، ونسعى لأن تكون كل رحلة حج مع قاصد المشاعر تجربة روحانية منظمة
            ومطمئنة.
          </p>
        </div>

        <section className="relative z-10 mt-12 rounded-2xl bg-white px-5 py-4 shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
          <h3 className="text-[11px] font-bold text-neutral-500">المطوّرة</h3>
          <p className="mt-0.5 text-sm font-extrabold text-[#1f3d2b]">
            ساره السبيعي
          </p>
        </section>
      </div>
    </main>
  );
}
