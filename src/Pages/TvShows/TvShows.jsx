import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TopRatedTvShow from "../../Component/TopRatedTvShow/TopRatedTvShow";
import PopularTv from "../../Component/PopularTv/PopularTv";
import AiringTvToday from "../../Component/AiringTvToday/AiringTvToday";
import OnTheAirTv from "../../Component/OnTheAirTv/OnTheAirTv";

const TvShows = () => {
  return (
    <Tabs
      defaultActiveKey="Top Rated"
      id="justify-tab-example"
      className="mb-3 tabs container"
      justify
    >
      <Tab eventKey="Top Rated" title="Top Rated" className="tab container">
        <TopRatedTvShow/>
      </Tab>
      <Tab eventKey="Popular" title="Popular" className="tab container">
        <PopularTv/>
      </Tab>
      <Tab eventKey="Airing Today" title="Airing Today" className="tab container">
        <AiringTvToday/>
      </Tab>
      <Tab eventKey="On The Air" title="On The Air" className="tab container">
         <OnTheAirTv/>
      </Tab>
    </Tabs>
  );
};

export default TvShows;
