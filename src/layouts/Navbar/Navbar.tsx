import { BREAKPOINTS, styled } from "../../styles";
import { HTMLAttributes } from "react";
import { GroupedLinks, Link } from "./NavItems";

const Navbar = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <nav {...props}>
      <Link to="/">Fake News</Link>
      <GroupedLinks
        header="Sections"
        links={[
          { title: "Sport", to: "/sports" },
          { title: "Politic", to: "/politic" },
          { title: "Art", to: "/art" },
        ]}
      />
      <Link to="/gossips">Gossips</Link>
    </nav>
  );
};

export default styled(Navbar)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.components.header.bgColor};
  color: ${(props) => props.theme.palette.primary};
  font-weight: bold;
  font-size: 1.5rem;

  @media (${BREAKPOINTS.desktop}) {
    --desctop-gap: 2rem;

    display: flex;
    flex-direction: row;
    gap: var(--desctop-gap);
  }
`;
