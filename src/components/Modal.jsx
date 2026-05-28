export function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0
        bg-black/50
        flex items-center justify-center
        p-4
      "
      onClick={onClose}
    >
      <div
        className="
          bg-white
          rounded-xl
          shadow-xl
          w-full
          max-w-md
          p-6
        "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
