import React from 'react'
import "./Brands.css";
import { Grid, GridItem, Image, Text } from "@chakra-ui/react";

// import Top from "../Homepage/Top";
import brand from "../Assets/brands.png";
import img1 from "../Assets/asics.png";
import img2 from "../Assets/birkenstock.png";
import img3 from "../Assets/Boondocks.jpg";
import img4 from "../Assets/brooks.png";
import img5 from "../Assets/champion.png";
import img6 from "../Assets/crokicicle.png";
import img7 from "../Assets/crep protect.png";
import img8 from "../Assets/crocs.png";
import img9 from "../Assets/Dfns.jfif";
import img10 from "../Assets/fila.png";
import img11 from "../Assets/forcefide.png";
import img12 from "../Assets/the farm.png";
import img13 from "../Assets/hoodrich.png";
import img14 from "../Assets/hugo boss.svg";
import img15 from "../Assets/hype.png";
import img16 from "../Assets/javi.png";
import img17 from "../Assets/juice couture.png";
import img18 from "../Assets/aligeator.png";
import img19 from "../Assets/live life nice.png";
import img20 from "../Assets/mitchel and ness.png";
import img21 from "../Assets/new era.png";
import img22 from "../Assets/niice.png";
import img23 from "../Assets/PE nation.png";
import img24 from "../Assets/pink soda sport.png";
import img25 from "../Assets/polo.png";
import img26 from "../Assets/psd.png";
import img27 from "../Assets/puma.png";
import img28 from "../Assets/reebok.png";
import img29 from "../Assets/riveriswild.png";
import img30 from "../Assets/Rockport.svg";
import img31 from "../Assets/sickslik.png";
import img32 from "../Assets/sonnetti.png";
import img33 from "../Assets/sorel.png";
import img34 from "../Assets/supply and demand.png";
import img35 from "../Assets/the north face.png";
import img36 from "../Assets/timberland.png";
import img37 from "../Assets/tommy hilfiger.png";
import img38 from "../Assets/tommy jense.png";
import img39 from "../Assets/under armour.png";
import img40 from "../Assets/Vans.png";
import Footer from '../Footer/Footer';


import img41 from "../Assets/imgD.png";
import img42 from "../Assets/imgC.png";
import img43 from "../Assets/imgB.png";
import img44 from "../Assets/imgA.png";


