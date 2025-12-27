"use client";

import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  border?: boolean;
  rounded?: boolean;
  px?: number;
  py?: number;
  onClick?: () => void;
}

export default function Card({
  children,
  className,
  hoverable = true,
  border = true,
  rounded = true,
  px = 4,
  py = 2,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "bg-white transition relative",
        border && "border border-gray-200",
        rounded && "rounded-xl",
        hoverable && "hover:scale-[1.01] cursor-pointer",
        className
      )}
      style={{
        paddingLeft: `${px * 0.25}rem`,
        paddingRight: `${px * 0.25}rem`,
        paddingTop: `${py * 0.25}rem`,
        paddingBottom: `${py * 0.25}rem`,
      }}
    >
      {children}
    </div>
  );
}
