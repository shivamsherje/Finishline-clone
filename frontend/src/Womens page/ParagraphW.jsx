import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";

const ParagraphW = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: "90%",
        marginBottom: "30px",
        marginTop: "50px",
        textAlign: "left",
      }}
    >
      <Grid
        width={"100%"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(1, 1fr)",
          xl: "repeat(1, 1fr)",
        }}
        gap={1}
      >
        <GridItem textAlign={"justify"}>
          <Text fontWeight={"bold"}>
            WOMEN’S ACTIVEWEAR & ATHLEISURE CLOTHING
          </Text>
          <Text>
            These days, it’s all about athleisure wear for women. From coffee
            dates with your latest crush to workouts at your favorite gym, your
            lifestyle calls for comfortable outfits that strike the ideal
            balance between sporty and chic. Strut your fashionable stuff in
            must-have women’s athleisure clothing items like tees, tanks, sports
            bras, and leggings. New essentials like joggers and bike shorts are
            also on the menu, complementing your look so that you’re always
            turning heads. Shop your favorite brands and ensure you’re still at
            the top of everyone’s best-dressed list, even when you’re just
            walking the dog.
          </Text>
        </GridItem>
        <br />

        <GridItem textAlign={"justify"}>
          <Text fontWeight={"bold"}>WOMEN’S ATHLEISURE SHOES</Text>
          <Text>
            Athleisure shoes are also a must when completing your full easygoing
            look. Shop the wide assortment of women’s casual sneakers from top
            athleisure brands like adidas, Nike and Champion, to ensure your
            vibe is on point from head to toe. With everything from easy slip-on
            models to Air Force 1s and Air Max shoes, Finish Line has the
            athleisure footwear you need to make any outfit a fashion-savvy
            head-turner.
          </Text>
        </GridItem>
      </Grid>
    </div>
  );
};

export default ParagraphW;
