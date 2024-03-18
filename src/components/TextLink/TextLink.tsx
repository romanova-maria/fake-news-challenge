import { WithTestId } from "../../types";
import { focusStyles, styled } from "../../styles";
import { textHoverStyles } from "../../styles/helpers";
import { Link, LinkProps } from "react-router-dom";

interface Props extends WithTestId, LinkProps {}

const TextLink = ({ children, testId, ...props }: Props) => {
  return (
    <Link data-testid={testId} {...props}>
      {children}
    </Link>
  );
};

export default styled(TextLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.theDarkestBlue};

  ${focusStyles};
  ${textHoverStyles};
  &:hover {
    text-decoration: underline;
  }
`;
