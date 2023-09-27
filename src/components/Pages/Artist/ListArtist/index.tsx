"use client";
import React from "react";
import Pagination from "../../../Common/Pagination";
import arrow from "../../../../Assets/Images/ic-artist-arrow-02@3x.png";

import "./styles.scss";
import { useRouter } from 'next/navigation'

import { scrollToTop } from "../../../../utils/scrollToTop";
import Image from "next/image";
function ListArtist() {
  const router = useRouter();

  const handleNavigate = async (item: any) => {
    await scrollToTop();
    router.push(`/artist/${item.id}`);
  }
  return (
    <div className="listArtist">
      <div className="listArtist-container">
        <div className="title">아티스트 리스트</div>
        <div className="list">
          {data.map((item, index) => (
            <div
              onClick={() => handleNavigate(item)}
              className="item"
              key={index}
            >
              <div className="content">
                <div className="title">{item.tit}</div>
                <div className="img">
                  <Image src={arrow} alt="" />
                </div>
              </div>

              <div className="shape">
                <div className="shape-item"></div>
              </div>
              <div className="detail">
                {item.detail}
                <span>{item.status}</span>
              </div>
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

export default ListArtist;

const data = [
  {
    tit: `박진희 \n Park Jin Hee`,
    detail: "최신 발매",
    status: "Relaxing",
    id: "ParkJinHee",
  },
  {
    tit: `YAMALEe`,
    detail: "최신 발매",
    status: "You Dance (or Not)",
    id: "YAMALEe",
  },
  {
    tit: `Piano Heart`,
    detail: "최신 발매 ",
    status: "그 겨울, 너란 봄",
    id: "PianoHeart",
  },
  {
    tit: `KnoWWell`,
    detail: "최신 발매",
    status: "GoodBye",
    id: "KnoWWell",
  },
  {
    tit: `초요`,
    detail: "최신 발매",
    status: "그대라는 사랑의 이름의 의미",
    id: "PianoHeart",
  },
  {
    tit: `정재욱 \n Jae Wook Jeong`,
    detail: "최신 발매 ",
    status: "Post Nerdism (feat. Jessy)",
    id: "PianoHeart",
  },
  {
    tit: `프림`,
    detail: "최신 발매 ",
    status: "You Dance (or Not)",
    id: "PianoHeart",
  },
  {
    tit: `Take No!se`,
    detail: "최신 발매",
    status: "전설 속의 이야기",
    id: "PianoHeart",
  },
  {
    tit: `Yes Junior 24`,
    detail: "최신 발매",
    status: "You Dance (or Not)",
    id: "PianoHeart",
  },
];
