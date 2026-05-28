import * as LucideIcons from "lucide-react";

export function Icon({ name, size = 18, className = "" }) {
  const LucideIcon = LucideIcons[name];

  if (!LucideIcon) return null;

  return <LucideIcon size={size} className={className} />;
}