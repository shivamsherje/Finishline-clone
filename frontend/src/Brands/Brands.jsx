import React from "react";
import "./Brands.css";
import { Grid, GridItem, Image, Text } from "@chakra-ui/react";

import Top from "../Homepage/Top";
import brand from "../Assets/brands.png";
import img1 from "../Assets/asics.png";
import img2 from "../Assets/birkenstock.png";
import img3 from "../Assets/Boondocks.jpg";
import img4 from "../Assets/brooks.png";
import img5 from "../Assets/champion.png";
import img6 from "../Assets/crokicicle.png";
import img7 from "../Assets/crep protect.png";
import img8 from "../Assets/crocs.png";
import img9 from "../Assets/Dfns.jfif";
import img10 from "../Assets/fila.png";
import img11 from "../Assets/forcefide.png";
import img12 from "../Assets/the farm.png";
import img13 from "../Assets/hoodrich.png";
import img14 from "../Assets/hugo boss.svg";
import img15 from "../Assets/hype.png";
import img16 from "../Assets/javi.png";
import img17 from "../Assets/juice couture.png";
import img18 from "../Assets/aligeator.png";
import img19 from "../Assets/live life nice.png";
import img20 from "../Assets/mitchel and ness.png";
import img21 from "../Assets/new era.png";
import img22 from "../Assets/niice.png";
import img23 from "../Assets/PE nation.png";
import img24 from "../Assets/pink soda sport.png";
import img25 from "../Assets/polo.png";
import img26 from "../Assets/psd.png";
import img27 from "../Assets/puma.png";
import img28 from "../Assets/reebok.png";
import img29 from "../Assets/riveriswild.png";
import img30 from "../Assets/Rockport.svg";
import img31 from "../Assets/sickslik.png";
import img32 from "../Assets/sonnetti.png";
import img33 from "../Assets/sorel.png";
import img34 from "../Assets/supply and demand.png";
import img35 from "../Assets/the north face.png";
import img36 from "../Assets/timberland.png";
import img37 from "../Assets/tommy hilfiger.png";
import img38 from "../Assets/tommy jense.png";
import img39 from "../Assets/under armour.png";
import img40 from "../Assets/Vans.png";

import Paragraph from "./Paragraph";
import Grid3 from "../Homepage/Grid3";
import Footer from "../Homepage/Footer";

const Brands = () => {
  return (
    <>
      <Top />
      <div>
        <h1 className="title">BRANDS</h1>
        <br />
        <div>
          <img src={brand} alt="" />
        </div>
      </div>

      <div className="grid-of-logos">
        <p className="lable-of-grid">ALL BRANDS</p>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(6, 1fr)",
          }}
          gap={6}
        >
          <GridItem>
            <Image src={img1} alt="" />
            <Text>Asics</Text>
          </GridItem>

          <GridItem>
            <Image src={img2} alt="" />
            <Text>Birkenstock</Text>
          </GridItem>

          <GridItem>
            <Image src={img3} alt="" />
            <Text>Boondocks</Text>
          </GridItem>

          <GridItem>
            <Image src={img4} alt="" />
            <Text>Brooks</Text>
          </GridItem>

          <GridItem>
            <Image src={img5} alt="" />
            <Text>Champion</Text>
          </GridItem>

          <GridItem>
            <Image src={img6} alt="" />
            <Text>Crokicicle</Text>
          </GridItem>

          <GridItem>
            <Image src={img7} alt="" />
            <Text>Crep protect</Text>
          </GridItem>

          <GridItem>
            <Image src={img8} alt="" />
            <Text>Crocs</Text>
          </GridItem>

          <GridItem>
            <Image src={img9} alt="" />
            <Text>DFNS</Text>
          </GridItem>

          <GridItem>
            <Image src={img10} alt="" />
            <Text>Fila</Text>
          </GridItem>

          <GridItem>
            <Image src={img11} alt="" />
            <Text>Forcefide</Text>
          </GridItem>

          <GridItem>
            <Image src={img12} alt="" />
            <Text>The Farm</Text>
          </GridItem>

          <GridItem>
            <Image src={img13} alt="" />
            <Text>Hoodrich</Text>
          </GridItem>

          <GridItem>
            <Image src={img14} alt="" />
            <Text>Hugo Boss</Text>
          </GridItem>

          <GridItem>
            <Image src={img15} alt="" />
            <Text>Hype</Text>
          </GridItem>

          <GridItem>
            <Image src={img16} alt="" />
            <Text>Javi</Text>
          </GridItem>

          <GridItem>
            <Image src={img17} alt="" />
            <Text>Juice Couture</Text>
          </GridItem>

          <GridItem>
            <Image src={img18} alt="" />
            <Text>Lacoste</Text>
          </GridItem>

          <GridItem>
            <Image src={img19} alt="" />
            <Text>Live Life Nice</Text>
          </GridItem>

          <GridItem>
            <Image src={img20} alt="" />
            <Text>Mitchel And Ness</Text>
          </GridItem>

          <GridItem>
            <Image src={img21} alt="" />
            <Text>New Era</Text>
          </GridItem>

          <GridItem>
            <Image src={img22} alt="" />
            <Text>Niice</Text>
          </GridItem>

          <GridItem>
            <Image src={img23} alt="" />
            <Text>PE Nation</Text>
          </GridItem>

          <GridItem>
            <Image src={img24} alt="" />
            <Text>Pink Soda Sport</Text>
          </GridItem>

          <GridItem>
            <Image src={img25} alt="" />
            <Text>Polo</Text>
          </GridItem>

          <GridItem>
            <Image src={img26} alt="" />
            <Text>PSD</Text>
          </GridItem>

          <GridItem>
            <Image src={img27} alt="" />
            <Text>Puma</Text>
          </GridItem>

          <GridItem>
            <Image src={img28} alt="" />
            <Text>Reebok</Text>
          </GridItem>

          <GridItem>
            <Image src={img29} alt="" />
            <Text>Riveriswild</Text>
          </GridItem>

          <GridItem>
            <Image src={img30} alt="" />
            <Text>Rockport</Text>
          </GridItem>

          <GridItem>
            <Image src={img31} alt="" />
            <Text>Sickslik</Text>
          </GridItem>

          <GridItem>
            <Image src={img32} alt="" />
            <Text>Sonnetti</Text>
          </GridItem>

          <GridItem>
            <Image src={img33} alt="" />
            <Text>Sorel</Text>
          </GridItem>

          <GridItem>
            <Image src={img34} alt="" />
            <Text>Supply And Demand</Text>
          </GridItem>

          <GridItem>
            <Image src={img35} alt="" />
            <Text>The North Face</Text>
          </GridItem>

          <GridItem>
            <Image src={img36} alt="" />
            <Text>Timberland</Text>
          </GridItem>

          <GridItem>
            <Image src={img37} alt="" />
            <Text>Tommy Hilfiger</Text>
          </GridItem>

          <GridItem>
            <Image src={img38} alt="" />
            <Text>Tommy Jense</Text>
          </GridItem>

          <GridItem>
            <Image src={img39} alt="" />
            <Text>Under Armour</Text>
          </GridItem>

          <GridItem>
            <Image src={img40} alt="" />
            <Text>Vans</Text>
          </GridItem>
        </Grid>
      </div>


      <hr />
      <br />
      <br />
      
      <Paragraph />
      <Grid3 />
      <Footer />
    </>
  );
};

export default Brands;
