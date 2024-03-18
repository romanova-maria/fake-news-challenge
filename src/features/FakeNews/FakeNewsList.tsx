import { BREAKPOINTS, styled } from "../../styles";
import { HTMLAttributes, PropsWithChildren, useState } from "react";
import { Button, Loading } from "../../components";
import useNews from "../../hooks/useNews";
import { NewsItem } from "../../hooks/useNewsItem";
import { NewsCard } from "./NewsCard";

const EmptyList = () => <div>There are no news</div>;

const NewsList = styled(
  ({
    children,
    ...props
  }: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => (
    <div {...props}>{children}</div>
  ),
)`
  display: grid;
  gap: 1rem;

  @media (${BREAKPOINTS.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    ${Loading} {
      grid-column-start: 2;
    }
  }
`;

const FakeNewsList = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(0);

  const { freshNews, eof, isLoading, error } = useNews({ page });
  const isListEmpty = news.length === 0 && freshNews.length === 0 && !isLoading;
  const hasMoreNews = !eof && freshNews.length > 0;

  const loadMore = () => {
    setPage((page) => page + 1);
    setNews([...news, ...freshNews]);
  };

  if (isListEmpty) {
    return <EmptyList />;
  }

  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          <NewsList>
            {news.map(({ id, headline, abstract }, index) => (
              <NewsCard
                key={index}
                id={id}
                headline={headline}
                abstract={abstract}
              />
            ))}
            {isLoading ? (
              <Loading testId="loading-fresh-news" />
            ) : (
              freshNews.map(({ id, headline, abstract }, index) => (
                <NewsCard
                  key={index}
                  id={id}
                  headline={headline}
                  abstract={abstract}
                />
              ))
            )}
          </NewsList>
          {hasMoreNews && (
            <Button testId="load-more" onClick={loadMore} disabled={isLoading}>
              Load more
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default FakeNewsList;
