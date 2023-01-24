import React from 'react'
import './Profile.css'
import { Heading, Button, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import img1 from "../Assets/imgD.png";
import img2 from "../Assets/imgC.png";
import img3 from "../Assets/imgB.png";
import img4 from "../Assets/imgA.png";
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
// import { BsPersonCircle } from 'react-icons/bs';

export default function Profile() {
    const navigate = useNavigate()

    const logoutFunc = () => {
        localStorage.setItem("isAuth", false)
        alert("Are You sure to logout")
        navigate('/signin')
        window.location.reload()
    }

    const User = JSON.parse(localStorage.getItem("userLogin"))
    console.log(User)

    return (
        <div className="profile-container">
            <Heading className="profile-heading">PROFILE</Heading>
            <br />
            <br />



            <div className="my-details-container">
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

                    {/* GRID ITEM 1 */}
                    <GridItem className="grid-items-profile">
                        <br />
                        <p className="HEADING-OF-EVERY-GRID">MY DETAILS</p>
                        <br />
                        <img
                            src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
                            alt=""
                        />
                        {/* <BsPersonCircle /> */}
                        <br />
                        <Heading size="md">
                            HELLO  {User.firstname.toUpperCase()}{" "}
                            {User.lastname.toUpperCase()}
                        </Heading>
                        <br />
                        <Text className="dob">Date of birth: {User.dob}</Text>
                        <br />
                    </GridItem>


                    {/* GRID ITEM 2 */}
                    <GridItem className="grid-items-profile">
                        <br />
                        <p className="HEADING-OF-EVERY-GRID">EMAIL AND LOGOUT</p>
                        <br />
                        <img
                            src="https://www.freepnglogos.com/uploads/email-png/email-consulting-support-network-design-morovis-6.png"
                            alt=""
                        />
                        <br />
                        <p className="my-details-name">YOUR REGISTERED EMAIL</p>
                        <br />
                        <Text className="register-email">{User.email}</Text>
                        <Button bg="#5271FF" onClick={logoutFunc}>
                            LOGOUT
                        </Button>
                        <br />
                        <br />
                    </GridItem>

                    {/* GRID ITEM 3 */}
                    <GridItem className="grid-items-profile">
                        <br />
                        <p className="HEADING-OF-EVERY-GRID">EDIT PROFILE</p>

                        <br />
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/9234/9234179.png"
                            alt=""
                        />
                        <br />
                        <p className="my-details-name">
                            Edit your registration,
                            <br /> shopping and payment details
                        </p>
                        <br />
                        <br />
                    </GridItem>

                    {/* GRID ITEM 4 */}
                    <GridItem className="grid-items-profile">
                        <br />
                        <p className="HEADING-OF-EVERY-GRID">MY SAVED ITEMS</p>

                        <br />
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/9176/9176063.png"
                            alt=""
                        />
                        <br />
                        <p className="my-details-name">
                            See your saved serches and, <br />
                            discover whats new for you !
                        </p>
                        <br />
                        <br />
                    </GridItem>

                    {/* GRID ITEM 5 */}
                    <GridItem className="grid-items-profile">
                        <br />
                        <p className="HEADING-OF-EVERY-GRID">MEMBER</p>

                        <br />
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/9362/9362498.png"
                            alt=""
                        />
                        <br />
                        <p className="my-details-name">
                            You've been with us since 2023 ! <br />
                            You are the Sliver member of Sportsline !
                        </p>
                        <br />
                        <br />
                    </GridItem>


                    {/* GRID ITEM 6 */}
                    <GridItem className="grid-items-profile">
                        <br />
                        <p className="HEADING-OF-EVERY-GRID">MY SIZE</p>
                        <br />
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/5703/5703610.png"
                            alt=""
                        />
                        <br />
                        <p className="my-details-name">
                            Save your size and your <br />
                            Friends size to find perfect item !
                        </p>
                        <br />
                        <br />
                    </GridItem>


                    {/* GRID ITEM 7 */}
                    <GridItem className="img-grid-container-profile">
                        <img
                            className="img-inside-grid-container-profile"
                            src="https://www.highsnobiety.com/static-assets/thumbor/6bt5wu4tV6n7qXhgoIwwujLXEj0=/1600x2000/www.highsnobiety.com/static-assets/wp-content/uploads/2020/04/08154920/best-running-shoes-for-men-guide-new-05.jpg"
                            alt=""
                        />
                    </GridItem>
                    <GridItem className="img-grid-container-profile">
                        <img
                            className="img-inside-grid-container-profile"
                            src="https://www.highsnobiety.com/static-assets/thumbor/SKYnJiRTTY3ydBGnuxaxePb7NoE=/1600x2000/www.highsnobiety.com/static-assets/wp-content/uploads/2020/04/08154900/best-running-shoes-for-men-guide-new-04.jpg"
                            alt=""
                        />
                    </GridItem>

                    {/* GRID ITEM 8 */}
                    <GridItem className="img-grid-container-profile">
                        <img
                            className="img-inside-grid-container-profile"
                            src="https://images.bestsellerclothing.in/data/JJ/5-Aug-2022/255506407_g0.jpg?width=488&height=650&mode=fill&fill=blur&format=auto"
                            alt=""
                        />
                    </GridItem>
                    <GridItem className="img-grid-container-profile">
                        <img
                            className="img-inside-grid-container-profile"
                            src="https://images.bestsellerclothing.in/data/JJ/aug-30-2022/186543901_g0.jpg?width=488&height=650&mode=fill&fill=blur&format=auto"
                            alt=""
                        />
                    </GridItem>

                </Grid>
            </div>

            <br />
            <br />
            <br />

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
                        <Image src={img1} />
                    </GridItem>
                    <GridItem>
                        <Image src={img2} />
                    </GridItem>
                    <GridItem>
                        <Image src={img3} />
                    </GridItem>
                    <GridItem>
                        <Image src={img4} />
                    </GridItem>
                </Grid>
            </div>

            <Footer />
        </div>
    )
}
