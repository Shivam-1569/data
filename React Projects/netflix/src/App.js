import "./App.scss"
import Header from "./components/Header/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Tvshows from "./components/Home/Home"
import Movies from "./components/Home/Home"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshow" element={<Tvshows/>} />
        <Route path="/movies" element={<Movies/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
