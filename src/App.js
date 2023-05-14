import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Nav from "./Component/NavBar/NavBar";
import { MoviesDataContextProvider } from "./Context/MoviesContextAPI";
import { TVDataContextProvider } from "./Context/TvShowsContextApi";
import Movie from "./Pages/Movie/Movie";
import Detail from "./Component/Detail/Detail";
import TrendingContextProvider from "./Context/TrendingConteaxtApi";
import TvShows from "./Pages/TvShows/TvShows";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <MoviesDataContextProvider>
      <TVDataContextProvider>
        <TrendingContextProvider>
        <div className="App">
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movie />} />
              <Route path="/movies/:id" element={<Detail />} />
              <Route path="/tvShows" element={<TvShows/> } />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </div>
        </TrendingContextProvider>
      </TVDataContextProvider>
    </MoviesDataContextProvider>
  );
}

export default App;
