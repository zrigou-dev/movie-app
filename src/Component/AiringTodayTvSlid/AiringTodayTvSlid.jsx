import React, { useContext } from "react";
import './AiringTodayTvSlid.css'
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronDoubleRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { tvDataContext } from "../../Context/TvShowsContextApi";

const AiringTodayTvSlid = () => {
    const {airingTodayTV}= useContext(tvDataContext) 
  return (
    <div className="topRatedMovie">
    <>
    <h2>Airing Today Tv Shows <Link to={"/tvShows"}><span>-Explore All <BsChevronDoubleRight className="explore-icon"/></span></Link></h2>
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
        {airingTodayTV.map((movie ) => {return(
          <SwiperSlide key={movie.id} style={{ width: '200px' }}>
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="movie poster"
                className="card-img"
              />
              <p>{movie.name}</p>
            </div>
          </SwiperSlide>)
          
        })}
      </Swiper>
    </>
  </div>
  )
}

export default AiringTodayTvSlid
