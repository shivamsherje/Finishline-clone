import React from "react";
import img1 from "../Assets/img12.jfif";
import img2 from "../Assets/img13.jfif";
import img3 from "../Assets/img14.jfif";
import img4 from "../Assets/img15.jfif";

import { Grid, GridItem, Image, Text } from "@chakra-ui/react";

const Featured2 = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: "90%",
        marginBottom: "30px",
        marginTop: "50px",
        border:"2px solid gray"
      }}
    >
      <Grid 
       padding={"5%"}
        margin={"auto"}
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
      
      >
        <GridItem>
          <Image src={img1} />
          <Text textDecoration={"underline"} fontSize={"16px"}>
            Most Favorited Styles
          </Text>
        </GridItem>

        <GridItem>
          <Image src={img2} />
          <Text textDecoration={"underline"} fontSize={"16px"}>
            Top Trending
          </Text>
        </GridItem>

        <GridItem>
          <Image src={img3} />
          <Text textDecoration={"underline"} fontSize={"16px"}>
            Recent Releases
          </Text>
        </GridItem>

        <GridItem>
          <Image src={img4} />
          <Text textDecoration={"underline"} fontSize={"16px"}>
            Recent Releases
          </Text>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Featured2;
