"use client";

import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import cn from "classnames";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  color?: "primary" | "secondary" | "outline" | "consultation" | "projects";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  icon?: string;
  to?: string;
  type?: "submit" | "button";
}

const ButtonComponent: React.FC<ButtonProps> = ({
  label,
  onClick,
  color = "primary",
  size = "medium",
  disabled = false,
  icon,
  to,
  type = "button",
}) => {
  const router = useRouter();

  const buttonClasses = {
    primary: "rounded-xl py-2.5 px-6 text-center bg-indigo-600 text-white",
    secondary:
      "py-3 lg:py-3.5 px-8 lg:px-14 text-black font-bold text-sm lg:text-[14px] bg-white rounded-[10px] lg:rounded-[12px]",
    outline:
      "rounded-xl py-2.5 px-6 text-center text-[#070064] font-normal bg-[#eff1ff]",
    consultation:
      "w-full sm:w-auto border-none rounded-2xl px-8 lg:px-18 2xl:px-[76px] py-3 sm:py-[18px] bg-[#5B4FFF] text-[#F1F4FE] font-bold text-sm sm:text-base hover:bg-[#4a3fe0] transition-colors duration-300",
    projects:
      "w-full sm:w-auto rounded-2xl px-6 sm:px-9 py-3 sm:py-[18px] font-bold text-sm sm:text-base text-[#5B4FFF] border border-solid border-[#5B4FFF] hover:bg-[#5B4FFF] hover:text-white transition-colors duration-300",
  };

  const sizeClasses = {
    small: "text-xs py-1.5 px-4",
    medium: "text-sm py-2.5 px-6",
    large: "text-lg py-3 px-8",
  };

  const handleClick = () => {
    if (to) {
      if (to.startsWith("tel:")) {
        window.location.href = to;
      } else {
        router.push(to);
      }
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      label={label}
      icon={icon}
      className={cn(
        "cursor-pointer",
        buttonClasses[color],
        size !== "medium" && sizeClasses[size]
      )}
      onClick={handleClick}
      disabled={disabled}
      unstyled
      type={type}
    />
  );
};

export default ButtonComponent;
