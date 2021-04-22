import { useStore } from "./utils";

export function usePaginationButtons() {
  const { term, start, Link, ChevronLeftIcon, ChevronRightIcon } = useStore();

  return (
    <main className="flex max-w-lg justify-between text-blue-700 mb-10 flex-grow">
      {start >= 10 && (
        <Link href={`/search?term=${term}&start=${start - 10}`}>
          <button
            type="button"
            className="flex flex-grow flex-col items-center hover:underline"
          >
            <ChevronLeftIcon className="h-5" /> Previous
          </button>
        </Link>
      )}
      <Link href={`/search?term=${term}&start=${start + 10}`}>
        <button
          type="button"
          className="flex flex-grow flex-col items-center hover:underline"
        >
          <ChevronRightIcon className="h-5" /> Next
        </button>
      </Link>
    </main>
  );
}
