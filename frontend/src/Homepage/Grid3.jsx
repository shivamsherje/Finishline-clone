import React from "react";
import img1 from "../Assets/imgD.png";
import img2 from "../Assets/imgC.png";
import img3 from "../Assets/imgB.png";
import img4 from "../Assets/imgA.png";

import { Grid, GridItem, Image } from "@chakra-ui/react";

const Grid3 = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: "90%",
        marginBottom: "30px",
        marginTop: "50px",
      }}
    >
      <Grid
        width={"100%"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={1}
      >
        <GridItem>
          <Image src={img1} />
        </GridItem>

        <GridItem>
          <Image src={img2} />
        </GridItem>

        <GridItem>
          <Image src={img3} />
        </GridItem>
        <GridItem>
          <Image src={img4} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Grid3;
