import Link from "next/link";
import Button from "../components/Button";
import { mashairPlaces } from "@/data/mashair";

export const metadata = {
  title: "مواقع المشاعر - حملة قاصد",
  description: "روابط مواقع منى وعرفة ومزدلفة على خرائط جوجل",
};

export default function MashairPage() {
  return (
    <main className="-mt-6 px-5 pb-10 pt-0">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-bold text-[#1f3d2b] transition-colors hover:bg-[#1f3d2b]/5"
      >
        <ArrowRightIcon />
        <span>الصفحة الرئيسية</span>
      </Link>

      <header className="mt-2 text-center">
        <h1 className="inline-block border-b-2 border-[#d1ae37] pb-1 text-3xl font-extrabold leading-tight text-[#1f3d2b] sm:text-[2rem]">
          مواقع المشاعر
        </h1>
        <p className="mt-2 text-sm font-semibold text-neutral-600">
          افتح كل موقع مباشرة في خرائط Google
        </p>
      </header>

      <ul className="mt-8 flex flex-col gap-5">
        {mashairPlaces.map((place) => (
          <li key={place.id}>
            <article className="flex flex-col gap-4 rounded-2xl bg-white px-5 py-5 shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
              <h2 className="text-center text-xl font-extrabold text-[#1f3d2b]">
                {place.nameAr}
              </h2>
              <Button href={place.mapsUrl} variant="primary" external>
                افتح الخريطة
              </Button>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M13 6l6 6-6 6" />
      <path d="M19 12H5" />
    </svg>
  );
}
