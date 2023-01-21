import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import './MenDetail.css'
import { BsStarFill } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import status from '../image/status.jpg'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

export default function MenDetail() {
    const [obj, setObj] = useState({})
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [sizeactive, setsizeActive] = useState(false);

    //this function for chekbox
    const [selectedValue, setSelectedValue] = React.useState("first");
    const handleChange = React.useCallback(
        (e) => {
            setSelectedValue(e.value);
        },
        [setSelectedValue]
    );

    //================================================================

    const handleClick = () => {
        setsizeActive(!sizeactive);
    };


    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        axios.get(`https://mirsat-vercel-database-eqatqtp9z-saikhmirsat.vercel.app/sportszone/${id}`)
            .then((res) => setObj(res.data))
    }, [id])
    console.log(obj)




    return (
        <div>
            <div className='men-detail-main-con'>
                <div className='men-detail-prod-box'>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide >
                            <img src={obj.image1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={obj.image2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={obj.image4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={obj.image5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={obj.image6} alt="" />
                        </SwiperSlide>

                    </Swiper >
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={obj.image1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={obj.image2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={obj.image4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={obj.image5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={obj.image6} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    <div className='men-detail-rating-div'>
                        <BsStarFill size='12px' />
                        <BsStarFill size='12px' />
                        <BsStarFill size='12px' />
                        <BsStarFill size='12px' />
                        <BsStarFill size='12px' />
                    </div>

                    <h1 className='men-detail-title'>{obj.title}</h1>
                    <p className='men-detail-price'>${obj.price}.00</p>
                    <div className='men-detail-info'>
                        Or 4 interest-free installments with <span>Klarna</span> or <span>afterpay</span><a href='' style={{ textDecoration: 'underline' }}>info</a>
                    </div>
                    <hr style={{ marginTop: '20px' }} />
                    <div className='men-detail-color'>
                        <div style={{ fontWeight: 'bold' }} >Color :</div>
                        <div id='men-color' style={{ backgroundColor: `${obj.color}` }}></div>
                    </div>
                    <div className='men-detail-size-div'>
                        <h1>Size</h1>
                        <button>Size Chart</button>
                    </div>
                    <div className='men-detail-size-number'>
                        <button onClick={handleClick} className={sizeactive ? "sizeactive" : "sizenotactive"}>M 7.5 / W 9.0</button>
                        <button>M 8.0 / W 9.5</button>
                        <button>M 8.5 / W 10.0</button>
                        <button>M 9.0 / W 10.5</button>
                        <button>M 9.5 / W 11.0</button>
                        <button>M 10.0 / W 11.5</button>
                        <button>M 10.5 / W 12.0</button>
                        <button>M 11.0 / W 12.5</button>
                        <button>M 11.5 / W 13.0</button>
                        <button>M 12.0 / W 13.5</button>
                        <button>M 13.0 / W 14.5</button>
                        <button>M 14.0 / W 15.5</button>
                    </div>

                    <hr style={{ marginTop: "40px", marginBottom: "30px" }} />
                    <div className='men-detail-shipto-address'>
                        <input type="radio" name="group1"
                            value="first"
                            checked={selectedValue === "first"}
                            label="First"
                            onChange={handleChange} />
                        <h2>Ship to an address</h2>
                    </div>
                    <p className='men-det-freeship'>FREE SHIPPING</p>

                    <div className='men-detail-shipto-address'>
                        <input type="radio" name="group1"
                            value="first"
                            checked={selectedValue === "first"}
                            label="First"
                            onChange={handleChange} />
                        <h2>Store Pickup:</h2><span style={{ fontSize: '14px', textDecoration: 'underline' }}>Select Location </span><BiMap />
                    </div>
                    <p className='men-det-freeship'>FREE PICKUP</p>

                    <button className='men-detail-add-to-cart'>ADD TO BAG</button>
                    <div className='men-detail-status-des'>
                        <div>
                            <img src={status} alt="" />
                        </div>
                        <div>
                            <span tabindex="0" class="StatusRewardInfo RB-body2">GET POINTS. GAIN ACCESS. BOOST YOUR STATUS.
                                <br />
                                Use your STATUS across our brand family, JD Sports and Finish Line.
                                <br />
                                <a href="/status" class="RB-link2">Join STATUS Now</a>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='men-detail-description-box'>
                <hr className='men-detail-des-summary-line' />
                <details>
                    <summary>
                        <Heading fontSize='18px' fontWeight='500'>Product Details</Heading>
                        <div><BsPlusLg /></div>
                    </summary>
                    <Text fontSize='md'>

                        <li>Silhouette inspired by the Air Jordan 4, 6, 11, 12, 13, 15, and 20</li>
                        <li>Laser-etched leather, nubuck and synthetic upper</li>
                        <li>Air-Unit cushioning for springy bounce and plenty of comfort</li>
                        <li>Rubber outsole for durability and traction</li>
                        <li>Mid-cut, lace-up construction</li>
                        <li>Padded tongue and collar</li>
                        <li>The Air Jordan Retro Dub Zero is imported.</li>

                        <Text>One of the most iconic hybrids of the Jordan Brand line, the Men's Air Jordan Retro Dub Zero Off-Court Shoes were originally released back in 2005. Now, it's back and better than ever, fracturing a commemorative insole.</Text>
                    </Text>
                </details>
                <hr className='men-detail-des-summary-line' />
                <details>
                    <summary>
                        <Heading fontSize='18px' fontWeight='500'>Product Details</Heading>
                        <div><BsPlusLg /></div>
                    </summary>
                    <Text fontSize='md'>

                        <li>Silhouette inspired by the Air Jordan 4, 6, 11, 12, 13, 15, and 20</li>
                        <li>Laser-etched leather, nubuck and synthetic upper</li>
                        <li>Air-Unit cushioning for springy bounce and plenty of comfort</li>
                        <li>Rubber outsole for durability and traction</li>
                        <li>Mid-cut, lace-up construction</li>
                        <li>Padded tongue and collar</li>
                        <li>The Air Jordan Retro Dub Zero is imported.</li>

                        <Text>One of the most iconic hybrids of the Jordan Brand line, the Men's Air Jordan Retro Dub Zero Off-Court Shoes were originally released back in 2005. Now, it's back and better than ever, fracturing a commemorative insole.</Text>
                    </Text>
                </details>
                <hr className='men-detail-des-summary-line' />
                <details>
                    <summary>
                        <Heading fontSize='18px' fontWeight='500'>Product Details</Heading>
                        <div><BsPlusLg /></div>
                    </summary>
                    <Text fontSize='md'>

                        <li>Silhouette inspired by the Air Jordan 4, 6, 11, 12, 13, 15, and 20</li>
                        <li>Laser-etched leather, nubuck and synthetic upper</li>
                        <li>Air-Unit cushioning for springy bounce and plenty of comfort</li>
                        <li>Rubber outsole for durability and traction</li>
                        <li>Mid-cut, lace-up construction</li>
                        <li>Padded tongue and collar</li>
                        <li>The Air Jordan Retro Dub Zero is imported.</li>

                        <Text>One of the most iconic hybrids of the Jordan Brand line, the Men's Air Jordan Retro Dub Zero Off-Court Shoes were originally released back in 2005. Now, it's back and better than ever, fracturing a commemorative insole.</Text>
                    </Text>
                </details>
                <hr className='men-detail-des-summary-line' />
                <details>
                    <summary>
                        <Heading fontSize='18px' fontWeight='500'>Product Details</Heading>
                        <div><BsPlusLg /></div>
                    </summary>
                    <Text fontSize='md'>

                        <li>Silhouette inspired by the Air Jordan 4, 6, 11, 12, 13, 15, and 20</li>
                        <li>Laser-etched leather, nubuck and synthetic upper</li>
                        <li>Air-Unit cushioning for springy bounce and plenty of comfort</li>
                        <li>Rubber outsole for durability and traction</li>
                        <li>Mid-cut, lace-up construction</li>
                        <li>Padded tongue and collar</li>
                        <li>The Air Jordan Retro Dub Zero is imported.</li>

                        <Text>One of the most iconic hybrids of the Jordan Brand line, the Men's Air Jordan Retro Dub Zero Off-Court Shoes were originally released back in 2005. Now, it's back and better than ever, fracturing a commemorative insole.</Text>
                    </Text>
                </details>
                <hr className='men-detail-des-summary-line' />

            </div>
        </div>
    )
}
