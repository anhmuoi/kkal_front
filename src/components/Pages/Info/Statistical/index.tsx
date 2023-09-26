import React from 'react'
import "./styles.scss"
function Statistical() {
  return (
    <div className='statistical'>
        <div className="statistical-container">
            <div className="data">
                {data.map((item,index) => (
                    <div key={index} className="item">
                        <div className="title">{item.data}</div>
                        <div className="detail">{item.detail}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Statistical
const data = [
    {
        data: '20년',
        detail: '20년 이상 경력의 음악, 마케팅 관련 전문가'
    },
    {
        data: '70,000+',
        detail: '7만 명 이상의 작곡가'
    },
    {
        data: '1st',
        detail: '최신기술의 음원 실시간 정산 시스템'
    },
]