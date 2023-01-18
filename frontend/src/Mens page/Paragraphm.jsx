import React from "react";

import { Grid, GridItem ,Text} from "@chakra-ui/react";

const Grid3 = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: "100%",
        marginBottom: "30px",
        marginTop: "50px",
        textAlign:"left"
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
          <Text fontWeight={"bold"}> MEN’S ATHLEISURE WEAR</Text>
          <Text>
            Whether you’re hitting the gym, hanging with your friends, or
            watching the game, nothing beats men’s athleisure wear for your
            on-the-go lifestyle. The days when stuffy suits and dress shoes
            ruled your closet are long gone. These days, it’s all about
            athleisure clothing for men. The must-haves like athletic graphic
            tees and athletic shorts are complemented by stylized versions of
            classics, like joggers, crewnecks, and wind jackets. We can’t forget
            about the staple in everyone’s wardrobe – hoodies. Finish Line has
            you covered with the essential sweatshirts, Nike underwear and more
            from the brands you gotta have. Shop Men’s athleisure and
            accessories from Nike, adidas, Jordan, and more to ensure you’re
            always ahead of the trends
          </Text>
        </GridItem>
        <br/>

        <GridItem textAlign={"justify"}>
          <Text fontWeight={"bold"}>MEN’S ATHLEISURE SHOES</Text>
          <Text>
            Laid-back looks aren’t complete without staple footwear. Men’s
            athleisure shoes round out every ‘fit you have, ensuring your look
            is fresh from head to toe. From running-inspired models to
            basketball sneakers to iconic Jordans, there’s a pair of sneakers to
            finish off your athleisure vibe. Lace-up or slip-on these standout
            sneakers and step out in style.
          </Text>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Grid3;
