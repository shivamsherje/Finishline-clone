import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function MenItem() {
    const [data, setData] = useState([])

    console.log(data)
    const GetData = () => {
        axios.get(`https://mirsat-vercel-database-eqatqtp9z-saikhmirsat.vercel.app/sportszone`)
            .then((res) => setData(res.data))
    }
    useEffect(() => {
        GetData()
    }, [])

    return (
        <div>
            {
                data.map((ele) => <Link to={`/men/${ele.id}`} key={ele.id}>
                    <img src={ele.image1} alt="" />
                    <h5>{ele.title}</h5>
                    <p>{ele.type}</p>
                    <h5> Price: ${ele.price}.00</h5>
                    <p> Size: {ele.size[0]} , {ele.size[1]} , {ele.size[2]} , {ele.size[3]} , {ele.size[4]} , {ele.size[5]} , {ele.size[6]} , {ele.size[7]} , {ele.size[8]} , {ele.size[9]} , {ele.size[10]} , {ele.size[11]}   </p>

                </Link>)
            }
        </div>
    )
}
