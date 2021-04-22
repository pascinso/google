import { useStore, mockSearch } from "./utils";

export function useSearch({ searches }) {
  const { Header, PaginationButtons } = useStore();

  return (
    <main>
      <Header />

      <section className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
        <p className="text-gray-600 text-md mb-5 mt-3">
          About {searches?.searchInformation?.formattedTotalResults} results (
          {searches?.searchInformation?.formattedSearchTime} seconds)
        </p>

        {searches?.items?.map(({ link, formattedUrl, title, snippet }) => (
          <ul key={link} className="max-w-xl mb-8">
            <li className="group">
              <a href={link} className="text-sml">
                {formattedUrl}
              </a>
              <a href={link} className=" text-sml">
                <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                  {title}
                </h2>
              </a>
            </li>

            <p className="line-clamp-2">{snippet}</p>
          </ul>
        ))}
      </section>

      <PaginationButtons />
    </main>
  );
}
export default useSearch;

export async function getServerSideProps({ query }) {
  const { term, start = 0 } = query;
  const isDummyData = false;
  const searches = isDummyData
    ? mockSearch
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${term}&start=${start}`
      )
        .then((response) => response.json())
        .catch((error) => alert(error));

  return {
    props: { searches },
  };
}
