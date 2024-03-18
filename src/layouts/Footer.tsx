import { styled } from "../styles";
import { TextLink } from "../components/TextLink";
import { HTMLAttributes, memo } from "react";

const Footer = memo((props: HTMLAttributes<HTMLElement>) => {
  return (
    <footer {...props}>
      Github link to
      <TextLink
        to="https://github.com/romanova-maria/fake-news-challenge"
        testId="fake-news-challenge-github"
      >
        Fake News
      </TextLink>
    </footer>
  );
});

export default styled(Footer)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  max-height: ${(props) => props.theme.components.footer.height};
  background: ${(props) => props.theme.components.footer.bgColor};
  gap: 0.5rem;
`;
