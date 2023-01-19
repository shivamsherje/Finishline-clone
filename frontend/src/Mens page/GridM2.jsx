import React from "react";
import img1 from "../Assets/men9.jfif";
import img2 from "../Assets/men10.jfif";
import img3 from "../Assets/men11.jfif";


import { Grid, GridItem, Image } from "@chakra-ui/react";

const GridM2 = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: "100%",
        marginBottom: "30px",
        marginTop: "50px",
      }}
    >
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
          <Image src={img1}  alt="" />
          <p style={{textDecoration:"underline"}}>Graphic Tees</p>
        </GridItem>

        <GridItem>
          <Image src={img2} alt=""  />
          <p style={{textDecoration:"underline"}}>Comfy Kicks</p>
        </GridItem>

        <GridItem>
          <Image src={img3} alt="" />
          <p style={{textDecoration:"underline"}}>Sweatshirts and Joggers</p>
        </GridItem>
     
      </Grid>
    </div>
  );
};

export default GridM2;
