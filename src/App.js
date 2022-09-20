import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Game from "./components/pages/game";
import Home from "./components/pages/home";
import Instructions from "./components/pages/instructions";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Layout>
  );
}

export default App;
