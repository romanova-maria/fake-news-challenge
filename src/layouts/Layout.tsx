import { HTMLAttributes } from "react";
import { BREAKPOINTS, styled } from "../styles";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
import { Outlet } from "../router";
import { useNavigation } from "react-router-dom";
import { Loading } from "../components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header header header"
    ". main ."
    "footer footer footer";
  grid-template-rows: ${(props) =>
    `${props.theme.components.header.height} auto ${props.theme.components.footer.height}`};
  transition: 300ms;
  grid-template-columns: 10% auto 10%;

  ${Navbar} {
    grid-area: header;
  }

  ${Main} {
    grid-area: main;
  }

  ${Footer} {
    grid-area: footer;
  }

  @media (${BREAKPOINTS.desktop}) {
    transition: 300ms;
    grid-template-columns: 20% auto 20%;
  }
`;

const Layout = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const { state } = useNavigation();

  return (
    <Container {...props}>
      <Navbar />
      <Main>
        {state === "loading" ? <Loading testId="content" /> : <Outlet />}
      </Main>
      <Footer />
    </Container>
  );
};

export default Layout;
