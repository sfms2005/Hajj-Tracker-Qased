interface Props {
  description: string;
}

export default function DescriptionCard({ description }: Props) {
  return (
    <div className="rounded-2xl bg-[#EEEAE0] px-5 py-4 shadow-[0_4px_14px_rgba(0,0,0,0.03)]">
      <h2 className="mb-2 text-right text-lg font-extrabold text-[#1F5D3B]">
        نبذة عن هذه المرحلة
      </h2>
      <p className="text-right text-[14px] leading-relaxed text-neutral-700">
        {description}
      </p>
    </div>
  );
}
