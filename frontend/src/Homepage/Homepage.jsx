import Grid1 from "../Homepage/Grid1";
import React from "react";
import Afterslideshow from "./Afterslideshow";
import Banner1 from "./Banner1";
import Grid2 from "../Homepage/Grid2";
import Slideshow from "./Slideshow";
import Scroll1 from "./Scroll2";
import Featured from "./Featured";
import Featured2 from "./Featured2";
import Featured3 from "./Featured3";
import Banner2 from "./banner2";
import Paragraphs from "./Paragraphs";
import Grid3 from "./Grid3";
import Footer from "./Footer";
import Top from "./Top";
const Homepage = () => {
  return (
    <div>
      <Top />
      <Banner1 />
      <Slideshow />
      <Afterslideshow />
      <Grid1 />
      <Grid2 />
      <Scroll1 />
      <Featured />
      <Featured2 />
      <Featured3 />
      <Banner2 />
      <Paragraphs />
      <Grid3 />
      <Footer />
    </div>
  );
};

export default Homepage;
