// import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { removeProducet } from "../Redux/action";
import { checkOut } from '../Redux/action'
import './Cart.css'





export default function Cart() {

    const cartvalue = useSelector((store) => store.cart.cart)
    console.log({ "cartvalue": cartvalue })

    const navigate = useNavigate()
    // const cartArr = useSelector((stor) => stor.cart.cart)

    const dispatch = useDispatch()

    const [bagArr, setBagArr] = useState(cartvalue)

    const totalCart = (arr) => {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i].price * arr[i].quantity
        }
        return sum
    }


    const Increment = (id) => {
        let ans = bagArr.map((ele, i) => {
            if (i === id) {
                ele.quantity++
            }
            return ele
        })

        setBagArr(ans)
    }

    const Decrement = (id) => {
        let ans = bagArr.map((ele, i) => {
            if (i === id && ele.quantity !== 0) {
                ele.quantity--
            }
            return ele
        })

        setBagArr(ans)
    }
    const RemoveProcuct = (id) => {
        let ans = bagArr.filter((ele) => {
            return ele.id !== id
        })
        setBagArr(ans)
        dispatch(removeProducet(id))
    }

    const CheckOut = () => {
        setBagArr([])
        dispatch(checkOut())
        localStorage.setItem('cartTotal', totalCart(bagArr))
        navigate('/checkout')
        alert("Please Complete Your Further Process!!")

    }

    return (
        <>

            <div>
                {/* // main container starts */}
                <div className="main-cart-container">


                    <div className="basket-container">
                        {/* <p className="basket-container-heading">Basket</p> */}

                        {/* basket-sub-div starts */}
                        <div style={{ overflowX: "auto" }} className="basket-sub-div">
                            <table>
                                <tr>
                                    <th>Item</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Remove</th>
                                </tr>

                                {cartvalue.map((ele, i) => (

                                    <tr className="table-tr">
                                        <td>
                                            <img className="item-img" alt="" src={ele.image1} />
                                        </td>
                                        <td>{ele.title}</td>
                                        <td>$ {ele.price}</td>
                                        <td className="cart-increasing-btn">
                                            <button className="inc-button" onClick={() => Decrement(i)}>-</button>
                                            <p>{ele.quantity}</p>
                                            <button className="inc-button" onClick={() => Increment(i)}>+</button>
                                        </td>
                                        <td>
                                            <button onClick={() => RemoveProcuct(ele.id)} className="delete-button">Delete</button>
                                        </td>
                                    </tr>
                                ))}

                            </table>
                        </div>
                        {/* basket-sub-div ends */}
                    </div>

                    {/* basket-container ends */}

                    {/* paymnet-container starts */}
                    <div className="paymnet-container">
                        <p className="heading-of-order">Order Summary</p>

                        <div className="Order-Summary-details">
                            <div className="Order-Summary-details-subdiv">
                                <p>Subtotal :</p>
                                <p> ${totalCart(bagArr)}</p>
                            </div>
                            <div className="Order-Summary-details-subdiv">
                                <p>TBD :</p>
                                <p>$</p>
                            </div>
                            <div className="Order-Summary-details-subdiv">
                                <p>Estimated Tax :</p>
                                <p>$ 0.00</p>
                            </div>

                            <div className="Order-Summary-details-subdiv">
                                <p>Total :</p>
                                <p> ${totalCart(bagArr)}</p>
                            </div>

                            <div className="discription1">
                                Or 4 interest-free installments of $40.00 with Klarna or
                                Afterpay.
                            </div>
                            <br />
                            <button onClick={CheckOut} className="checkout-button">
                                PROCEED TO CHECKOUT
                            </button>

                            <div className="paypal-div">
                                <img
                                    className="paypal-img"
                                    alt=""
                                    src="https://theintactone.com/wp-content/uploads/2019/04/paypal-logo.png"
                                />
                            </div>
                        </div>
                    </div>
                    {/* paymnet-container ends */}
                </div>
            </div>
        </>
    )
}
