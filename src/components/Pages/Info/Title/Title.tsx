import React from 'react'
import "./styles.scss"
import { pretendardBold } from '@/app/styles/fonts'
interface Props {
    subTit: string,
    title: string,
    detail?:string
}
function Title({subTit,title,detail}:Props) {
  return (
    <div className='info-title'>
        <div className="subTit">{subTit}</div>
        <div className={`${pretendardBold.className} title`}>{title}</div>
        <div className="detail">{detail}</div>
    </div>
  )
}

export default Title