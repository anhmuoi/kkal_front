import React from "react";
import TitleSection from "../../../Common/TitleSection";
import img1 from "../../../../Assets/Images/img-main-newalbum-01@3x.png"
import img2 from "../../../../Assets/Images/img-main-newalbum-02@3x.png"
import img3 from "../../../../Assets/Images/img-main-newalbum-03@3x.png"
import img4 from "../../../../Assets/Images/img-main-newalbum-04@3x.png"
import img5 from "../../../../Assets/Images/img-main-newalbum-05@3x.png"
import img6 from "../../../../Assets/Images/img-main-newalbum-06@3x.png"
import img7 from "../../../../Assets/Images/img-main-newalbum-07@3x.png"
import img8 from "../../../../Assets/Images/img-main-newalbum-08@3x.png"

import mainAds from "../../../../Assets/Images/img-ads-03@3x.png"
import imgAds1 from "../../../../Assets/Images/img-ads-01@3x.png"
import imgAds2 from "../../../../Assets/Images/img-ads-02@3x.png"
import thumb1 from "../../../../Assets/Images/thumbImg_01.png"
import thumb2 from "../../../../Assets/Images/thumbImg_02.png"

import "./styles.scss";
import Image from "next/image";
function Album() {
  return (
    <div className="album">
      <div className="album-container">
        <TitleSection
          title="새로운 앨범"
          detail="최근에 발매된 앨범을 모두 살펴보세요."
          rightAction={() => {}}
        />
        <div className="album-list">
            {data.map((item,index) => (
                <div key={index} className="album-item">
                    <Image src={item.img} alt="" />
                    <div className="content">
                        <div className="title">{item.title}</div>
                        <div className="author">{item.author}</div>
                    </div>
                </div>
            ))}

            <div className="album-list-thumb">
                <Image src={thumb1} alt="" />
            </div>
        </div>

        <div className="album-ads">
            <div className="content">
                <div className="title">What is your <br />
                    Favorite song?</div>
                    <div className="detail">
                        <a href="https://www.google.com/">내 취향에 맞는 노래를 추천해드립니다.</a>
                    </div>
            </div>
            <div className="rightImg">
                <Image src={mainAds} alt="" />
                <div className="adsFirst">
                    <Image src={imgAds1} alt="" />
                </div>
                <div className="adsSecond">
                    <Image src={imgAds2} alt="" />
                </div>
            </div>

            <div className="thumbImg">
                <Image src={thumb2} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Album;

const data = [
    {
        img: img1,
        title: '기억에 머문다',
        author: 'Cadence Lee'
    },
    {
        img: img2,
        title: '기억에 머문다',
        author: 'Cadence Lee'
    },
    {
        img: img3,
        title: 'Forest Town',
        author: 'Cadence Lee'
    },
    {
        img: img4,
        title: '두번째 EP',
        author: '20세기소년소녀'
    },
    {
        img: img5,
        title: '기억에 머문다',
        author: 'Cadence Lee'
    },
    {
        img: img6,
        title: 'Prom in The...',
        author: 'Cadence Lee'
    },
    {
        img: img7,
        title: 'Forest Town',
        author: 'Cadence Lee'
    },
    {
        img: img8,
        title: '두번째 EP',
        author: '20세기소년소녀'
    },
]