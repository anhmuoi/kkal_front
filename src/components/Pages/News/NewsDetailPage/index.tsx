import React from "react";
import socialImg1 from "../../../../Assets/Images/ic-artist-social-01@3x.png";
import socialImg2 from "../../../../Assets/Images/ic-artist-social-02@3x.png";
import socialImg3 from "../../../../Assets/Images/ic-artist-social-03@3x.png";
import socialImg4 from "../../../../Assets/Images/ic-artist-social-04@3x.png";
import bg from "../../../../Assets/Images/img-banner-news-02@3x.png";
import Button from "../../../Common/Button";

import "./styles.scss";
import Image from "next/image";
import { pretendardBold } from "@/app/styles/fonts";
function NewsDetail() {
  return (
    <div className="newsDetail">
      <div className="newsDetail-container">
        <div className="date">2022.07.05</div>
        <div className={`${pretendardBold.className} title`}>
          [아티스트] 이나연 1st Single [선톡] <br />
          네이버 검색 메인 페이지 소개
        </div>

        <div className="social">
          <div className="social-items">
            {socialData.map((item, index) => (
              <div key={index} className="item">
                <a href={item.link}>
                  <Image src={item.img} alt="" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="main-bg">
          <Image src={bg} alt="" />
        </div>

        <div className="content">
          <div className={`${pretendardBold.className} title`}>이나연 1st Single [선톡] - 네이버 검색 메인 페이지에 소개 </div>
          <div className={`${pretendardBold.className} subTit`}>'이나연' 1st Single [선톡]</div>
          <div className="detail">
            {`"선톡"은 '이나연'의 첫 자작곡으로 그녀의 실제 경험담을 바탕으로 만든 노래이다. 어느 날 누군가의 노래를 들으며 마치 자신을 대변하는 것 같은 기분을 느꼈다는 그녀가 짝사랑을 하던 때의 감정과 느낌을 이번 곡에 담아냈다. "짝사랑을 할 땐 정말 하늘이 핑크빛으로 물들고 어떤 일을 하든 행복한 마음이 생겨나죠. 많은 사람들이 제 노래를 듣고 공감하고 또 설레는 감정을 다시금 느꼈으면 좋겠습니다."`}
          </div>
          <ul className="detailNews">
            {detailNews.map((item, index) => (
              <li key={index}>{item.tit}</li>
            ))}
          </ul>
        </div>
        <div className="button">
          <Button text="목록으로" type="outline" />
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;

const socialData = [
  {
    img: socialImg1,
    link: ``,
  },
  {
    img: socialImg2,
    link: ``,
  },
  {
    img: socialImg3,
    link: ``,
  },
  {
    img: socialImg4,
    link: ``,
  },
];

const detailNews = [
  { tit: "Composed by 이나연" },
  { tit: "Lyrics written 이나연" },
  { tit: "Arranged by 이나연,한성준,이지혜" },
  { tit: "Background Vocals 이나연" },
  { tit: "Guitar 이지혜" },
  { tit: "Piano 한성준" },
  { tit: "Recorded by 남국희 @ 매드사운드" },
  { tit: "Mixed by 남국희 @ 매드사운드" },
  { tit: "Mastered by 권남우 @ JFS Mastering" },
];
