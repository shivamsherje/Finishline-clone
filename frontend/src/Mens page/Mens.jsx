import React from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import img1 from "../Assets/img4.webp";
import img2 from "../Assets/img3.webp";
import img3 from "../Assets/DM1123_100.webp";
import img4 from "../Assets/DV1245_010.webp";
import img5 from "../Assets/BV2671_657.webp";
import img6 from "../Assets/NF0A3C8D_LE4_M3.webp";
import img7 from "../Assets/Screenshot (194).png";
import img8 from "../Assets/Screenshot (195).png";
import img9 from "../Assets/Screenshot (197).png";
import img10 from "../Assets/Screenshot (199).png";
import img11 from "../Assets/Screenshot (200).png";

import "./mens.css";
import GridM1 from "./GridM1";
import GridM2 from "./GridM2";
import AfterGrid2 from "./AfterGrid2";
import Grid3 from "../Homepage/Grid3";
import Footer from "../Homepage/Footer";
import Paragraphm from "../Mens page/Paragraphm";
import Slideshow2 from "../Homepage/Top";

const Mens = () => {
  const list = [img7, img8, img9, img10, img11];

  const Bar = () => {
    return (
      <>
        {list.map((item) => {
          return (
            <>
              <img
                style={{
                  display: "flex",
                  marginRight: "50px",
                  borderRadius: "10px",
                  height: "450px",
                }}
                src={item}
                alt=""
              />
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Slideshow2 />

      <div
        className="right-div"
        style={{
          border: "1px solid red",
          display: "flex",
          width: "90%",
          margin: "auto",
        }}
      >
        <div
          className="names-div"
          style={{
            border: "1px solid red",

            textAlign: "left",
          }}
        >
          <Box>
            <Text fontSize={"20px"} fontWeight={"bold"}>
              Brands
            </Text>
            <Text>Nike</Text>
            <Text>adidas</Text>
            <Text>Jordan</Text>
            <Text>Converse</Text>
            <Text>On</Text>
            <Text>New</Text>
            <Text>Balance</Text>
            <Text>Puma</Text>
            <Text>Crocs</Text>
            <Text>Brooks</Text>
            <Text>Reebok</Text>
            <Text>Vans</Text>
          </Box>
          <Box>
            <Text fontSize={"20px"} fontWeight={"bold"}>
              Shoes
            </Text>
            <Text>Running</Text>
            <Text>Casual</Text>
            <Text>Sandals, Slides & Slippers</Text>
            <Text>Training & Cleats</Text>
            <Text>Boots</Text>
            <Text>Sizes 14-20</Text>
            <Text>All Shoes</Text>
          </Box>
          <Box>
            <Text fontSize={"20px"} fontWeight={"bold"}>
              Clothing
            </Text>
            <Text>Shirts & Tanks</Text>
            <Text>Hoodies & Sweatshirts</Text>
            <Text>Sweatpants & Joggers</Text>
            <Text>Coats & Vests</Text>
            <Text>Shorts & Swimwear</Text>
            <Text>Matching Sets </Text>
            <Text>Denim & Jeans </Text>
            <Text>2 for $40 Tees</Text>
            <Text> Socks & Underwear</Text>
            <Text> Fan Gear & Jerseys</Text>
            <Text> All Clothing</Text>
          </Box>

          <Box>
            <Text fontWeight={"bold"} fontSize={"20px"}>
              Accessories
            </Text>
            <Text>Hats & Headbands</Text>
            <Text>Socks</Text>
            <Text>Bags & Backpacks</Text>
            <Text>Underwear</Text>
            <Text>Crocs Jibbitz </Text>
            <Text> Shoe Care</Text>
            <Text>Fitness Gear</Text>
            <Text>Face Masks</Text>
            <Text>Cold Weather Gear</Text>
            <Text> Water Bottles</Text>
            <Text> All Accessories</Text>
          </Box>
        </div>

        <div
          style={{
            width: "100%",
            border: "1px solid red",
            marginBottom: "30px",
            paddingRight: "10px",
          }}
        >
          <div
            className="top-right-div"
            style={{ width: "100%", textAlign: "left" }}
          >
            <h1 style={{ fontWeight: "bold", fontSize: "20PX" }}>
              MEN'S SHOES, CLOTHING & ACCESSORIES
            </h1>
          </div>

          <div style={{ width: "100%", margin: "auto" }}>
            <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>
              SHOP BY CATEGORY
            </h1>
          </div>
          <Grid
            width={"100%"}
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={1}
          >
            <GridItem>
              <Image src={img1} />
              <Text fontWeight={"bold"}>RUNNING SHOES</Text>
              <a style={{ textDecoration: "underline" }}>Shop Now →</a>
            </GridItem>

            <GridItem>
              <Image src={img2} />
              <Text fontWeight={"bold"}>RUNNING SHOES</Text>
              <a style={{ textDecoration: "underline" }}>Shop Now →</a>
            </GridItem>

            <GridItem>
              <Image src={img3} />
              <Text fontWeight={"bold"}>RUNNING SHOES</Text>
              <a style={{ textDecoration: "underline" }}>Shop Now →</a>
            </GridItem>
            <GridItem>
              <Image src={img4} />
              <Text fontWeight={"bold"}>RUNNING SHOES</Text>
              <a style={{ textDecoration: "underline" }}>Shop Now →</a>
            </GridItem>

            <GridItem>
              <Image src={img5} />
              <Text fontWeight={"bold"}>RUNNING SHOES</Text>
              <a style={{ textDecoration: "underline" }}>Shop Now →</a>
            </GridItem>
            <GridItem>
              <Image src={img6} />
              <Text fontWeight={"bold"}>RUNNING SHOES</Text>
              <a style={{ textDecoration: "underline" }}>Shop Now →</a>
            </GridItem>
          </Grid>
          <br />
          <br />
          <div style={{ width: "100%", margin: "auto" }}>
            <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>
              TRENDING OUTFITS
            </h1>
          </div>
          <div>
            <div
              className="scrollbar"
              style={{
                scrollbarwidth: "none",
                display: "flex",
                overflowX: "scroll",
                padding: "5px",
                width: "95%",
                margin: "auto",
              }}
            >
              <Bar />
            </div>
          </div>
          <hr style={{ width: "80%", margin: "auto" }} />

          {/*           
          <GridM1 />
          <GridM2 />
          <AfterGrid2 /> */}
        </div>
      </div>

      {/* 
    <div style={{justifyContent:"center", width:"95%", margin:"auto"}}>
    <Paragraphm/>

      <Grid3/>
      <Footer/>
      </div> */}
    </>
  );
};

export default Mens;
