import { LogoImg, NavLinks, TextH3} from "./HomeElements";

function Home() {
  return (
    <>
      <LogoImg />
      <NavLinks to="/instructions">
        <TextH3>
          Press for the Instructions {/*Navigate to Insructions */}
        </TextH3>
      </NavLinks>
    </>
  );
}

export default Home;
