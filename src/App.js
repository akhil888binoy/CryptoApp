import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CoinDetails from "./components/CoinDetails";
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/exchanges" element={<Exchanges></Exchanges>}></Route>
        <Route
          path="/coindetails"
          element={<CoinDetails></CoinDetails>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
