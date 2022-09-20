import { Main, BgImg } from "./LayoutElements";

function Layout(props) {
  return (
    <div>
      <BgImg/>
      <Main>
        {props.children}
      </Main>
    </div>
  );
}
export default Layout;
