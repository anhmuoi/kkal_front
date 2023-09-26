import React from 'react'
import Title from '../Title/Title'
import img1 from "../../../../Assets/Images/img-partner-logo-01@3x.png"
import img2 from "../../../../Assets/Images/img-partner-logo-02@3x.png"
import img3 from "../../../../Assets/Images/img-partner-logo-03@3x.png"
import img4 from "../../../../Assets/Images/img-partner-logo-04@3x.png"
import img5 from "../../../../Assets/Images/img-partner-logo-05@3x.png"
import img6 from "../../../../Assets/Images/img-partner-logo-06@3x.png"
import img7 from "../../../../Assets/Images/img-partner-logo-07@3x.png"
import img8 from "../../../../Assets/Images/img-partner-logo-08@3x.png"
import img9 from "../../../../Assets/Images/img-partner-logo-09@3x.png"

import "./styles.scss"
import Image from 'next/image'
function Partner() {
  return (
    <div className='partner'>
        <div className="partner-container">
            <Title title='파트너십' subTit='Partner of Cuomusic' />
            <div className="list-partner">
                {data.map((item,index) => (
                    <div key={index} className="item">
                        <Image src={item.img} alt="" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Partner
const data = [
    {
        img: img1
    },
    {
        img: img2
    },
    {
        img: img3
    },
    {
        img: img4
    },
    {
        img: img5
    },
    {
        img: img6
    },
    {
        img: img7
    },
    {
        img: img8
    },
    {
        img: img9
    },
]