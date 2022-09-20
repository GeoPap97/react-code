import { LogoImg, NavLinks, TextH3} from "./HomeElements";

//this is the function for the home page
function Home() {
  return (
    <>
      <LogoImg /> {/*Here is the logo image*/}
      <NavLinks to="/instructions">
        <TextH3>
          Press for the Instructions {/*Navigate to Insructions */}
        </TextH3>
      </NavLinks>
    </>
  );
}

export default Home;
