import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios'
// import img1 from "../Assets/scb1.jpeg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ban1 from "../Assets/homepage2.jpg";
import ban2 from "../Assets/homepage3.jpg";
import ban3 from "../Assets/homepage4.jpg";
import ban4 from "../Assets/homepage5.jpg";

import { Grid, GridItem, Image, Text, Heading } from "@chakra-ui/react";

import img1 from "../Assets/img1.jfif";
import img2 from "../Assets/img2.jfif";
import img3 from "../Assets/img3.webp";
import img4 from "../Assets/img4.webp";
import img5 from "../Assets/img5.jfif";
import img6 from "../Assets/img6.jfif";
import img7 from "../Assets/img7.jfif";
import img8 from "../Assets/img8.jfif";

import img9 from "../Assets/img9.jfif";
import img10 from "../Assets/img10.webp";
import img11 from "../Assets/img11.webp";

import Boot from "../Assets/boot.jpg";

import img12 from "../Assets/img12.jfif";
import img13 from "../Assets/img13.jfif";
import img14 from "../Assets/img14.jfif";
import img15 from "../Assets/img15.jfif";

import hats from "../Assets/img16.jfif";

import img16 from "../Assets/img17.jfif";
import img17 from "../Assets/img18.jfif"
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Card from '../Sliders/Card';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";


