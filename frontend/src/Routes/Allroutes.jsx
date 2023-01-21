
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Accessories from '../Pages/Accessories'
import Boys from '../Pages/Boys'
import Brands from '../Pages/Brands'
import Clothing from '../Pages/Clothing'
import Favorites from '../Pages/Favorites'
import Girls from '../Pages/Girls'
import Home from '../Pages/Home'
import Men from '../Pages/Men'
import MenDetail from '../Pages/MenDetail'
import MenItem from '../Pages/MenItem'
import NewArrival from '../Pages/NewArrival'
import Register from '../Pages/Register'
import Releases from '../Pages/Releases'
import Sales from '../Pages/Sales'
import Signin from '../Pages/Signin'
import Status from '../Pages/Status'
import Women from '../Pages/Women'

export default function Allroutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/newarrivals' element={<NewArrival />} ></Route>
            <Route path='/men' element={<Men />} ></Route>
            <Route path='/women' element={<Women />} ></Route>
            <Route path='/boys' element={<Boys />} ></Route>
            <Route path='/girls' element={<Girls />} ></Route>
            <Route path='/clothing' element={<Clothing />} ></Route>
            <Route path='/accessories' element={<Accessories />} ></Route>
            <Route path='/sales' element={<Sales />} ></Route>
            <Route path='/brands' element={<Brands />} ></Route>
            <Route path='/releases' element={<Releases />} ></Route>
            <Route path='/signin' element={<Signin />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/status' element={<Status />}></Route>
            <Route path='/favorites' element={<Favorites />}></Route>
            <Route path='/men/:id' element={<MenDetail />}></Route>
            <Route path='/menitems' element={<MenItem/>}></Route>
            {/* <Route path='' element={}></Route> */}
        </Routes>
    )
}
