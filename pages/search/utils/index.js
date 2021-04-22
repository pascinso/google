import { useHeader } from "./header";
import { usePaginationButtons } from "./pagination-buttons";

export function useStore() {
  return {
    Header: useHeader,
    PaginationButtons: usePaginationButtons,
  };
}
export { default as mockSearch } from "./searches.json";
