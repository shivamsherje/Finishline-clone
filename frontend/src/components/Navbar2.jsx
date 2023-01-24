import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { MenDropdown } from './Dropdown'
import { NewArrivalDropdown } from './Dropdown'
import { Link } from 'react-router-dom'


export default function Navbar2() {
    const [DropdownNewarrival, setDropdownNewarrival] = useState(false)
    const [DropdownMen, setDropdownMen] = useState(false)
    const [DropdownWomen, setDropdownWomen] = useState(false)
    const [DropdownBoys, setDropdownBoys] = useState(false)
    const [DropdownGirls, setDropdownGirls] = useState(false)
    const [DropdownClothing, setDropdownClothing] = useState(false)
    const [DropdownAccessories, setDropdownAccessories] = useState(false)
    const [DropdownSale, setDropdownSales] = useState(false)
    const [DropdownBrands, setDropdownBrands] = useState(false)
    const [DropdownRelease, setDropdownRelease] = useState(false)

    return (
        <div className='navbar2'>
            <div className='navbar2-box'>
                <div
                    onMouseEnter={() => setDropdownNewarrival(true)}
                    onMouseLeave={() => setDropdownNewarrival(false)}
                > <Link to='/newarrivals' >NEW ARRIVALS</Link>
                    {DropdownNewarrival && <NewArrivalDropdown />}
                </div>
                <div
                    onMouseEnter={() => setDropdownMen(true)}
                    onMouseLeave={() => setDropdownMen(false)}
                > <Link to='/men'  >MEN</Link>
                    {DropdownMen && <MenDropdown />}
                </div>
                <div
                    onMouseEnter={() => setDropdownWomen(true)}
                    onMouseLeave={() => setDropdownWomen(false)}
                > <Link to='/women'  >WOMEN</Link>
                    {DropdownWomen && <MenDropdown />}
                </div>
                <div
                    onMouseEnter={() => setDropdownBoys(true)}
                    onMouseLeave={() => setDropdownBoys(false)}
                > <Link to='/boys'  >BOYS</Link>
                    {DropdownBoys && <MenDropdown />}
                </div>
                <div
                    onMouseEnter={() => setDropdownGirls(true)}
                    onMouseLeave={() => setDropdownGirls(false)}
                > <Link to='/girls'  >GIRLS</Link>
                    {DropdownGirls && <MenDropdown />}
                </div>
                <div
                    onMouseEnter={() => setDropdownClothing(true)}
                    onMouseLeave={() => setDropdownClothing(false)}
                > <Link to='/clothing'  >CLOTHING</Link>
                    {DropdownClothing && <MenDropdown />}
                </div>
                <div
                    onMouseEnter={() => setDropdownAccessories(true)}
                    onMouseLeave={() => setDropdownAccessories(false)}
                > <Link to='/accessories'  >ACCESSORIES</Link>
                    {DropdownAccessories && <MenDropdown />}
                </div>
                <div
                    onMouseEnter={() => setDropdownSales(true)}
                    onMouseLeave={() => setDropdownSales(false)}
                > <Link to='/sales'  >SALES</Link>
                    {DropdownSale && <MenDropdown />}
                </div>
                <div
                    onMouseEnter={() => setDropdownBrands(true)}
                    onMouseLeave={() => setDropdownBrands(false)}
                > <Link to='/brands'  >BRANDS</Link>
                    {DropdownBrands && <MenDropdown />}
                </div>
                <div
                    onMouseEnter={() => setDropdownRelease(true)}
                    onMouseLeave={() => setDropdownRelease(false)}
                > <Link to='/releases'>RELEASES</Link>
                    {DropdownRelease && <MenDropdown />}
                </div>
            </div>
        </div>
    )
}