export default function Home() {
    const [data, setData] = useState([])

    const GetData = () => {
        axios.get(`https://shivam-vercel-db-eh2q.vercel.app/sportsline`)
            .then((res) => setData(res.data))
    }
    useEffect(() => {
        GetData()
    }, [])

    const resultArr = data.filter((ele) => {
        return ele.brand == 'nike'
    })

    const newArrival = data.filter((ele) => {
        return ele.brand == 'fila'
    })
    const men = data.filter((ele) => {
        return ele.for_whom == 'men'
    })

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows: true,
    };

    const homeContainer7 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };


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
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='Home-main-container'>
            <div className='home-first-img-container'>
                <img src="https://jdsports.a.bigcontent.io/v1/static/JD_FNL_011723_Jordan_Flush_Email_Banner_Desktop_1213x300" alt='' />
            </div>
            <div className='home-slider-1st-banner' >
                <Slider {...settings} >
                    <div className='home-slider-1st-banner-img-con'>
                        <img src={ban1} alt="" />
                    </div>
                    <div>
                        <img src={ban2} alt="" />
                    </div>
                    <div>
                        <img src={ban4} alt="" />
                    </div>

                </Slider>
            </div>
            <div className="home-second-con">
                <Heading fontSize='lg' className='home-second-con-mobile'>TOP CATAGORIES</Heading>
                <Link >Men's Shoes</Link>
                <Link >Women's Shoes</Link>
                <Link >Boys' Shoes</Link>
                <Link >Girls' Shoes</Link>
                <Link >Men's Clothing</Link>
                <Link >Women's Clothing</Link>
                <Link >Sale</Link>
            </div>
            <div className='home-third-container'>
                <Text fontWeight={"bold"} fontSize={"16px"} marginBottom='5px'>
                    SHOP THE LATEST & GREATEST STYLES
                </Text>
                <Grid
                    width={"100%"}
                    templateColumns={{
                        base: "repeat(2, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                        xl: "repeat(4, 1fr)",
                    }}
                    gap={6}
                >
                    <GridItem>
                        <Image src={img1} />
                        <Text fontSize='14px' className='home-third-con-text'>Jordan</Text>
                    </GridItem>
                    <GridItem>
                        <Image src={img2} />
                        <Text fontSize='14px' className='home-third-con-text'>Nick Air Max</Text>
                    </GridItem>
                    <GridItem>
                        <Image src={img3} />
                        <Text fontSize='14px' className='home-third-con-text'>Nick Air Force 1</Text>
                    </GridItem>
                    <GridItem>
                        <Image src={img4} />
                        <Text fontSize='14px' className='home-third-con-text'>New Balance</Text>
                    </GridItem>
                    <GridItem>
                        <Image src={img5} />
                        <Text fontSize='14px' className='home-third-con-text'>Boots</Text>
                    </GridItem>
                    <GridItem>
                        <Image src={img6} />
                        <Text fontSize='14px' className='home-third-con-text'>Matching Sets</Text>
                    </GridItem>
                    <GridItem>
                        <Image src={img7} />
                        <Text fontSize='14px' className='home-third-con-text'>Best Sellers</Text>
                    </GridItem>
                    <GridItem>
                        <Image src={img8} />
                        <Text fontSize='14px' className='home-third-con-text'>Outerwear up to 40% off</Text>
                    </GridItem>
                </Grid>
            </div>
            <div className='home-4th-con-slider'>
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://upload.wikimedia.org/wikipedia/zh/0/01/Jumpman_logo.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/800px-Adidas_Logo.svg.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://media.hanglungmalls.com/custom-import/cmsUpload/faba36d1-176b-11ec-a0d0-4fb53cf05ab6.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://www.montclair.edu/responsive-media/cache/cdn/calendar/tl.png.3.2x.generic.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/On-cloud-logo-white-background.svg/135px-On-cloud-logo-white-background.svg.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://north.see2buy.com/wp-content/uploads/2021/06/the-north-face-eps-vector-logo.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.shopify.com/s/files/1/0554/6799/9438/collections/vans-logo.jpg?v=1616404441" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://www.causewaypoint.com.sg/images/319Converse%20New.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://prtimes.jp/i/12619/155/ogp/d12619-155-969385-0.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://upload.wikimedia.org/wikipedia/tr/b/b1/Puma_Logo.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.shopify.com/s/files/1/0059/1930/9897/collections/Champion_logo_black_300x.png?v=1642866032" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://www.queensmarketplace.com/wp-content/uploads/2019/03/Crocs.jpg" alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className='home-5th-container'>
                <Grid
                    width={"100%"}
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(3, 1fr)",
                        lg: "repeat(3, 1fr)",
                        xl: "repeat(3, 1fr)",
                    }}
                    gap={4}
                >
                    <GridItem>
                        <Image src={img11} />
                        <Text className='home-5th-con-text'>
                            Most Favorited Styles
                        </Text>
                    </GridItem>

                    <GridItem>
                        <Image src={img10} />
                        <Text className='home-5th-con-text'>
                            Top Trending
                        </Text>
                    </GridItem>

                    <GridItem>
                        <Image src={img9} />
                        <Text className='home-5th-con-text'>
                            Recent Releases
                        </Text>
                    </GridItem>
                </Grid>
            </div>

            <div className='home-6th-container'>
                <Heading size='md'>RECOMMENDED FOR YOU</Heading>
                <Text>({resultArr.length} items)</Text>
                <Slider {...containe_six_slider}>
                    {
                        resultArr.map((ele) => <Link to={`/men/${ele.id}`} key={ele.id}><Card image={ele.image1}
                            color={ele.color}
                            title={ele.title}
                            price={ele.price} />
                        </Link>)
                    }
                </Slider>

            </div>
            <div className='home-7nth-container'>
                <Slider {...homeContainer7}>
                    <div>
                        <img src="https://content.stylitics.com/images/collage/782482cfa63b3b69412f274bb1e07badeb6742c7a6f78f?png=true&background=f2f2f2" alt="" />
                        <Link to='/' style={{ textDecoration: 'underline' }}>View details</Link>
                    </div>
                    <div>
                        <img src="https://content.stylitics.com/images/collage/782482cfa6383bc92df7e55036edc74a1527ae8abfabbe?png=true&background=f2f2f2" alt="" />
                        <Link to='/' style={{ textDecoration: 'underline' }}>View details</Link>
                    </div>
                    <div>
                        <img src="https://content.stylitics.com/images/collage/782482cca13c3ce07df55dcea0791ac482be387c7fde03?png=true&background=f2f2f2" alt="" />
                        <Link to='/' style={{ textDecoration: 'underline' }}>View details</Link>
                    </div>
                    <div>
                        <img src="https://content.stylitics.com/images/collage/782482ccae3a3c431f8eac62952d1b0c3d62999a61903f?png=true&background=f2f2f2" alt="" />
                        <Link to='/' style={{ textDecoration: 'underline' }}>View details</Link>
                    </div>
                    <div>
                        <img src="https://content.stylitics.com/images/collage/782482cca23a381b8417e37979d5695bb47b536ffd74a3?png=true&background=f2f2f2" alt="" />
                        <Link to='/' style={{ textDecoration: 'underline' }}>View details</Link>
                    </div>
                    <div>
                        <img src="https://content.stylitics.com/images/collage/782482cfa63f3cc32af3d9547b8135352ecf6c5724e241?png=true&background=f2f2f2" alt="" />
                        <Link to='/' style={{ textDecoration: 'underline' }}>View details</Link>
                    </div>
                    <div>
                        <img src="https://content.stylitics.com/images/collage/782482cca53e3b05ee9ffded89ada73b45072255e0cec0?png=true&background=f2f2f2" alt="" />
                        <Link to='/' style={{ textDecoration: 'underline' }}>View details</Link>
                    </div>
                    <div>
                        <img src="https://content.stylitics.com/images/collage/782482cca2383e91c85ed1104b2da5672ff89ac176d1c5?png=true&background=f2f2f2" alt="" />
                        <Link to='/' style={{ textDecoration: 'underline' }}>View details</Link>
                    </div>
                </Slider>
            </div>
            <div className='home-8th-container'>
                <a href="">
                    <Text fontSize='18px' fontWeight='bold'>
                        FEATURED COLLECTIONS
                    </Text>
                    <img style={{ width: "100%", marginTop: "20px" }} src={Boot} />
                </a>
            </div>
            <div className='home-9th-container'>
                <Grid
                    width={"100%"}
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(2, 1fr)",
                        xl: "repeat(2, 1fr)",
                    }}
                    gap={6}
                >
                    <GridItem>
                        <Image src={img12} />
                        <Text textAlign='left' textDecoration={"underline"} fontSize={"18px"}>
                            Most Favorited Styles
                        </Text>
                    </GridItem>

                    <GridItem>
                        <Image src={img13} />
                        <Text textAlign='left' textDecoration={"underline"} fontSize={"18px"}>
                            Top Trending
                        </Text>
                    </GridItem>

                    <GridItem>
                        <Image src={img14} />
                        <Text textAlign='left' textDecoration={"underline"} fontSize={"18px"}>
                            Recent Releases
                        </Text>
                    </GridItem>

                    <GridItem>
                        <Image src={img15} />
                        <Text textAlign='left' textDecoration={"underline"} fontSize={"18px"}>
                            Recent Releases
                        </Text>
                    </GridItem>
                </Grid>
            </div>
            <div className='home-10th-container'>
                <a href="">
                    <img src={hats} />
                </a>
            </div>
            <div className='home-6th-container'>
                <Heading size='md'>NEW ARRIVALS</Heading>
                <Text>({newArrival.length} items)</Text>
                <Slider {...containe_six_slider}>
                    {
                        newArrival.map((ele) => <Link to={`/men/${ele.id}`} key={ele.id}> <Card image={ele.image1}
                            color={ele.color}
                            title={ele.title}
                            price={ele.price} />
                        </Link>)
                    }
                </Slider>
            </div>
            <div className='home-6th-container'>
                <Heading size='md'>RECOMMENDED FOR YOU</Heading>
                <Text>({men.length} items)</Text>
                <Slider {...containe_six_slider}>
                    {
                        men.map((ele) => <Link to={`/men/${ele.id}`} key={ele.id}> <Card image={ele.image1}
                            color={ele.color}
                            title={ele.title}
                            price={ele.price} />
                        </Link>)
                    }
                </Slider>

            </div>
            <div className='home-13th-container'>
                <img src={img16} />
                <img src={img17} />
            </div>
            <Footer />
        </div>

    )
}
