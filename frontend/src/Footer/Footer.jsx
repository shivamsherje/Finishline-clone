import React from 'react'
import './Footer.css'
import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import logo1 from "../Assets/statuslogo.svg";
import logo2 from "../Assets/app-icon.png";
import logo3 from "../Assets/insta.png";
import logo4 from "../Assets/snapchat.png";
import logo5 from "../Assets/youtube.png";
import logo6 from "../Assets/twitter.png";
import logo7 from "../Assets/facebook.png";

export default function Footer() {
    return (
        <>
            <div
                className="footer"
                style={{
                    display: "flex",
                    width: "90%",
                    margin: "auto",
                    fontSize: "12px",
                    justifyContent: "space-evenly",
                    gap: "20px",
                }}
            >
                {/* box 1 */}
                <div className="box1" style={{ padding: "5px" }}>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <img style={{ width: "50px" }} src={logo1} />
                        <Text fontWeight={"bold"} textAlign={"left"}>
                            GET POINTS. GAIN ACCESS. BOOST YOUR STATUS.
                        </Text>
                    </div>
                    <br />

                    <div style={{ textAlign: "left" }}>
                        <Text>
                            Use your STATUS across our brand family, JD Sports and Finish
                            Line.
                        </Text>
                        <br />
                        <Text>Join STATUS</Text>
                    </div>
                </div>

                {/* box 2 */}
                <div className="box1" style={{ padding: "4px" }}>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <img tyle={{ width: "50px" }} src={logo2} />
                        <Text fontWeight={"bold"} textAlign={"left"}>
                            SHOPPING, REWARDS, <br />
                            INSPIRATION & MORE
                        </Text>
                    </div>

                    <div style={{ textAlign: "left", marginTop: "8px" }}>
                        <Text>
                            Access it all with exclusive product releases, big ticket
                            giveaways, & app-only content.{" "}
                        </Text>
                        <br />
                        <Text>Get the app</Text>
                    </div>
                </div>

                {/* box 3 */}
                <div className="box1" style={{ padding: "5px", textAlign: "left" }}>
                    <div>
                        <Text fontWeight={"bold"}>GET TO KNOW US</Text>
                        <Text>Our Company</Text>
                        <Text> Our Brand Family</Text>
                        <Text> Youth Foundation</Text>
                        <Text> Careers </Text>
                        <Text> Blog</Text>
                    </div>
                </div>

                {/* box 4 */}
                <div className="box1" style={{ padding: "5px", textAlign: "left" }}>
                    <div>
                        <Text fontWeight={"bold"}> CUSTOMER CARE</Text>
                        <Text>Shipping Rates & Policies</Text>
                        <Text> Return Policies</Text>
                        <Text> Cancel an Order</Text>
                        <Text> Contact Us</Text>
                        <Text> COVID-19 Response</Text>
                        <Text> Website Accessibility Policy</Text>
                    </div>
                </div>

                {/* box 5 */}
                <div className="box1" style={{ padding: "5px", textAlign: "left" }}>
                    <div>
                        <Text fontWeight={"bold"}>GIFT CARDS</Text>
                        <Text>Buy a Gift Card</Text>
                        <Text> Check Your Balance</Text>
                        <br />
                        <Text fontWeight={"bold"}> GET ON THE LIST</Text>
                        <input
                            style={{ border: "1px solid gray", padding: "5px" }}
                            placeholder="Enter your Email"
                        />
                    </div>
                </div>
            </div>

            <br />
            <br />

            <div
                className="bottom"
                style={{
                    width: "80%",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div
                    className="socialmedia-names"
                    style={{ display: "flex", gap: "20px" }}
                >
                    <p>2023 Finish Line, Inc. All Rights Reserved.</p>
                    <p>Privacy Policy</p>
                    <p> Interest-Based Ads Policy</p>
                    <p> Terms of Use Site Map</p>
                </div>

                <div
                    className="socialmedia-logos"
                    style={{ display: "flex", gap: "10px" }}
                >
                    <img style={{ width: "30px", height: "30px" }} src={logo3} />
                    <img style={{ width: "30px", height: "30px" }} src={logo4} />
                    <img style={{ width: "30px", height: "30px" }} src={logo5} />
                    <img style={{ width: "30px", height: "30px" }} src={logo6} />
                    <img style={{ width: "30px", height: "30px" }} src={logo7} />
                </div>

            </div>
            <br />
            <br />

        </>
    )
}
