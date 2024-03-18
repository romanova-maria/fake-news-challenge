import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import { NewsItem } from "./useNewsItem";
import { wait } from "./helpers";

const ITEMS_PER_PAGE = 9;

export interface News {
  news: NewsItem[];
  count: number;
  next: number;
  eof: boolean;
}

interface Props {
  page: number;
  itemsPerPage?: number;
}

const mockItems = ({ data, page }: { data: News; page: number }): News => {
  const updatedData = { ...data };
  updatedData.news = updatedData.news.map((item) => ({
    ...item,
    id: item.id * 10 + page,
  }));

  if (page === 2) {
    updatedData.eof = true;
  }
  return updatedData;
};

const useNews = ({ page, itemsPerPage = ITEMS_PER_PAGE }: Props) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [eof, setEof] = useState(false);

  useEffect(() => {
    setError(null);
    setIsLoading(true);

    const controller = new AbortController();
    (async function fetchNews() {
      try {
        await wait(1 + page * 0.1);
        const resp = await axios.get<News>("fakeNews.json", {
          signal: controller.signal,
          params: {
            itemsPerPage,
            page,
          },
        });

        // mock helper
        const data = mockItems({ data: resp.data, page });

        setNews(data.news);
        setEof(data.eof);
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
  }, [page, itemsPerPage]);

  return { freshNews: news, eof, isLoading, error };
};

export default useNews;
