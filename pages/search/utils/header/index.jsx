import { useStore } from "./utils";

export function useHeader() {
  const {
    term,
    Head,
    Logo,
    SearchInput,
    Option,
    XIcon,
    MicrophoneIcon,
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon,
    Avatar,
    onHome,
    onCancel,
    onSearch,
  } = useStore();

  return (
    <main>
      <Head>
        <title>{term} - Google Search</title>
      </Head>

      <header className="sticky top-0 bg-white flex w-full p-6 items-center">
        <Logo width="7.5rem" className="cursor-pointer" onClick={onHome} />

        <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 overflow-hidden">
          <SearchInput className="flex-grow w-full z-10" />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
            onClick={onCancel}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />

          <button
            className="absolute opacity-0"
            type="submit"
            onClick={onSearch}
          >
            Search
          </button>
        </form>

        <Avatar className="ml-auto" />
      </header>

      <section className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
        <aside className="flex space-x-6">
          <Option Icon={SearchIcon} title="All" isSelected />
          <Option Icon={PhotographIcon} title="Images" />
          <Option Icon={PlayIcon} title="Videos" />
          <Option Icon={NewspaperIcon} title="News" />
          <Option Icon={MapIcon} title="Maps" />
          <Option Icon={DotsVerticalIcon} title="More" />
        </aside>
        <aside className="flex space-x-4">
          <button className="flex align-top" type="button">
            Settings
          </button>
          <button className="flex align-top" type="button">
            Tools
          </button>
        </aside>
      </section>
    </main>
  );
}
