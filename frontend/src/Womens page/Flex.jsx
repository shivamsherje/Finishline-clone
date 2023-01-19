import React from "react";
import { Box, Text } from "@chakra-ui/react";
import img1 from "../Assets/women1.webp";
import img2 from "../Assets/women2.png";
import img3 from "../Assets/women3.png";
import img4 from "../Assets/women4.png";
import img5 from "../Assets/women5.png";
import img6 from "../Assets/women6.png";
import "./Flex.css"


import { Grid, GridItem, Image } from "@chakra-ui/react";
import ScrollW1 from "./ScrollW1";
import AfterGrid3 from "./Aftergrid3";
import GridW1 from "./GridW1";
import GridW3 from "./GridW3";


const Flex = () => {
  return (
    <div className="main-div" style={{display:"flex", width:"90%", margin:"auto",gap:"10px" }} >
      <div
        className="names-div"
        style={{
          textAlign: "left",
          fontSize:"15px"
        }}
      >
        <Box>
          <Text fontWeight={"bold"}>
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
        <br/>
        <Box>
          <Text fontWeight={"bold"}>
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
        <br/>

        <Box>
          <Text fontWeight={"bold"}>
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
        <br/>

        <Box>
          <Text fontWeight={"bold"}>
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
        </Box><br/>
      </div>

      <div className="secondDiv">

    <h1 style={{fontSize:"18px", fontWeight:"bold"}}>WOMEN'S SHOES, CLOTHING & ACCESSORIES <br/>SHOP BY CATEGORY</h1>
      <Grid
        width={"100%"}
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={1}
      >
        <GridItem>
          <Image src={img1} alt="" />
          <Text fontWeight={"bold"}>RUNNING SHOES</Text>
              <p style={{ textDecoration: "underline" }}>Shop Now →</p>
        
        </GridItem>

        <GridItem>
          <Image src={img2} alt="" />
          <Text fontWeight={"bold"}>CASUAL SHOES</Text>
              <p style={{ textDecoration: "underline" }}>Shop Now →</p>
        </GridItem>

        <GridItem>
          <Image src={img3} alt=""  />
          <Text fontWeight={"bold"}>PLATFORM</Text>
              <p style={{ textDecoration: "underline" }}>Shop Now →</p>
        </GridItem>


        <GridItem>
          <Image src={img4} alt=""  />
          <Text fontWeight={"bold"}>HOODIES AND SWEATSHIRT</Text>
              <p style={{ textDecoration: "underline" }}>Shop Now →</p>
        </GridItem>

        <GridItem>
          <Image src={img5} alt=""  />
          <Text fontWeight={"bold"}>LEGGINGS</Text>
              <p style={{ textDecoration: "underline" }}>Shop Now →</p>
        </GridItem>

        <GridItem>
          <Image src={img6} alt="" />
          <Text fontWeight={"bold"}>SWEATPANTS AND JOGGERS</Text>
              <p style={{ textDecoration: "underline" }}>Shop Now →</p>
        </GridItem>
      </Grid>
      


<ScrollW1/>
<AfterGrid3/>
<GridW1/>

<GridW3/>




    </div>
    </div>
  );
};

export default Flex;
