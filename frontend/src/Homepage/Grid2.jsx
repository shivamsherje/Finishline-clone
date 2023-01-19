import React from "react";
import img1 from "../Assets/img9.jfif";
import img2 from "../Assets/img10.webp";
import img3 from "../Assets/img11.webp";
import { Grid, GridItem, Image, Text } from "@chakra-ui/react";

const Grid2 = () => {
  return (
    <div style={{ margin: "auto", width: "90%", marginBottom:"30px", marginTop:"50px" }}>
      <Grid
        width={"100%"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        <GridItem>
          <Image src={img3} />
          <Text textDecoration={"underline"} fontSize={"20px"}>
            Most Favorited Styles
          </Text>
        </GridItem>

        <GridItem>
          <Image src={img2} />
          <Text textDecoration={"underline"} fontSize={"20px"}>
            Top Trending
          </Text>
        </GridItem>

        <GridItem>
          <Image src={img1} />
          <Text textDecoration={"underline"} fontSize={"20px"}>
            Recent Releases
          </Text>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Grid2;
