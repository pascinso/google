import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export function useStore() {
  const {
    query: { start = 0, term },
  } = useRouter();

  return {
    term,
    start,
    Link,
    ChevronLeftIcon,
    ChevronRightIcon,
  };
}
