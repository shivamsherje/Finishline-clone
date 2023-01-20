import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import "./Brands.css";


const ParagraphW = () => {

  return (
    <div className="paragraph-main-container">
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
        <GridItem className="child-container-paragraph">
          <Text className="paragraph-title-texts">ATHLETIC SHOES & CLOTHING BRANDS </Text>
          <Text>
            For decades, athletic wear has ruled the gyms, the fields, the
            tracks, and the courts, keeping athletes outfitted in everything
            they need to excel from head to toe. Recent years have brought some
            serious crossover action to the scene, taking these athletic pieces
            to the streets, too. And with that, athletic brands have transcended
            the locker rooms and taken the mainstream by storm. Now, they aren’t
            just for athletes, they’re for everyone.
          </Text>
        </GridItem>
        <br />

        <GridItem className="child-container-paragraph">
          <Text className="paragraph-title-texts">ATHLEISURE BRANDS ONLY AT FINISH LINE</Text>
          <Text>
            So, whether you’re an athlete or just an everyday athleisure-wearer,
            where can you find all the brands you crave? Quit looking; your
            search can come to a screeching halt right here. Finish Line has you
            fully covered with all of the athletic brands your heart desires.
            Need some new sneakers for the gym or the streets? You’re one click
            away from the top shoe brands like Nike, Jordan, adidas, and
            Converse, ensuring you’re always right at the pulse of what’s hot
            when you’re shopping for must-have name brand shoes.
          </Text>
        </GridItem>
        <br />
        <GridItem className="child-container-paragraph" >
          <Text className="paragraph-title-texts">THE BEST CLOTHING & SPORTSWEAR BRANDS</Text>
          <Text>
            And it doesn’t stop with shoes. Sportswear brands that are breaking
            new ground with innovative apparel as well as classic looks like
            Under Armour, Puma, Fila and Champion are all right here at Finish
            Line as well. It’s a who’s who of top athleisure brands, all hanging
            out in one spot. Stay in the now and up on the new, whether you’re
            looking for workout gear to level up your training regimen, or
            athleisure looks for off-duty days. Whether you’re loyal to one name
            or like to mix and match your brands, find the ones you want all at
            Finish Line.
          </Text>
        </GridItem>
      </Grid>
    </div>
  );
};

export default ParagraphW;
