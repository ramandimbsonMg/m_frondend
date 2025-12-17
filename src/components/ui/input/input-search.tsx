"use client";

import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";

interface Props {
  type?: "search";
  className?: string;
  placeholder?: string;
  icon?: IconProps;
  required?: any;
  size?: "small" | "medium" | "large" | "auto";
  onIconClick?: () => void;
}

export const InputSearch = ({
  type = "search",
  className,
  placeholder = "Rechercher...",
  icon,
  size = "medium",
  onIconClick,
}: Props) => {
  const [showInputMobile, setShowInputMobile] = useState(false);
  const [value, setValue] = useState(""); // <-- NEW
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Fermer input si clic en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowInputMobile(false);
      }
    }

    if (showInputMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showInputMobile]);

  const sizeClass = {
    small: "w-32 py-1.5 text-xs",
    medium: "w-60 py-2.5 text-sm",
    large: "w-96 py-3 text-base",
    auto: "w-auto py-2.5 text-sm",
  };

  const paddingRightClass = icon ? "pr-10" : "pr-4";

  // ---- AUTO SIZE MOBILE ----
  // w-40 = base
  // w-48 = max
  const mobileWidth = value.length < 8 ? "w-40" : "w-[200px]"; // <-- seulement mobile

  return (
    <div ref={wrapperRef} className="relative h-full">
      {/* Input */}
      <input
        type={type}
        name="query"
        placeholder={placeholder}
        value={value} // <-- NEW
        onChange={(e) => setValue(e.target.value)} // <-- NEW
        className={clsx(
          className,
          "rounded-full border outline-none font-medium pl-4 transition-all duration-300",
          sizeClass[size],
          paddingRightClass,

          // Desktop visible en permanence
          "lg:block",

          // Mobile hidden par défaut
          !showInputMobile && "hidden lg:block",

          // Mobile visible avec auto width
          showInputMobile &&
            clsx(
              "block absolute top-0 left-0 z-50 bg-white lg:static",
              mobileWidth // <-- largeur dynamique mobile
            )
        )}
      />

      {/* Icône */}
      {icon && (
        <div className="absolute inset-y-0 right-0 flex items-center px-3 z-[60]">
          <button
            type="submit"
            onClick={() => {
              if (!showInputMobile) {
                setShowInputMobile(true);
              } else if (onIconClick) {
                onIconClick();
              }
            }}
            className="flex items-center focus:outline-none text-gray-500"
            aria-label="Search"
          >
            <icon.icon className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};
