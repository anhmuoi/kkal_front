import React from 'react'
import "./styles.scss"
import { pretendardBold } from '@/app/styles/fonts'
function ParticipantList() {
  return (
    <div className='participantList'>
        <div className="participantList-container">
            <div className="title">참여 리스트</div>
            <div className="list">
                {data.map((item,index) => (
                    <div key={index} className="item">

                        <div className="data">{item.date}</div>
                        <div className={`${pretendardBold.className} titleDate`}>{item.tit}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ParticipantList

const data = [
    {
        date: '2023. 03. 16',
        tit: '세 번째 미니앨범 ‘SUNSET’ 발매'
    },
    {
        date: '2023. 03. 16',
        tit: 'Mnet ‘스트릿 맨 파이터’ 심사위원'
    },
    {
        date: '2023. 03. 16',
        tit: `미니 5집 '하트 어택' 발매`
    },
    {
        date: '2023. 03. 16',
        tit: `시즌 2 다섯 번째 곡 ‘봄비 (Spring Rain)’ 발표`
    },
    {
        date: '2023. 03. 16',
        tit: `일본 데뷔 4주년 기념 프로젝트 첫 번째 디지털 싱글 ‘My Dear’`
    },
    {
        date: '2023. 03. 16',
        tit: `쏘카 X 매직스트로베리사운드 (Summer Night Breeze) \n ‘어떻게 생각해’ 발표`
    },
    {
        date: '2023. 03. 16',
        tit: `드라마 <선배, 그 립스틱 바르지 마요> OST ‘아이’`
    },
]
