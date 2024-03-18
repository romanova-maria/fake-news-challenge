import { styled } from "../../../styles";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  headline: string;
  abstract: string;
}
const NewsCard = ({ id, headline, abstract, ...props }: Props) => {
  return (
    <Link id={`${id}`} {...props} to={`news/${id}`}>
      <article>
        <h2>{headline}</h2>
        <p>{abstract}</p>
      </article>
    </Link>
  );
};

export default styled(NewsCard)`
  color: inherit;
  text-decoration: none;

  &:hover {
    cursor: pointer;

    h2 {
      text-decoration: underline;
    }
  }
`;
