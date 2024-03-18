import { HTMLAttributes, PropsWithChildren } from "react";
import { BREAKPOINTS, styled } from "../styles";

const Main = ({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLElement>) => {
  return <main {...props}>{children}</main>;
};

export default styled(Main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (${BREAKPOINTS.desktop}) {
    gap: 2rem;
  }
`;
