import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import { wait } from "./helpers";

export interface NewsItem {
  id: number;
  headline: string;
  abstract: string;
  body: string;
  author: string;
  section: string;
  date: Date;
}

const useNewsItem = ({ id }: { id: number }) => {
  const [newsItem, setNewsItem] = useState<NewsItem>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    setIsLoading(true);

    const controller = new AbortController();
    (async function fetchNewsItem() {
      try {
        await wait(0.1);
        const { data } = await axios.get<NewsItem>("fakeNewsItem.json", {
          signal: controller.signal,
        });

        setNewsItem(data);
      } catch (error) {
        if (error instanceof CanceledError) return;

        if (error instanceof Error) {
          setError(error.message);
        }
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => controller.abort();
  }, [id]);

  return { newsItem, isLoading, error };
};

export default useNewsItem;
