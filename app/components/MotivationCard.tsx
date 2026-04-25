interface Props {
  message: string;
}

export default function MotivationCard({ message }: Props) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-[#E5E8DC] px-5 py-4 shadow-[0_4px_14px_rgba(0,0,0,0.03)]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center text-[#1F5D3B]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-10 w-10"
          aria-hidden="true"
        >
          <path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10z" />
        </svg>
      </span>
      <p className="flex-1 text-center text-[17px] font-bold leading-snug text-neutral-800">
        {message}
      </p>
    </div>
  );
}
