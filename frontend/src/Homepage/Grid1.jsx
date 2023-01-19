import img1 from "../Assets/img1.jfif";
import img2 from "../Assets/img2.jfif";
import img3 from "../Assets/men3.webp";
import img4 from "../Assets/men4.webp";
import img5 from "../Assets/img5.jfif";
import img6 from "../Assets/img6.jfif";
import img7 from "../Assets/img7.jfif";
import img8 from "../Assets/img8.jfif";

import { Grid, GridItem, Image, Text } from "@chakra-ui/react";

import React from "react";

const Grid1 = () => {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Text fontWeight={"bold"} fontSize={"20px"}>
        SHOP THE LATEST & GREATEST STYLES
      </Text>
      <br />
      <Grid
        width={"100%"}
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        <GridItem>
          <Image src={img1} />
          <Text>Jordan</Text>
        </GridItem>
        <GridItem>
          <Image src={img2} />
          <Text>Nick Air Max</Text>
        </GridItem>
        <GridItem>
          <Image src={img3} />
          <Text>Nick Air Force 1</Text>
        </GridItem>
        <GridItem>
          <Image src={img4} />
          <Text>New Balance</Text>
        </GridItem>
        <GridItem>
          <Image src={img5} />
          <Text>Boots</Text>
        </GridItem>
        <GridItem>
          <Image src={img6} />
          <Text>Matching Sets</Text>
        </GridItem>
        <GridItem>
          <Image src={img7} />
          <Text>Best Sellers</Text>
        </GridItem>
        <GridItem>
          <Image src={img8} />
          <Text>Outerwear up to 40% off</Text>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Grid1;
