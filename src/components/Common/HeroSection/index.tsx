import React from 'react'

import "./styles.scss"
import Image from 'next/image'
import { pretendardBold } from '@/app/styles/fonts'
interface Props {
  title:string,
  detail:string,
  bg:any,
  button?:JSX.Element
}
function HeroSection({title,detail,bg,button}:Props) {
  return (
    <div className='heroSectionIntro'>
        <Image src={bg} alt="" />
        <div className="content">
            <div className={`${pretendardBold.className} title`}>{title}</div>
            <div className="detail">
            {detail}
            </div>
            {button && button}
        </div>
    </div>
  )
}

export default HeroSection