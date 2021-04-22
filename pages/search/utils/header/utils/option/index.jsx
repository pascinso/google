export function useOption({ Icon, title, isSelected }) {
  return (
    <button
      type="button"
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 ${
        isSelected && "text-blue-500 border-blue-500"
      } `}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </button>
  );
}