export default function Brands() {
  return (
    <div>
      {/* <Top /> */}
      <div>
        <h1 className="title">BRANDS</h1>
        <br />
        <div>
          <img src={brand} alt="" />
        </div>
      </div>

      <div className="grid-of-logos">
        <p className="lable-of-grid">ALL BRANDS</p>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(6, 1fr)",
          }}
          gap={6}
        >
          <GridItem>
            <Image src={img1} alt="" />
            <Text>Asics</Text>
          </GridItem>

          <GridItem>
            <Image src={img2} alt="" />
            <Text>Birkenstock</Text>
          </GridItem>

          <GridItem>
            <Image src={img3} alt="" />
            <Text>Boondocks</Text>
          </GridItem>

          <GridItem>
            <Image src={img4} alt="" />
            <Text>Brooks</Text>
          </GridItem>

          <GridItem>
            <Image src={img5} alt="" />
            <Text>Champion</Text>
          </GridItem>

          <GridItem>
            <Image src={img6} alt="" />
            <Text>Crokicicle</Text>
          </GridItem>

          <GridItem>
            <Image src={img7} alt="" />
            <Text>Crep protect</Text>
          </GridItem>

          <GridItem>
            <Image src={img8} alt="" />
            <Text>Crocs</Text>
          </GridItem>

          <GridItem>
            <Image src={img9} alt="" />
            <Text>DFNS</Text>
          </GridItem>

          <GridItem>
            <Image src={img10} alt="" />
            <Text>Fila</Text>
          </GridItem>

          <GridItem>
            <Image src={img11} alt="" />
            <Text>Forcefide</Text>
          </GridItem>

          <GridItem>
            <Image src={img12} alt="" />
            <Text>The Farm</Text>
          </GridItem>

          <GridItem>
            <Image src={img13} alt="" />
            <Text>Hoodrich</Text>
          </GridItem>

          <GridItem>
            <Image src={img14} alt="" />
            <Text>Hugo Boss</Text>
          </GridItem>

          <GridItem>
            <Image src={img15} alt="" />
            <Text>Hype</Text>
          </GridItem>

          <GridItem>
            <Image src={img16} alt="" />
            <Text>Javi</Text>
          </GridItem>

          <GridItem>
            <Image src={img17} alt="" />
            <Text>Juice Couture</Text>
          </GridItem>

          <GridItem>
            <Image src={img18} alt="" />
            <Text>Lacoste</Text>
          </GridItem>

          <GridItem>
            <Image src={img19} alt="" />
            <Text>Live Life Nice</Text>
          </GridItem>

          <GridItem>
            <Image src={img20} alt="" />
            <Text>Mitchel And Ness</Text>
          </GridItem>

          <GridItem>
            <Image src={img21} alt="" />
            <Text>New Era</Text>
          </GridItem>

          <GridItem>
            <Image src={img22} alt="" />
            <Text>Niice</Text>
          </GridItem>

          <GridItem>
            <Image src={img23} alt="" />
            <Text>PE Nation</Text>
          </GridItem>

          <GridItem>
            <Image src={img24} alt="" />
            <Text>Pink Soda Sport</Text>
          </GridItem>

          <GridItem>
            <Image src={img25} alt="" />
            <Text>Polo</Text>
          </GridItem>

          <GridItem>
            <Image src={img26} alt="" />
            <Text>PSD</Text>
          </GridItem>

          <GridItem>
            <Image src={img27} alt="" />
            <Text>Puma</Text>
          </GridItem>

          <GridItem>
            <Image src={img28} alt="" />
            <Text>Reebok</Text>
          </GridItem>

          <GridItem>
            <Image src={img29} alt="" />
            <Text>Riveriswild</Text>
          </GridItem>

          <GridItem>
            <Image src={img30} alt="" />
            <Text>Rockport</Text>
          </GridItem>

          <GridItem>
            <Image src={img31} alt="" />
            <Text>Sickslik</Text>
          </GridItem>

          <GridItem>
            <Image src={img32} alt="" />
            <Text>Sonnetti</Text>
          </GridItem>

          <GridItem>
            <Image src={img33} alt="" />
            <Text>Sorel</Text>
          </GridItem>

          <GridItem>
            <Image src={img34} alt="" />
            <Text>Supply And Demand</Text>
          </GridItem>

          <GridItem>
            <Image src={img35} alt="" />
            <Text>The North Face</Text>
          </GridItem>

          <GridItem>
            <Image src={img36} alt="" />
            <Text>Timberland</Text>
          </GridItem>

          <GridItem>
            <Image src={img37} alt="" />
            <Text>Tommy Hilfiger</Text>
          </GridItem>

          <GridItem>
            <Image src={img38} alt="" />
            <Text>Tommy Jense</Text>
          </GridItem>

          <GridItem>
            <Image src={img39} alt="" />
            <Text>Under Armour</Text>
          </GridItem>

          <GridItem>
            <Image src={img40} alt="" />
            <Text>Vans</Text>
          </GridItem>
        </Grid>
      </div>


      <hr />
      <br />
      <br />
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
      <Grid
        width={"80%"}
        margin="auto"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={1}
      >
        <GridItem>
          <Image src={img41} />
        </GridItem>

        <GridItem>
          <Image src={img42} />
        </GridItem>

        <GridItem>
          <Image src={img43} />
        </GridItem>
        <GridItem>
          <Image src={img44} />
        </GridItem>
      </Grid>
      <Footer />
    </div>
  )
}
