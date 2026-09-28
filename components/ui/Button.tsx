import { ReactNode } from "react";
import { Icon } from "./Icon";

export function Button({ children, variant = "primary", href = "#get-involved", className = "" }: { children: ReactNode; variant?: "primary" | "secondary" | "light" | "text"; href?: string; className?: string }) {
  return <a className={`button button--${variant} ${className}`} href={href}>{children}{variant === "text" && <Icon name="arrow" size={18} />}</a>;
}
