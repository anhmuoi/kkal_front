import React from 'react'
import "./styles.scss"
interface Props {
    subTit: string,
    title: string,
    detail?:string
}
function Title({subTit,title,detail}:Props) {
  return (
    <div className='info-title'>
        <div className="subTit">{subTit}</div>
        <div className="title">{title}</div>
        <div className="detail">{detail}</div>
    </div>
  )
}

export default Title