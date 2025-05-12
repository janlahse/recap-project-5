import Layout from "@/components/Layout/Layout.js";
import GlobalStyle from "../styles";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [favoriteSlugs, setFavoriteSlugs] = useLocalStorageState(
    "favoriteSlugs",
    {
      defaultValue: [],
    }
  );

  function toggleFavorite(slugToToggle) {
    setFavoriteSlugs((prevFavoriteSlugs) => {
      if (prevFavoriteSlugs.includes(slugToToggle)) {
        return prevFavoriteSlugs.filter((slug) => slug !== slugToToggle);
      } else {
        return [...prevFavoriteSlugs, slugToToggle];
      }
    });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={data}
        isLoading={isLoading}
        favoriteSlugs={favoriteSlugs}
        onToggleFavorite={toggleFavorite}
      />
    </>
  );
}
