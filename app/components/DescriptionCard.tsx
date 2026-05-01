interface Props {
  description: string;
}

export default function DescriptionCard({ description }: Props) {
  return (
    <div className="rounded-2xl bg-white px-5 py-4 shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
      <h2 className="mb-2 inline-block border-b-2 border-[#d1ae37] pb-1 text-right text-lg font-extrabold text-[#1f3d2b]">
        نبذة عن هذه المرحلة
      </h2>
      <p className="text-right text-[14px] leading-relaxed text-[#2b2b2b]">
        {description}
      </p>
    </div>
  );
}
