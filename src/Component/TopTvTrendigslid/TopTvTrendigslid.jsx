import React, { useContext } from "react";
import './TopTvTrendigslid.css'
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronDoubleRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import { TrendingContext } from "../../Context/TrendingConteaxtApi";
import { Link } from "react-router-dom";


const TopTvTrendigslid = () => {
    const {trendingTV} = useContext(TrendingContext)
    console.log(trendingTV);
  return (
    <div className="topRatedMovie">
      <>
      <h2>Top Tv Shows This Week <Link to={"/TvShows"}><span>-Explore All <BsChevronDoubleRight className="explore-icon"/></span></Link></h2>
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
          {trendingTV.map((movie , index) => {return(
            <SwiperSlide key={movie.id} style={{ width: '200px' }}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="movie poster"
                  className="card-img"
                />
                <p>{movie.name}</p>
                <h1 className="ranking">{index + 1}</h1>
              </div>
            </SwiperSlide>)
            
          })}
        </Swiper>
      </>
    </div>
  )
}

export default TopTvTrendigslid
