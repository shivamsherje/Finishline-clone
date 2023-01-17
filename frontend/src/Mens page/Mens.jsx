import React from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import img1 from "../Assets//M2002RDR_001.webp";
import img2 from "../Assets/CW2288_111.webp";
import img3 from "../Assets/DM1123_100.webp";
import img4 from "../Assets/DV1245_010.webp";
import img5 from "../Assets/BV2671_657.webp";
import img6 from "../Assets/NF0A3C8D_LE4_M3.webp";
import Scroll2 from "./Scroll2";

const Mens = () => {
  return (
    <div style={{ border: "3px solid red" }}>
      <div
        style={{
          display: "flex",
          width: "90%",
          margin: "auto",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            border: "2px solid red",
            width: "12em",
            textAlign: "left",
            paddingLeft: "20px",
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

        <div style={{ width: "80%", border: "2px solid blue" }}>
          <Grid
            width={"100%"}
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            <GridItem textAlign={"left"}>
              <Image src={img1} />
              <Text fontWeight={"bold"}>RUNNING SHOES</Text>
              <Text textDecoration={"underline"}> Shop Now →</Text>
            </GridItem>
            <GridItem textAlign={"left"}>
              <Image src={img2} />
              <Text fontWeight={"bold"}>RUNNING SHOES</Text>
              <Text textDecoration={"underline"}> Shop Now →</Text>
            </GridItem>
            <GridItem textAlign={"left"}>
              <Image src={img3} />
              <Text fontWeight={"bold"}>RUNNING SHOES</Text>
              <Text textDecoration={"underline"}> Shop Now →</Text>
            </GridItem>
            <GridItem textAlign={"left"}>
              <Image src={img4} />
              <Text fontWeight={"bold"}>RUNNING SHOES</Text>
              <Text textDecoration={"underline"}> Shop Now →</Text>
            </GridItem>
            <GridItem textAlign={"left"}>
              <Image src={img5} />
              <Text fontWeight={"bold"}>RUNNING SHOES</Text>
              <Text textDecoration={"underline"}> Shop Now →</Text>
            </GridItem>
            <GridItem textAlign={"left"}>
              <Image src={img6} />
              <Text fontWeight={"bold"}>RUNNING SHOES</Text>
              <Text textDecoration={"underline"}> Shop Now →</Text>
            </GridItem>
          </Grid>
          <Scroll2 />
        </div>
      </div>
    </div>
  );
};

export default Mens;
