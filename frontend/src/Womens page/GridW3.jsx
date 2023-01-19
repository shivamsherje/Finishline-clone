import React from "react";
import img1 from "../Assets/women10.png";
import img2 from "../Assets/women11.png";
import img3 from "../Assets/women12.png";


import { Grid, GridItem, Image } from "@chakra-ui/react";

const GridW3 = () => {
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
          <Image src={img1} alt="" />
          <p style={{textDecoration:"underline"}}>Air max</p>
        </GridItem>

        <GridItem>
          <Image src={img2}alt=""  />
          <p style={{textDecoration:"underline"}}>Matching Sets</p>
        </GridItem>

        <GridItem>
          <Image src={img3} alt=""  />
          <p style={{textDecoration:"underline"}}>jackets and Coats</p>
        </GridItem>
     
      </Grid>
    </div>
  );
};

export default GridW3;
