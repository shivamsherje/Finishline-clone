import React from "react";
import img1 from "../Assets/mens_gird2_1_img.jfif";
import img2 from "../Assets/mens_gird2_2_img.jfif";
import img3 from "../Assets/mens_gird2_3_img.jfif";

import { Grid, GridItem, Image } from "@chakra-ui/react";

const GridM2 = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: "100%",
        marginTop: "50px",
      }}
    >
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
          <p style={{textDecoration:"underline"}}>Graphic Tees</p>

        </GridItem>

        <GridItem>
          <Image src={img2} />
          <p style={{textDecoration:"underline"}}>Comfy Kicks</p>

        </GridItem>

        <GridItem>
          <Image src={img3} />
          <p style={{textDecoration:"underline"}}>Sweatshirts & Joggers</p>

        </GridItem>
      
      </Grid>
    </div>
  );
};

export default GridM2;
