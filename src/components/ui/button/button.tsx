"use client";

import { IconProps } from "@/types/iconProps";
import { LinkType, LinkTypes } from "@/types/link-type";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  size?: "very-small" | "small" | "medium" | "large" | "xlarge";
  variant?: "accent" | "secondary" | "outline" | "disable" | "ico" | "red" | "all-button";
  icon?: IconProps & { size?: number };
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
  baseUrl?: string;
  linkType?: LinkType;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  title?: string;

  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled = false,
  isLoading = false,
  className, 
  children,
  baseUrl,
  type = "button",
  linkType = "internal",
  onClick,
  title,
  bgColor,
  textColor,
  borderColor,
}: Props) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "accent":
        return "bg-primary hover:bg-primary-600 text-white rounded-full font-medium";
      case "red":
        return "bg-red-500 hover:bg-red-300 text-white rounded-full font-medium";
      case "secondary":
        return "bg-primary-100/50 hover:bg-primary-200 text-primary rounded-full";
      case "outline":
        return "bg-white border border-gray-300 text-gray-500 rounded-full font-semibold hover:bg-gray-100";
      case "disable":
        return "bg-gray-200 border text-gray-900 rounded-full cursor-not-allowed";
      case "all-button":
        return " rounded-full cursor-pointer";
      case "ico":
        if (iconTheme === "accent")
          return "bg-primary hover:bg-primary-400 text-white rounded-full";
        if (iconTheme === "secondary")
          return "bg-primary-100 hover:bg-primary-200 text-primary rounded-full";
        if (iconTheme === "gray")
          return "bg-gray-400 hover:bg-gray-200 text-white rounded-full";
        return "bg-primary text-white rounded-full";
      default:
        return "bg-primary text-white rounded-full";
    }
  };

  let variantStyles = getVariantStyles();

  // --- AJOUTER LES COULEURS PERSONNALISEES SI FOURNIES ---
  if (bgColor)
    variantStyles = clsx(
      variantStyles,
      bgColor.startsWith("bg-") ? bgColor : `bg-[${bgColor}]`
    );
  if (textColor)
    variantStyles = clsx(
      variantStyles,
      textColor.startsWith("text-") ? textColor : `text-[${textColor}]`
    );
  if (borderColor)
    variantStyles = clsx(
      variantStyles,
      borderColor.startsWith("border-")
        ? borderColor
        : `border-[${borderColor}]`
    );

  // --- TAILLE ---
  let sizeStyles = "";
  let icoSize = 0;
  switch (size) {
    case "very-small":
      sizeStyles = `text-xs ${
        variant === "ico" ? "w-[30px] h-[30px]" : "px-5 h-9"
      }`;
      icoSize = 14;
      break;
    case "small":
      sizeStyles = `text-xs ${
        variant === "ico" ? "w-[40px] h-[40px]" : "px-5 h-9"
      }`;
      icoSize = 18;
      break;
    case "medium":
      sizeStyles = `text-sm ${
        variant === "ico" ? "w-[40px] h-[40px]" : "px-6 py-2.5 h-[40x]"
      }`;
      icoSize = 20;
      break;
    case "large":
      sizeStyles = `text-lg ${
        variant === "ico" ? "w-[60px] h-[60px]" : "px-5 py-2 h-12"
      }`;
      icoSize = 24;
      break;
    case "xlarge":
      sizeStyles = `text-xl ${
        variant === "ico" ? "w-[70px] h-[70px]" : "px-6.5 py-3 h-14"
      }`;
      icoSize = 28;
      break;
  }

  const finalIconSize = icon?.size ? icon.size : icoSize;

  const buttonContent = (
    <>
      {isLoading ? (
        <span className="loader border-white"></span>
      ) : (
        <>
          {icon && iconPosition === "left" && icon.icon && (
            <icon.icon size={finalIconSize} />
          )}
          {children}
          {icon && iconPosition === "right" && icon.icon && (
            <icon.icon size={finalIconSize} />
          )}
        </>
      )}
    </>
  );

  const buttonElement = (
    <button
      type={type}
      className={clsx(
        variantStyles,
        sizeStyles,
        "flex items-center justify-center gap-2 cursor-pointer",
        className
      )}
      onClick={onClick}
      disabled={disabled || isLoading}
      title={title}
    >
      {buttonContent}
    </button>
  );

  if (baseUrl) {
    if (linkType === LinkTypes.EXTERNAL) {
      return (
        <a
          href={baseUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={title}
        >
          {buttonElement}
        </a>
      );
    }
    return (
      <Link href={baseUrl} title={title}>
        {buttonElement}
      </Link>
    );
  }

  return buttonElement;
};
