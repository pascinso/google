import Router from "next/router";
import { createRef } from "react";
import dynamic from "next/dynamic";

const ref = createRef();

export const useSearchInput = dynamic(() =>
  import("..").then((mod) => mod.useSearchInput)
);

export function onSearch(event) {
  event.preventDefault();
  const {
    current: { value },
  } = ref;
  if (!value) {
    return;
  }
  Router.push(`/search?term=${value}`);
}

export function useStore() {
  return { ref };
}
export function useProps() {
  return {
    ref,
  };
}
