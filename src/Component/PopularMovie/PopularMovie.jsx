import React, { useContext } from "react";
import "./PopularMovie.css";
import { moviesDataContext } from "../../Context/MoviesContextAPI";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import RatedCyrcle from "../RatedCyrcle/RatedCyrcle";


const PopularMovie = () => {
    const { popularMovies, page, setpage, getMovies } = useContext(moviesDataContext);
  console.log(popularMovies);

  const handlePrevPage = () => {
    if (page > 1) {
      setpage(page - 1);
      getMovies(page - 1);
    } else {
      return;
    }
  };
  const handleNextPage = () => {
    if (popularMovies.length < 20) {
      return;
    } else {
      setpage(page + 1);
      getMovies(page + 1);
    }
  };
  return (
    <div className="topRatedMovies">
      <div className="container">
        <div className="arrow">
          <button>
            <BsArrowLeftShort className="arr-short" onClick={handlePrevPage} />
          </button>
          <button>
            <BsArrowRightShort className="arr-short" onClick={handleNextPage} />
          </button>
        </div>
        <div className="row">
          {popularMovies.map((movie) => {
            return (
              <div className="col-md-2 col-sm-4 col-6 card-list" key={movie.id}>
                <RatedCyrcle  rating={movie.vote_average}  />
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="poster movie"
                />
                <p>{movie.title}</p>
              </div>
            );
          })}
        </div>
        <h3 className="page-head">Page : {page}</h3>
      </div>
    </div>
  )
}

export default PopularMovie
