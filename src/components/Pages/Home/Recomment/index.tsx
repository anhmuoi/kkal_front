import React from "react";
import TitleSection from "../../../Common/TitleSection";
import img1 from "../../../../Assets/Images/img-main-music-01@3x.png";
import img2 from "../../../../Assets/Images/img-main-music-02@3x.png";
import img3 from "../../../../Assets/Images/img-main-music-03@3x.png";
import playIcon from "../../../../Assets/Images/ic-main-music-play-01@3x.png";

import "./styles.scss";
import Image from "next/image";
import { pretendardBold, pretendardMedium } from "@/app/styles/fonts";
function Recomment() {
  return (
    <div className="recomment">
      <div className="recomment-container">
        <TitleSection
          title="큐오 추천 음악"
          detail="큐오뮤직이 선정한 추천 음악을 들어보세요."
          rightAction={() => {}}
        />
        <div className="recomment-list">
          {data.map((item, index) => (
            <div style={{ background: item.bg }} className="item" key={index}>
              <div className={`${pretendardBold.className} title`}>
                <p>{item.title}</p>
                <div className="playImg">
                  <Image src={playIcon} alt="" />
                </div>
              </div>
              <div className="img">
                <Image src={item.img} alt="" />
              </div>
              <div className={`${pretendardMedium.className} detail`}>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recomment;
const data = [
  {
    img: img1,
    title: `무더위에 지친 \n 당신을 위한`,
    detail: "무더위에 지친 당신을 위한 상쾌한 노래 모음",
    bg: "#030000",
  },
  {
    img: img2,
    title: `큐오뮤직을 통해 \n 싱글 발매한 봄노래`,
    detail: "큐오뮤직을 통해 싱글 발매한 봄노래 리스트",
    bg: "#ffd22e",
  },
  {
    img: img3,
    title: `무더위에 지친 \n 당신을 위한`,
    detail: "무더위에 지친 당신을 위한 상쾌한 노래 모음",
    bg: "#009ca9",
  },
];
