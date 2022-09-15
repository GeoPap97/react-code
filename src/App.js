import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Game from "./components/pages/game";
import Home from "./components/pages/home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Layout>
  );
}

export default App;
