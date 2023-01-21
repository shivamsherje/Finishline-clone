import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import "./Newarrivals.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";


import img17 from "../Assets/imgD.png";
import img18 from "../Assets/imgC.png";
import img19 from "../Assets/imgB.png";
import img20 from "../Assets/imgA.png";





export default function NewArrival() {

  const [data, setData] = useState([]);
  const ShoeData = () => {
    axios
      .get(
        `https://mirsat-vercel-database-eqatqtp9z-saikhmirsat.vercel.app/sportszone`
      )
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    ShoeData();
  }, []);

  return (
    <div>
      <div className="Newarrivals-main-container">

        {/* categories container start  */}
        <div className="categories-container">

          {/* subcategories-container 1 */}
          <div className="subcategories-containers">
            <p>Gender</p>
            <div className="categories-container-name-checkbox-div">
              <label> Men</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Women</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Boys</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Girls</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
          </div>
          <br />
          <br />



          {/* subcategories-container 2 */}
          <div className="subcategories-containers">
            <p>Kids' Shoes</p>

            <div className="categories-container-name-checkbox-div">
              <label>Big Kids (3.5-7)</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label>Little Kids (10.5-3)</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Toddler (2-10)</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label>Infant (0-4)</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
          </div>
          <br />
          <br />



          {/* subcategories-container 3 */}

          <div className="subcategories-containers">
            <p>Kids' Clothing</p>

            <div className="categories-container-name-checkbox-div">
              <label> Big Kids' (XS-XL)</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Little Kids' (4-7)</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Toddler (2T-4T)</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Infant (0-24M)</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
          </div>
          <br />
          <br />



          {/* subcategories-container 4 */}
          <div className="subcategories-containers">
            <p>Category</p>
            <div className="categories-container-name-checkbox-div">
              <label> Shoes</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Clothing</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Accessories</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Girls</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
          </div>
          <br />
          <br />



          {/* logos container  START*/}
          <div className="categories-logos-container">
            <p>Brands</p>
            <img src="" alt="" />
          </div>
          {/* logos container END */}
          <br />
          <br />



          {/* size-container-in-categories starts */}
          <div className="size-container-in-categories">
            <h1 className="size-title">Size</h1>
            <Grid
              templateColumns={{
                base: "repeat(3, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
                xl: "repeat(4, 1fr)",
              }}
              gap={1}
            >
              <GridItem className="grid-items-size-container">1</GridItem>
              <GridItem className="grid-items-size-container">1,5</GridItem>
              <GridItem className="grid-items-size-container">2</GridItem>
              <GridItem className="grid-items-size-container">2.5</GridItem>
              <GridItem className="grid-items-size-container">3</GridItem>
              <GridItem className="grid-items-size-container">3.5</GridItem>
              <GridItem className="grid-items-size-container">4</GridItem>
              <GridItem className="grid-items-size-container">4.5</GridItem>
              <GridItem className="grid-items-size-container">5</GridItem>
              <GridItem className="grid-items-size-container">5.5</GridItem>
              <GridItem className="grid-items-size-container">6</GridItem>
              <GridItem className="grid-items-size-container">6.5</GridItem>
              <GridItem className="grid-items-size-container">7</GridItem>
              <GridItem className="grid-items-size-container">7.5</GridItem>
              <GridItem className="grid-items-size-container">8</GridItem>
              <GridItem className="grid-items-size-container">8.5</GridItem>
              <GridItem className="grid-items-size-container">9</GridItem>
              <GridItem className="grid-items-size-container">9.5</GridItem>
              <GridItem className="grid-items-size-container">10</GridItem>
              <GridItem className="grid-items-size-container">10.5</GridItem>
              <GridItem className="grid-items-size-container">11</GridItem>
              <GridItem className="grid-items-size-container">11.5</GridItem>
              <GridItem className="grid-items-size-container">12</GridItem>
              <GridItem className="grid-items-size-container">12.5</GridItem>
              <GridItem className="grid-items-size-container">13</GridItem>
              <GridItem className="grid-items-size-container">13.5</GridItem>
              <GridItem className="grid-items-size-container">14</GridItem>
              <GridItem className="grid-items-size-container">15</GridItem>
              <GridItem className="grid-items-size-container">16</GridItem>
              <GridItem className="grid-items-size-container">XXS</GridItem>
              <GridItem className="grid-items-size-container">XS</GridItem>
              <GridItem className="grid-items-size-container">S</GridItem>
              <GridItem className="grid-items-size-container">M</GridItem>
              <GridItem className="grid-items-size-container">L</GridItem>
              <GridItem className="grid-items-size-container">XL</GridItem>
              <GridItem className="grid-items-size-container">XXL</GridItem>
              <GridItem className="grid-items-size-container">3XL</GridItem>
              <GridItem className="grid-items-size-container">1X</GridItem>
              <GridItem className="grid-items-size-container">2X</GridItem>
              <GridItem className="grid-items-size-container">3X</GridItem>
              <GridItem className="grid-items-size-container">0-6M</GridItem>
              <GridItem className="grid-items-size-container">3M</GridItem>
              <GridItem className="grid-items-size-container">6M</GridItem>
              <GridItem className="grid-items-size-container">9M</GridItem>
              <GridItem className="grid-items-size-container">12M</GridItem>
              <GridItem className="grid-items-size-container">18M</GridItem>
              <GridItem className="grid-items-size-container">24M</GridItem>
              <GridItem className="grid-items-size-container">2T</GridItem>
              <GridItem className="grid-items-size-container">3T</GridItem>
              <GridItem className="grid-items-size-container">4T</GridItem>
              <GridItem className="grid-items-size-container">6X</GridItem>
              <GridItem className="grid-items-size-container">S/M</GridItem>
              <GridItem className="grid-items-size-container">L/LX</GridItem>
            </Grid>
          </div>
          {/* size-container-in-categories ends */}
          <br />
          <br />



          {/* subcategories-container 5 */}
          <div className="subcategories-containers">
            <p>Price</p>

            <div className="categories-container-name-checkbox-div">
              <label>Under $50</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> $50-$100</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> $100-$150</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> $150-$200</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>

            <div className="categories-container-name-checkbox-div">
              <label> $200-$250</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
          </div>
          <br />
          <br />


          {/* subcategories-container 6 */}
          <div className="subcategories-containers">
            <p>Activity</p>
            <div className="categories-container-name-checkbox-div">
              <label> Casual</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Running</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Basketball</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Soccer</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Hiking</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Tennis</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Baseball</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Training</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
          </div>
          <br />
          <br />


          {/* color container starts */}
          <div className="color-container">
            <h1>Color</h1>
            <div className="color-container-sub-container">
              <div
                style={{ backgroundColor: "black" }}
                className="color-div"
              ></div>
              <p> Black</p>
            </div>

            <div className="color-container-sub-container">
              <div className="color-div"></div>
              <p> White</p>
            </div>

            <div className="color-container-sub-container">
              <div
                style={{ backgroundColor: "blue" }}
                className="color-div"
              ></div>
              <p> Blue</p>
            </div>

            <div className="color-container-sub-container">
              <div
                style={{ backgroundColor: "gray" }}
                className="color-div"
              ></div>
              <p> Gray</p>
            </div>

            <div className="color-container-sub-container">
              <div style={{ backgroundColor: "red" }}
                className="color-div"></div>
              <p> Red</p>
            </div>

            <div className="color-container-sub-container">
              <div
                style={{ backgroundColor: "pink" }}
                className="color-div"
              ></div>
              <p> Pink</p>
            </div>

            <div className="color-container-sub-container">
              <div
                style={{ backgroundColor: "purple" }}
                className="color-div"
              ></div>
              <p> Purple</p>
            </div>

            <div className="color-container-sub-container">
              <div
                style={{ backgroundColor: "green" }}
                className="color-div"
              ></div>
              <p> Green</p>
            </div>

            <div className="color-container-sub-container">
              <div
                style={{ backgroundColor: "yellow" }}
                className="color-div"
              ></div>
              <p> Yellow</p>
            </div>

            <div className="color-container-sub-container">
              <div
                style={{ backgroundColor: "brown" }}
                className="color-div"
              ></div>
              <p> Brown</p>
            </div>

            <div className="color-container-sub-container">
              <div
                style={{ backgroundColor: "orange" }}
                className="color-div"
              ></div>
              <p> Orange</p>
            </div>
          </div>
          {/* color container ends */}
          <br />
          <br />



          {/* subcategories-container 7 */}
          <div className="subcategories-containers">
            <p>Collection</p>
            <div className="categories-container-name-checkbox-div">
              <label>Jordan Retro</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label>Jordan Retro 1</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Nike Air Force 1</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Nike Dunk</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Hiking</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Nike Air Max</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Baseball</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Nike Air Max 90</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Nike Huarache</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Nike Tech Fleece</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> adidas Boost</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> adidas UltraBOOST</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> adidas NMD</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> adidas Originals</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> adidas Stan Smith</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> adidas Superstars</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Converse Chuck Taylor</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Reebok Classics</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Puma Suede</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> New Balance Classics</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Nike Sportswear</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="categories-container-name-checkbox-div">
              <label> Nike Club Fleece</label> <br />
              <input className="checkbox" type="checkbox" />
            </div>
          </div>
          <br />
          <br />
        </div>
        {/* categories container end  */}



        {/* Grid-container-starts */}
        <div className="Grid-container">
          <p className="grid-container-heading">NEW ARRIVALS</p>
          <Grid
            width={"95%"}
            margin="auto"
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            {data.map((item) => (
              <GridItem className="items-in-grid" key={item.id}>
                <Link to={`/men/${item.id}`}>
                  <img src={item.image1} alt="" />
                  <h5 className="item-title">{item.title}</h5>
                  <p>{item.type}</p>
                  <p>{item.color}</p>
                  <h5> Price:${item.price}.00</h5>
                </Link>
              </GridItem>
            ))}
          </Grid>
        </div>
        {/* Grid-container-end */}

      </div>
      {/* Newarrivals-main-container End */}
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
          <Image src={img17} />
        </GridItem>

        <GridItem>
          <Image src={img18} />
        </GridItem>

        <GridItem>
          <Image src={img19} />
        </GridItem>
        <GridItem>
          <Image src={img20} />
        </GridItem>
      </Grid>
      <Footer />
    </div >
  )
}
