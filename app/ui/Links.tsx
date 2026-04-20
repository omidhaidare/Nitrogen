import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import arrow from "@/public/icons/services-section/arrowl-right.svg";

interface LinkButtonProps {
  href: string;
  label: string;
}

const LinkButton: FC<LinkButtonProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-center gap-2 text-[#5B4FFF] font-bold"
    >
      {label}
      <Image src={arrow} alt="arrow-icon" />
    </Link>
  );
};

export default LinkButton;
