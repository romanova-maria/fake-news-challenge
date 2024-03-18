import { Outlet } from "../router";

const FakeNewsPage = () => {
  return (
    <>
      <h1>Fake news</h1>
      <Outlet />
    </>
  );
};

export default FakeNewsPage;
