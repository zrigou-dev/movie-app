import React from 'react'
import SlideHero from '../../Component/SlideHero/SlideHero'
import TopRatedMoviesSlider from '../../Component/TopRatedMoviesSlider/TopRatedMoviesSlider'
import TopRatedTv from '../../Component/TopRatedTv/TopRatedTv'
import TopMovieTrendSlid from '../../Component/TopMovieTrendSlid/TopMovieTrendSlid'
import PopularMovieSlid from '../../Component/PopularMovieSlid/PopularMovieSlid'
import PopularTvSlid from '../../Component/PopularTvSlid/PopularTvSlid'
import TopTvTrendigslid from '../../Component/TopTvTrendigslid/TopTvTrendigslid'
import NowPlayingMovieSlid from '../../Component/NowPlayingMovieSlid/NowPlayingMovieSlid'
import AiringTodayTvSlid from '../../Component/AiringTodayTvSlid/AiringTodayTvSlid'
import UpComingMovieSlid from '../../Component/UpComingMovieSlid/UpComingMovieSlid'
import OnTheAirTvSlid from '../../Component/OnTheAirTvSlid/OnTheAirTvSlid'
import TrendingPeopleSlid from '../../Component/TrendingPeopleSlid/TrendingPeopleSlid'


const Home = () => {
  return (
    <div>
      <SlideHero/>
      <TopRatedMoviesSlider/>
      <TopRatedTv/>
      <TopMovieTrendSlid/>
      <PopularMovieSlid/>
      <PopularTvSlid/>
      <TopTvTrendigslid/>
      <NowPlayingMovieSlid/>
      <AiringTodayTvSlid/>
      <UpComingMovieSlid/>
      <OnTheAirTvSlid/>
      <TrendingPeopleSlid/>
    </div>
  )
}

export default Home
