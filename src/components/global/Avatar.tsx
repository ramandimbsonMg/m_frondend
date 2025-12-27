"use client";

import Image from "next/image";
import clsx from "clsx";


type AvatarSize = "sm" | "md" | "lg" | "xl" | "2xl";
type AvatarStatus = "active" | "offline";

interface AvatarProps {
  name: string;
  image?: string | null;
  size?: AvatarSize;
  status?: string;
}



function mapStatus(status?: string): AvatarStatus | undefined {
  if (!status) return undefined;

  switch (status) {
    case "active":
    case "online":
      return "active";

    case "offline":
    case "disconnected":
      return "offline";

    default:
      return undefined;
  }
}

const sizeConfig: Record<
  AvatarSize,
  {
    wrapper: string;
    text: string;
    badge: string;
  }
> = {
  sm: {
    wrapper: "w-8 h-8",
    text: "text-sm",
    badge: "w-2.5 h-2.5",
  },
  md: {
    wrapper: "w-10 h-10",
    text: "text-base",
    badge: "w-3 h-3",
  },
  lg: {
    wrapper: "w-14 h-14",
    text: "text-xl",
    badge: "w-3.5 h-3.5",
  },
  xl: {
    wrapper: "w-16 h-16",
    text: "text-2xl",
    badge: "w-4 h-4",
  },
  "2xl": {
    wrapper: "w-20 h-20",
    text: "text-3xl",
    badge: "w-5 h-5",
  },
};


function getGrayColor(name: string) {
  const colors = ["bg-gray-100", "bg-gray-200", "bg-gray-300", "bg-gray-400"];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
}


function getInitial(name: string) {
  return name?.trim()?.charAt(0)?.toUpperCase() || "?";
}

export default function Avatar({
  name,
  image,
  size = "md",
  status,
}: AvatarProps) {
  const bgColor = getGrayColor(name);
  const initial = getInitial(name);
  const config = sizeConfig[size];

  const avatarStatus = mapStatus(status);

  return (
    <div className="relative inline-flex">
      <div
        className={clsx(
          "flex items-center justify-center rounded-full overflow-hidden font-semibold text-gray-700 select-none",
          bgColor,
          config.wrapper
        )}
      >
        {image ? (
          <Image src={image} alt={name} fill className="object-cover" />
        ) : (
          <span className={config.text}>{initial}</span>
        )}
      </div>

      {avatarStatus === "active" && (
        <span
          className={clsx(
            "absolute bottom-0 right-0 rounded-full bg-green-500 border-2 border-white",
            config.badge
          )}
        />
      )}
    </div>
  );
}
