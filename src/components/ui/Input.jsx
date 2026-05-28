export function Input(props) {
  return (
    <input
      className="
        w-full
        border
        border-gray-300
        rounded-lg
        px-3
        py-2
        outline-none
        focus:ring-2
        focus:ring-blue-500
      "
      {...props}
    />
  );
}