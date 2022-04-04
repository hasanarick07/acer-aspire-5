import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Reviews from "./components/Reviews/Reviews";
import Dashboaed from "./components/Dashboard/Dashboard";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashBoard" element={<Dashboaed></Dashboaed>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
