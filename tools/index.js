import dynamic from "next/dynamic";

export const useAvatar = dynamic(() =>
  import("./avatar").then((mod) => mod.useAvatar)
);
export const useLogo = dynamic(() =>
  import("./logo").then((mod) => mod.useLogo)
);

export function unmount(set, value) {
  return () => set(value);
}
