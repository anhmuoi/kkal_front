import React from "react";
import TitleSection from "../../../Common/TitleSection";
import img1 from "../../../../Assets/Images/img-main-news-01@3x.png"
import img2 from "../../../../Assets/Images/img-main-news-02@3x.png"

import thumbImg1 from "../../../../Assets/Images/thumbImg_03.png"
import thumbImg2 from "../../../../Assets/Images/thumbImg_04.png"
import "./styles.scss";
import Image from "next/image";
function News() {
  return (
    <div className="news">
      <div className="news-container">
        <TitleSection
          title="큐오 뉴스"
          detail="큐오뮤직의 최신 소식을 살펴보세요."
          rightAction={() => {}}
        />
        <div className="news-list">
            {data.map((item,index) => (
                <div className="item" key={index}>
                    <Image src={item.img} alt="" />
                    <div className="title">
                        <p>{item.title}</p>
                    </div>
                </div>
            ))}
            <div className="thumbImgFirst">
                <Image src={thumbImg1} alt="" />
            </div>
            <div className="thumbImgSecond">
                <Image src={thumbImg2} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default News;
const data = [
    {
        img: img1,
        title: `황민구는 대한민국의 작곡가이자 연주자이며,\n ‘기억에 머문다’ 는 사랑의향기 발매`
    },
    {
        img: img2,
        title: `황민구는 대한민국의 작곡가이자 연주자이며, \n ‘기억에 머문다’ 는 사랑의향기 발매`
    },
]