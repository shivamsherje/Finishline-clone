import React from 'react'
import './Card.css'
import { AiFillStar } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';

export default function Card({ image, color, title, price }) {
    return (
        <div className='card-main-con'>
            <a href="">
                <img src={image} alt="" />
                <div><BsHeart /></div>
                <div className='card-color-main-div'> <p>color </p><div className='card-div-color' style={{ backgroundColor: `${color}` }}></div></div>
                <h1>{title}</h1>
                <p>${price}.00</p>
                <div className='card-star-container'><AiFillStar color='grey' /><AiFillStar color='grey' /><AiFillStar color='grey' /><AiFillStar color='grey' /><AiFillStar color='grey' /></div>
            </a>
        </div>
    )
}
