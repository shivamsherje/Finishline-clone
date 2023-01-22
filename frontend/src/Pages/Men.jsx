import React from "react";
import "./womens.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Text } from "@chakra-ui/react";
import img1 from "../Assets/men1.webp";
import img2 from "../Assets/men2.webp";
import img3 from "../Assets/men3.webp";
import img4 from "../Assets/men4.webp";
import img5 from "../Assets/men5.webp";
import img6 from "../Assets/men6.webp";
import img7 from "../Assets/slide1.png";
import img8 from "../Assets/slide2.png";
import img9 from "../Assets/slide3.png";
import img10 from "../Assets/slide4.png";
import img11 from "../Assets/slide5.png";
import img12 from "../Assets/women7.jfif";
import img13 from "../Assets/men7.jfif";
import img14 from "../Assets/men8.jfif";
import img15 from "../Assets/men9.jfif";
import img16 from "../Assets/men10.jfif";
import img17 from "../Assets/men11.jfif";
import img18 from "../Assets/imgD.png";
import img19 from "../Assets/imgC.png";
import img20 from "../Assets/imgB.png";
import img21 from "../Assets/imgA.png";

import { Pagination, Navigation } from "swiper";
import axios from "axios";
import Card from "../Sliders/Card";

import { Grid, GridItem, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

export default function Men() {

  const Navigate = useNavigate()
  const runningFunc = () => {
    Navigate('/runningshoes')
  }


  const casualFunc=()=>{
    Navigate('/casualshoes')

  }

  const basketballFunc=()=>{
    Navigate('/basketballshoe')

  }
  const list = [img7, img8, img9, img10, img11];

  const [data, setData] = useState([]);

  const GetData = () => {
    axios
      .get(
        `https://shivam-vercel-db-eh2q.vercel.app/sportsline`
      )
      .then((res) => setData(res.data));
  };
  useEffect(() => {
    GetData();
  }, []);

  // const resultArr = data.filter((ele) => {
  //   return ele.brand == "nike";
  // });

  // const newArrival = data.filter((ele) => {
  //   return ele.brand == "fila";
  // });
  const men = data.filter((ele) => {
    return ele.for_whom == "men";
  });

  var containe_six_slider = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Bar = () => {
    return (
      <>
        {list.map((item) => {
          return (
            <>
              <img
                style={{
                  display: "flex",
                  marginRight: "50px",
                  borderRadius: "10px",
                  height: "450px",
                }}
                src={item}
                alt=""
              />
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div
        className="main-div"
        style={{ display: "flex", width: "90%", margin: "auto", gap: "10px" }}
      >
        <div
          className="names-div"
          style={{
            textAlign: "left",
            fontSize: "15px",
          }}
        >
          <Box>
            <Text fontWeight={"bold"}>Brands</Text>
            <Text>Nike</Text>
            <Text>adidas</Text>
            <Text>Jordan</Text>
            <Text>Converse</Text>
            <Text>On</Text>
            <Text>New</Text>
            <Text>Balance</Text>
            <Text>Puma</Text>
            <Text>Crocs</Text>
            <Text>Brooks</Text>
            <Text>Reebok</Text>
            <Text>Vans</Text>
          </Box>
          <br />
          <Box>
            <Text fontWeight={"bold"}>Shoes</Text>
            <Text>Running</Text>
            <Text>Casual</Text>
            <Text>Sandals, Slides & Slippers</Text>
            <Text>Training & Cleats</Text>
            <Text>Boots</Text>
            <Text>Sizes 14-20</Text>
            <Text>All Shoes</Text>
          </Box>
          <br />

          <Box>
            <Text fontWeight={"bold"}>Clothing</Text>
            <Text>Shirts & Tanks</Text>
            <Text>Hoodies & Sweatshirts</Text>
            <Text>Sweatpants & Joggers</Text>
            <Text>Coats & Vests</Text>
            <Text>Shorts & Swimwear</Text>
            <Text>Matching Sets </Text>
            <Text>Denim & Jeans </Text>
            <Text>2 for $40 Tees</Text>
            <Text> Socks & Underwear</Text>
            <Text> Fan Gear & Jerseys</Text>
            <Text> All Clothing</Text>
          </Box>
          <br />

          <Box>
            <Text fontWeight={"bold"}>Accessories</Text>
            <Text>Hats & Headbands</Text>
            <Text>Socks</Text>
            <Text>Bags & Backpacks</Text>
            <Text>Underwear</Text>
            <Text>Crocs Jibbitz </Text>
            <Text> Shoe Care</Text>
            <Text>Fitness Gear</Text>
            <Text>Face Masks</Text>
            <Text>Cold Weather Gear</Text>
            <Text> Water Bottles</Text>
            <Text> All Accessories</Text>
          </Box>
          <br />
        </div>

        <div className="secondDiv">
          <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>
            WOMEN'S SHOES, CLOTHING & ACCESSORIES <br />
            SHOP BY CATEGORY
          </h1>
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
            <GridItem onClick={runningFunc}>
              <Image src={img1} alt="" />
              <Text fontWeight={"bold"}>RUNNING SHOES</Text>
              <p style={{ textDecoration: "underline" }}>Shop Now →</p>
            </GridItem>

            <GridItem onClick={casualFunc}>
              <Image src={img2} alt="" />
              <Text fontWeight={"bold"}>CASUAL SHOES</Text>
              <p style={{ textDecoration: "underline" }}>Shop Now →</p>
            </GridItem>

            <GridItem onClick={basketballFunc}>
              <Image src={img3} alt="" />
              <Text fontWeight={"bold"}>BASKETBALL SHOES</Text>
              <p style={{ textDecoration: "underline" }}>Shop Now →</p>
            </GridItem>

            <GridItem>
              <Image src={img4} alt="" />
              <Text fontWeight={"bold"}>HOODIES AND SWEATSHIRT</Text>
              <p style={{ textDecoration: "underline" }}>Shop Now →</p>
            </GridItem>

            <GridItem>
              <Image src={img5} alt="" />
              <Text fontWeight={"bold"}>SWEATPANTS AND JOGGERS</Text>
              <p style={{ textDecoration: "underline" }}>Shop Now →</p>
            </GridItem>

            <GridItem>
              <Image src={img6} alt="" />
              <Text fontWeight={"bold"}>JACKETS AND OUTWEARS</Text>
              <p style={{ textDecoration: "underline" }}>Shop Now →</p>
            </GridItem>
          </Grid>

          <div style={{ width: "100%", margin: "auto", marginTop: "30px" }}>
            <h1 style={{ fontWeight: "bold", fontSize: "18px" }}>
              TRENDING OUTFITS
            </h1>
          </div>
          <div>
            <div
              className="scrollbar"
              style={{
                scrollbarwidth: "none",
                display: "flex",
                overflowX: "scroll",
                padding: "5px",
                width: "95%",
                margin: "auto",
                height: "460px",
              }}
            >
              <Bar />
            </div>
          </div>
          <hr style={{ width: "95%", margin: "auto" }} />

          <div
            className="Afterslideshow"
            style={{
              width: "100%",
              margin: "auto",
              display: "flex",
              padding: "30px",
              textAlign: "center",
              justifyContent: "center",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            <div id="firstdiv" className="Afterslideshow-divs">
              Nike Vapormax
            </div>
            <div className="Afterslideshow-divs">Jordan Retro</div>
            <div className="Afterslideshow-divs">Nike Air Max</div>
            <div className="Afterslideshow-divs">Nike Air Force 1</div>
            <div className="Afterslideshow-divs">adidas NMD</div>
            <div className="Afterslideshow-divs">Nike Air Max 97 </div>
            <div id="lastdiv" className="Afterslideshow-divs">
              LeBron
            </div>
          </div>

          <div className="home-4th-con-slider">
            <Swiper
              slidesPerView={8}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://upload.wikimedia.org/wikipedia/zh/0/01/Jumpman_logo.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/800px-Adidas_Logo.svg.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://media.hanglungmalls.com/custom-import/cmsUpload/faba36d1-176b-11ec-a0d0-4fb53cf05ab6.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.montclair.edu/responsive-media/cache/cdn/calendar/tl.png.3.2x.generic.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/On-cloud-logo-white-background.svg/135px-On-cloud-logo-white-background.svg.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://north.see2buy.com/wp-content/uploads/2021/06/the-north-face-eps-vector-logo.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://cdn.shopify.com/s/files/1/0554/6799/9438/collections/vans-logo.jpg?v=1616404441"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.causewaypoint.com.sg/images/319Converse%20New.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://prtimes.jp/i/12619/155/ogp/d12619-155-969385-0.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://upload.wikimedia.org/wikipedia/tr/b/b1/Puma_Logo.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://cdn.shopify.com/s/files/1/0059/1930/9897/collections/Champion_logo_black_300x.png?v=1642866032"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.queensmarketplace.com/wp-content/uploads/2019/03/Crocs.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <h1
            style={{ fontWeight: "bold", fontSize: "20px", marginTop: "30px" }}
          >
            TRENDING
          </h1>

          <div
            className="gridm1"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <div style={{ width: "49%" }}>
              <img className="img1" src={img13} alt="" />
              <p style={{ textDecoration: "underline" }}>Nike Air Max</p>
            </div>
            <div style={{ width: "49%" }}>
              <img className="img2" src={img14} alt="" />
              <p style={{ textDecoration: "underline" }}>classic</p>
            </div>
          </div>

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
                <Image src={img15} alt="" />
                <p style={{ textDecoration: "underline" }}>Graphic Tees</p>
              </GridItem>

              <GridItem>
                <Image src={img16} alt="" />
                <p style={{ textDecoration: "underline" }}>Comfy Kicks</p>
              </GridItem>

              <GridItem>
                <Image src={img17} alt="" />
                <p style={{ textDecoration: "underline" }}>
                  Sweatshirts and Joggers
                </p>
              </GridItem>
            </Grid>
          </div>

          <div
            style={{
              margin: "auto",
              width: "100%",
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
                <Text fontWeight={"bold"}>MEN’S ATHLEISURE WEAR</Text>
                <Text>
                  Whether you’re hitting the gym, hanging with your friends, or
                  watching the game, nothing beats men’s athleisure wear for
                  your on-the-go lifestyle. The days when stuffy suits and dress
                  shoes ruled your closet are long gone. These days, it’s all
                  about athleisure clothing for men. The must-haves like
                  athletic graphic tees and athletic shorts are complemented by
                  stylized versions of classics, like joggers, crewnecks, and
                  wind jackets. We can’t forget about the staple in everyone’s
                  wardrobe – hoodies. Finish Line has you covered with the
                  essential sweatshirts, Nike underwear and more from the brands
                  you gotta have. Shop Men’s athleisure and accessories from
                  Nike, adidas, Jordan, and more to ensure you’re always ahead
                  of the trends.
                </Text>
              </GridItem>
              <br />

              <GridItem textAlign={"justify"}>
                <Text fontWeight={"bold"}>MEN’S ATHLEISURE SHOES</Text>
                <Text>
                  Laid-back looks aren’t complete without staple footwear. Men’s
                  athleisure shoes round out every ‘fit you have, ensuring your
                  look is fresh from head to toe. From running-inspired models
                  to basketball sneakers to iconic Jordans, there’s a pair of
                  sneakers to finish off your athleisure vibe. Lace-up or
                  slip-on these standout sneakers and step out in style.
                </Text>
              </GridItem>
            </Grid>
          </div>
        </div>
      </div>

      <div className="home-6th-container">
        <Heading size="md">RECOMMENDED FOR YOU</Heading>
        <Text>({men.length} items)</Text>
        <Slider {...containe_six_slider}>
          {men.map((ele) => (
            <Link to={`/men/${ele.id}`} key={ele.id}>
              {" "}
              <Card
                image={ele.image1}
                color={ele.color}
                title={ele.title}
                price={ele.price}
              />
            </Link>
          ))}
        </Slider>
      </div>

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
            <Image src={img18} />
          </GridItem>

          <GridItem>
            <Image src={img19} />
          </GridItem>

          <GridItem>
            <Image src={img20} />
          </GridItem>
          <GridItem>
            <Image src={img21} />
          </GridItem>
        </Grid>
      </div>

      <Footer />
    </>
  );
}
