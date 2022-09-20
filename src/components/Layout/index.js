import { Main, BgImg } from "./LayoutElements";

//This is the function for the layoute
function Layout(props) {
  return (
    <div>
      <BgImg/> {/*Here is the background image*/}
      <Main>
        {props.children} {/*Here is all the content*/}
      </Main>
    </div>
  );
}
export default Layout;
