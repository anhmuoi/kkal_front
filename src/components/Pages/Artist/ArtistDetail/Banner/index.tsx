import React from 'react'
import bg from "../../../../../Assets/Images/img-banner-artist-02@3x.png"
import socialImg1 from "../../../../../Assets/Images/ic-artist-social-01@3x.png"
import socialImg2 from "../../../../../Assets/Images/ic-artist-social-02@3x.png"
import socialImg3 from "../../../../../Assets/Images/ic-artist-social-03@3x.png"
import socialImg4 from "../../../../../Assets/Images/ic-artist-social-04@3x.png"

import "./styles.scss"
import Image from 'next/image'
import { pretendardBold } from '@/app/styles/fonts'
function Banner() {
  return (
    <div className='banner'>
        <Image src={bg} alt="" />
        <div className="content">
            <div className="singer">Park Jin Hee</div>
            <div className={`${pretendardBold.className} title`}>박진희 Park Jin Hee</div>
            <div className="detail">박진희는 따뜻한 이야기들을 적어낸 가사들과 차분하고 깊이있는 음색으로 <br />
            사람들에게 공감과 위로를 건넨다. 박진희만의 따뜻한 감성과 매력적이고 유니크한 <br />
            목소리는 많은 사람들의 오감을 만족시킬 것으로 기대된다.</div>
            <div className="publicDate">
                <span className="tit">데뷔</span>
                <span className='date'>2020년 9월 05일 ‘ID: PeaceB’</span>
            </div>
        </div>

        <div className="social">
            {socialData.map((item,index) => (
                <div key={index} className="item">
                    <a href={item.link}>
                        <Image src={item.img} alt="" />
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Banner

const socialData = [
    {
        img: socialImg1,
        link: ``
    },
    {
        img: socialImg2,
        link: ``
    },
    {
        img: socialImg3,
        link: ``
    },
    {
        img: socialImg4,
        link: ``
    },
]