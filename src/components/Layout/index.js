import { Main, BgImg } from "./LayoutElements";

function Layout(props) {
  return (
    <>
      <BgImg />
      <Main>{props.children}</Main>
    </>
  );
}
export default Layout;
