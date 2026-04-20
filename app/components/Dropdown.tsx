"use client";

import { TieredMenu } from "primereact/tieredmenu";
import { useRef, useState } from "react";
import type { MenuItem } from "primereact/menuitem";
import cn from "classnames";

export default function Dropdown({
  items,
  label,
  onClick,
}: {
  items: MenuItem[];
  label: string;
  onClick?: () => void;
}) {
  const menu = useRef<TieredMenu>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    menu.current?.toggle(e);
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center gap-1">
      <TieredMenu
        model={items}
        popup
        ref={menu}
        breakpoint="767px"
        className="text-right border border-gray-200 rounded-xl shadow-lg"
        onShow={() => setIsOpen(true)}
        onHide={() => setIsOpen(false)}
      />

      <button
        onClick={(e) => {
          handleToggle(e);
          if (onClick) onClick();
        }}
        className={cn(
          "flex items-center gap-2 text-[#191919] hover:text-indigo-600 font-semibold text-sm"
        )}
      >
        {label}
        <i
          className={`pi ${
            isOpen ? "pi-chevron-up" : "pi-chevron-down"
          } text-xs transition-transform duration-300`}
        />
      </button>
    </div>
  );
}
