import React, { useContext } from "react";
import './UpComingMovieSlid.css'
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronDoubleRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { moviesDataContext } from "../../Context/MoviesContextAPI";
import RatedCyrcle from "../RatedCyrcle/RatedCyrcle";


const UpComingMovieSlid = () => {
    const {upcomingMovies}= useContext(moviesDataContext)
    console.log(upcomingMovies);
  return (
    <div className="topRatedMovie">
    <>
    <h2>Upcoming Movies <Link to={"/movies"}><span>-Explore All <BsChevronDoubleRight className="explore-icon"/></span></Link></h2>
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {upcomingMovies.map((movie ) => {return(
          <SwiperSlide key={movie.id} style={{ width: '200px' }}>
            <div className="card">
              <RatedCyrcle rating={movie.vote_average}/>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="movie poster"
                className="card-img"
              />
              <p>{movie.title}</p>
            </div>
          </SwiperSlide>)
          
        })}
      </Swiper>
    </>
  </div>
  )
}

export default UpComingMovieSlid
