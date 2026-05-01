interface Props {
  message: string;
}

export default function MotivationCard({ message }: Props) {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#d1ae37]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10z" />
        </svg>
      </span>
      <p className="flex-1 text-center text-[14px] font-bold leading-snug text-[#2b2b2b]">
        {message}
      </p>
    </div>
  );
}
