import { cn } from "./utils/cn";

const variants = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white",

  secondary:
    "bg-gray-200 hover:bg-gray-300 text-black",

  danger:
    "bg-red-600 hover:bg-red-700 text-white",
};

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg font-medium transition cursor-pointer",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}