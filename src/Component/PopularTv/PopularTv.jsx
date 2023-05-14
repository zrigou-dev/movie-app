import React, { useContext } from "react";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import RatedCyrcle from "../RatedCyrcle/RatedCyrcle";
import { tvDataContext } from "../../Context/TvShowsContextApi";


const PopularTv = () => {
    const {popularTV , page , setpage , getTv}=useContext(tvDataContext)
    const handlePrevPage = () => {
        if (page > 1) {
          setpage(page - 1);
          getTv(page - 1);
        } else {
          return;
        }
      };
      const handleNextPage = () => {
        if (popularTV.length < 20) {
          return;
        } else {
          setpage(page + 1);
          getTv(page + 1);
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
        {popularTV.map((movie) => {
          return (
            <div className="col-md-2 col-sm-4 col-6 card-list" key={movie.id}>
              <RatedCyrcle  rating={movie.vote_average}  />
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="poster movie"
              />
              <p>{movie.name}</p>
            </div>
          );
        })}
      </div>
      <h3 className="page-head">Page : {page}</h3>
    </div>
  </div>
  )
}

export default PopularTv
