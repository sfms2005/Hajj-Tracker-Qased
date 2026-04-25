import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

interface BaseProps {
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

interface LinkProps extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface ButtonProps extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
}

type Props = LinkProps | ButtonProps;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[#1F5D3B] text-white hover:bg-[#174a2f] shadow-[0_8px_22px_rgba(31,93,59,0.25)]",
  secondary: "bg-[#EDEAE2] text-[#1F5D3B] hover:bg-[#E2DFD4]",
};

export default function Button(props: Props) {
  const { variant = "primary", icon, className = "", children } = props;

  const base =
    "flex w-full items-center justify-center gap-3 rounded-2xl px-5 py-4 text-base font-bold transition-all";

  const inner = (
    <>
      <span>{children}</span>
      {icon && <span className="flex items-center justify-center">{icon}</span>}
    </>
  );

  const finalClass = `${base} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={finalClass}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={finalClass}
    >
      {inner}
    </button>
  );
}
