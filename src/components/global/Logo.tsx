    import Link from "next/link";
    import clsx from "clsx";

    type LogoSize = "sm" | "md" | "lg";

    interface LogoProps {
      size?: LogoSize;
      href?: string;
      className?: string;
    }

    export default function Logo({
      size = "md",
      href = "/",
      className,
    }: LogoProps) {
      const sizeClasses = {
        sm: "h-8 w-32", // petit
        md: "h-10 w-40", // moyen (par défaut)
        lg: "h-14 w-56", // grand
      };

      return (
        <Link
          href={href}
          className={clsx("flex items-center", sizeClasses[size], className)}
        >
          <img
            src="/logo-mis.png"
            alt="logo-missera.com"
            className="w-full h-full object-contain"
          />
        </Link>
      );
    }
