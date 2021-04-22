import { useAvatar, useLogo } from "tools";
import {
  ViewGridIcon,
  MicrophoneIcon,
  GlobeIcon,
} from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import { useSearchInput, onSearch } from "tools/search-input/utils";

export function useStore() {
  return {
    SearchInput: useSearchInput,
    Avatar: useAvatar,
    ViewGridIcon,
    SearchIcon,
    GlobeIcon,
    MicrophoneIcon,
    Logo: useLogo,
    onSearch,
  };
}
