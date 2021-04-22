import { useStore } from "./utils";

export function useSearchInput({ className }) {
  const { ref } = useStore();

  return (
    <input
      ref={ref}
      id="search"
      type="text"
      defaultValue={ref.current?.value}
      className={!className ? "flex-grow" : className}
    />
  );
}
