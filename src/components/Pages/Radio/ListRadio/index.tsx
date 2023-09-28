import React from "react";
import img1 from "../../../../Assets/Images/img-mv-01@3x.png";
import img2 from "../../../../Assets/Images/img-mv-02@3x.png";
import img3 from "../../../../Assets/Images/img-mv-03@3x.png";
import img4 from "../../../../Assets/Images/img-mv-04@3x.png";
import img5 from "../../../../Assets/Images/img-mv-05@3x.png";
import img6 from "../../../../Assets/Images/img-mv-06@3x.png";

import playIcon from "../../../../Assets/Images/btn-mv-play-01@3x.png";
import "./styles.scss";
import Pagination from "../../../Common/Pagination";
import Image from "next/image";
import { pretendardBold, pretendardMedium } from "@/app/styles/fonts";

function ListRadio() {
  return (
    <div className="listRadio">
      <div className="listRadio-container">
        <div className="list">
          {data.map((item, index) => (
            <div key={index} className="item">
              <div className="item-img">
                <Image src={item.img} alt="" />
                <div className={`${pretendardMedium.className} date`}>
                  <p>{item.date}</p>
                </div>
                <div className="playIcon">
                  <Image src={playIcon} alt="" />
                </div>
                
              </div>

              <div className={`${pretendardBold.className} title`}>{item.title}</div>
                <div className="detail">{item.detail}</div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default ListRadio;

const data = [
  {
    img: img1,
    title: "무더위에 지친 당신을 위한 상쾌한 노래 모음",
    detail: "[큐오뮤직] 무더위에 지친 당신을 위한 상쾌한 노래 모음입니다.",
    link: "",
    date: "2023. 01. 09",
  },
  {
    img: img2,
    title: "박지 - Private Or Public",
    detail: `남성듀오 '박지'의 첫 미니앨범 [Private Or Public] 이 앨범을 통해 박지는 자신들의 음악정체성을 적극적으로 드러내며 전작들과는 다른 모습을 보여준다. 사적이면서도 공개적인, 개인적이면서도 사회적인 이야기들을....`,
    link: "",
    date: "2023. 11. 02",
  },
  {
    img: img3,
    title: "코인 클래식 - 무설탕소녀",
    detail: `2011년 이후 잠정적으로 활동을 멈췄던 멜로딕펑크밴드 코인클래식이 무려 5년 만에 미니앨범을 발매한다. 캘리포니아의 햇살 같은 네 남자는 한국에서 팝펑크를 부흥시키기 위해 타이틀곡 무설탕소녀를 비롯, 4곡을....`,
    link: "",
    date: "2023. 01. 09",
  },
  {
    img: img4,
    title: "큐오뮤직을 통해 싱글 발매한 봄노래 리스트",
    detail: `최근 큐오뮤직을 통해 싱글 발매한 봄노래 리스트입니다. 01. 코다 브릿지 - Lovely Day (Feat. 예이슬, 일나티) 02. 유별 - Radio Song (Feat. 전한국) 03. 리치홀리데이 - 봄이 만진 너`,
    link: "",
    date: "2023. 11. 02",
  },
  {
    img: img5,
    title: "무더위에 지친 당신을 위한 상쾌한 노래 모음",
    detail: "[큐오뮤직] 무더위에 지친 당신을 위한 상쾌한 노래 모음입니다.",
    link: "",
    date: "2023. 01. 09",
  },
  {
    img: img6,
    title: "박지 - Private Or Public",
    detail: `남성듀오 '박지'의 첫 미니앨범 [Private Or Public] 이 앨범을 통해 박지는 자신들의 음악정체성을 적극적으로 드러내며 전작들과는 다른 모습을 보여준다. 사적이면서도 공개적인, 개인적이면서도 사회적인 이야기들을....`,
    link: "",
    date: "2023. 11. 02",
  },
];
