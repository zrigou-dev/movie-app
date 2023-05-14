import React from "react";
import "./Movie.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TopRatedMovie from "../../Component/TopRatedMovie/TopRatedMovie";
import PopularMovie from "../../Component/PopularMovie/PopularMovie";
import NowPlayingMovie from "../../Component/NowPlayingMovie/NowPlayingMovie";
import UpComingMovie from "../../Component/UpComingMovie/UpComingMovie";

const Movie = () => {
  return (
    <Tabs
      defaultActiveKey="Top Rated"
      id="justify-tab-example"
      className="mb-3 tabs container"
      justify
    >
      <Tab eventKey="Top Rated" title="Top Rated" className="tab container">
        <TopRatedMovie />
      </Tab>
      <Tab eventKey="Popular" title="Popular" className="tab container">
        <PopularMovie />
      </Tab>
      <Tab eventKey="Now Playing" title="Now Playing" className="tab container">
        <NowPlayingMovie />
      </Tab>
      <Tab eventKey="UpComing" title="UpComing" className="tab container">
        <UpComingMovie />
      </Tab>
    </Tabs>
  );
};

export default Movie;
