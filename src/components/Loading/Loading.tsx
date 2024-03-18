import { styled } from "../../styles";
import loadingGif from "../../assets/loading.gif";
import { HTMLAttributes } from "react";
import { WithTestId } from "../../types";

const Loading = ({
  className,
  testId,
  ...props
}: HTMLAttributes<HTMLImageElement> & WithTestId) => {
  return (
    <img
      src={loadingGif}
      alt="Loading image"
      className={`${className} loading`}
      data-testid={testId}
      {...props}
    />
  );
};

export default styled(Loading)`
  max-width: 5rem;
  font-size: 2rem;
  place-self: center;
`;
