import React from 'react'
import './Checkout.css'

export default function Checkout() {
    let subtotal = localStorage.getItem('cartTotal')
    console.log(subtotal)

    const ProceedPay = () => {
        localStorage.removeItem('cartTotal')
        alert("Order Successful!!")
    }

    return (
        <div>
            <div className="main-container-of-checkout">

                {/* shipping-and-cart-details starts */}
                <div className="shipping-and-cart-details">
                    <p className="heading-of-order"> Shipping Address</p>
                    <div className="shipping-container">
                        <p>Name</p>
                        <input placeholder="Full Name" type="text" />
                        <p>Phone Number</p>
                        <input placeholder="+91" type="text" />
                        <p>Country</p>
                        <input placeholder="Country/Region" type="text" />
                        <p>Address</p>
                        <input placeholder="Your Address" type="text" />
                        <p>ZIP Code</p>
                        <input placeholder="Pin Code" type="text" />
                        <br />
                        <div className="checkbox-div">
                            <input className="cart-checkbox" type="radio" />
                            <p>Save this details for next shipment.</p>
                        </div>
                    </div>
                    <br />


                    <p className="heading-of-order">Payment Details</p>
                    <div className="shipping-container">
                        <p>Debit / Credit Card</p>
                        <div style={{ width: "100%" }}>
                            <img
                                style={{ width: "100%" }}
                                alt=""
                                src="https://www.techtonics.in/image/catalog/Payment%20Modes.JPG"
                            />
                        </div>
                        <p>Name on Card</p>
                        <input placeholder="Name" type="text" />
                        <p>Debit Credit Card Number</p>
                        <input placeholder="1234-5678-9101-1121" type="text" />
                        <p>Security Code</p>
                        <input placeholder="CVV" type="text" />
                        <p>Billing Zip code</p>
                        <input placeholder=" Zip code" type="text" />
                        <br />
                        <div className="checkbox-div">
                            <input className="cart-checkbox" type="radio" />
                            <p>Remember this card for future use.</p>
                        </div>
                        <div className="checkbox-div">
                            <input className="cart-checkbox" type="radio" />
                            <p>COD</p>
                        </div>
                        <button className="payment-button" onClick={ProceedPay}>PROCEED TO PAY</button>
                    </div>
                    <br />


                </div>
                {/* shipping-and-cart-details end */}


                {/* Order-Summary-details start */}
                <div className="Order-Summary-details">
                    <p className="heading-of-order">Order Summary</p>

                    <div className="Order-Summary-details-subdiv">
                        <p>Subtotal :</p>
                        <p>${subtotal}</p>
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
                        <p>${subtotal}</p>
                    </div>
                    <hr />
                </div>
                {/* Order-Summary-details end */}

            </div>

        </div>
    )
}
