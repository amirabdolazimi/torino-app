import { PropsWithChildren } from "react";

interface IButton extends PropsWithChildren {
  children: React.ReactNode;
  radius?: "sm" | "md" | "lg" | "xl";
  className?: string;
  fontWeight?: "normal" | "medium" | "semibold";
  fontSize?: "sm" | "base" | "lg" | "xl" | "twoXl";
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({
  children,
  radius = "md",
  className = "",
  fontWeight = "normal",
  fontSize = "base",
  onClick,
}) => {
  const base = `p-2 font-${fontWeight} text-white cursor-pointer bg-primary transition duration-200`;

  const radiusClass = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-[10px]",
    xl: "rounded-2xl",
  }[radius];

  const fontSizeClass = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    twoXl: "text-2xl",
  }[fontSize];
  return (
    <button
      onClick={onClick}
      className={`${base} ${fontSizeClass} ${radiusClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
