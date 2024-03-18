import { styled } from "../../styles";
import useNewsItem from "../../hooks/useNewsItem";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../../components";

const AdditionalInfoField = styled(
  ({ header, info }: { header: string; info: string }) => {
    return (
      <div>
        <b>{header}:</b>
        {` ${info}`}
      </div>
    );
  },
)`
  font-size: 0.8rem;

  &:first-child {
    margin-top: 1rem;
  }

  &:last-child {
    margin-bottom: 1rem;
  }
`;

const ArticleDetailedView = () => {
  const { newsId } = useParams();

  const { newsItem, isLoading, error } = useNewsItem({
    id: +(newsId as string),
  });

  const getDate = (date: Date): string => new Date(date).toDateString();

  return (
    <>
      <Link to="/">Go back to news list</Link>

      {error ? (
        <div>Something wrong with the news item</div>
      ) : isLoading ? (
        <Loading testId="detailed-article-loading" />
      ) : (
        newsItem && (
          <article id={`${newsItem.id}`}>
            <h2>{newsItem.headline}</h2>

            <AdditionalInfoField header="Author" info={newsItem.author} />
            <AdditionalInfoField header="Date" info={getDate(newsItem.date)} />
            <AdditionalInfoField header="Section" info={newsItem.section} />

            {/* Let's assume that the resource can be trusted => no xss */}
            <div dangerouslySetInnerHTML={{ __html: newsItem.body }} />
          </article>
        )
      )}
    </>
  );
};

export default ArticleDetailedView;
