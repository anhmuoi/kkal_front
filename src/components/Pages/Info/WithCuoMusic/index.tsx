import React from 'react'
import Title from '../Title/Title'
import img1 from "../../../../Assets/Images/img-info-withcuo-01@3x.png"
import img2 from "../../../../Assets/Images/img-info-withcuo-02@3x.png"
import img3 from "../../../../Assets/Images/img-info-withcuo-03@3x.png"
import progress from "../../../../Assets/Images/img-info-revenue@3x.png"

import "./styles.scss"
import Image from 'next/image'

function WithCuoMusic() {
  return (
    <div className='withCuo'>
        <div className="withCuo-container">
            <Title title='큐오뮤직과 함께하는 이유' subTit='With Cuomusic' />

            <div className="withCuo-list">
                {data.map((item,index) => (
                    <div className="item" key={index}>
                        <div className="img">
                            <Image src={item.img} alt="" />
                        </div>
                        <div className="content">
                        <div className="title">
                            {item.tit}
                        </div>
                        <div className="detail">
                            {item.detail}
                        </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="withCuo-progress">
                <div className="content">
                    <div className="title">
                    음원 발매를 통해 창출된 저작권 <br />
                    수익의 85%를 아티스트에게 지급해 <br />
                     드립니다.
                    </div>
                    <div className="detail">
                        <p>큐오뮤직은 여러분의 지속적인 음악 창작 활동을 위해 끊임없이 노력하고 있습니다.</p>
                    </div>
                </div>
                <div className="progress-img">
                    <Image src={progress} alt="" />
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default WithCuoMusic

const data = [
    {
        img: img1,
        tit: '서로가 신뢰할 수 있는',
        detail: '큐오뮤직에서는 소리바다, 삼성 밀크뮤직, KT 뮤직에서 음악 마케팅을 다년간 담당했던 인재들과 해외 서비스 마케팅을 담당한 전문가들이 함께하고 있습니다.'
    },
    {
        img: img2,
        tit: '누구나 함께하는',
        detail: '큐오뮤직은 작곡가와 프로듀서들이 모인 커뮤니티인 큐오넷을 20년간 운영하여 작곡자와 아티스트 회원 70,000명을 확보하고 있습니다.'
    },
    {
        img: img3,
        tit: '차별화된 서비스로',
        detail: '큐오뮤직은 다른 음원 유통업체에서는 가지고 있지 않은 서비스별 실시간 플레이 횟수를 체크하여 발매 아티스트들이 바로 확인할 수 있습니다.'
    },
]