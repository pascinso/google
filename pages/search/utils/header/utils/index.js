import Router, { useRouter } from "next/router";
import Head from "next/head";
import { useLogo, useAvatar } from "tools";
import {
  useSearchInput,
  useProps as searchInputProps,
  onSearch,
} from "tools/search-input/utils";
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { useOption } from "./option";

function onHome() {
  Router.push("/");
}
function onCancel() {
  const { ref } = searchInputProps();
  ref.current.value = "";
}

export function useStore() {
  const {
    query: { term },
  } = useRouter();

  return {
    term,
    Head,
    Logo: useLogo,
    SearchInput: useSearchInput,
    Avatar: useAvatar,
    Option: useOption,
    MicrophoneIcon,
    XIcon,
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon,
    onHome,
    onCancel,
    onSearch,
  };
}
