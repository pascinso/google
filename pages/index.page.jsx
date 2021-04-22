import { useStore } from "./utils";

export function useHome() {
  const {
    Avatar,
    SearchInput,
    ViewGridIcon,
    Logo,
    SearchIcon,
    MicrophoneIcon,
    GlobeIcon,
    onSearch,
  } = useStore();

  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <title>Google</title>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <aside className="flex space-x-4 items-center">
          <button className="link" type="button">
            About
          </button>
          <button className="link" type="button">
            Store
          </button>
        </aside>
        <aside className="flex space-x-4 items-center">
          <button className="link" type="button">
            Gmail
          </button>
          <button className="link" type="button">
            Image
          </button>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar />
        </aside>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Logo width="18.75rem" />

        <label
          htmlFor="search"
          className="flex mt-8 w-full hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <SearchInput />
          <MicrophoneIcon className="h-5" />
        </label>

        <aside className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="button" type="submit" onClick={onSearch}>
            Google Search
          </button>
          <button className="button" type="button">
            I&apos;m feeling lucky
          </button>
        </aside>
      </form>

      <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
        <p className="px-8 py-3">United Kingdom</p>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 px-8 py-3 grid-flow-row-dense">
          <p className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
            <GlobeIcon className="h-5 mr-1 text-green-700" /> Carbon neutral
            since 2007
          </p>

          <aside className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
            <p>Advertising</p>
            <p>Business</p>
            <p>How Search Works</p>
          </aside>
          <aside className="flex justify-center space-x-8 md:ml-auto">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Settings</p>
          </aside>
        </section>
      </footer>
    </main>
  );
}
export default useHome;
