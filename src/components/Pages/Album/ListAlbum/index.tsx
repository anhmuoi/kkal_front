import React from "react";
import img1 from "../../../../Assets/Images/img-album-list-01@3x.png";
import img2 from "../../../../Assets/Images/img-album-list-02@3x.png";
import img3 from "../../../../Assets/Images/img-album-list-03@3x.png";
import img4 from "../../../../Assets/Images/img-album-list-04@3x.png";
import img5 from "../../../../Assets/Images/img-album-list-05@3x.png";
import img6 from "../../../../Assets/Images/img-album-list-06@3x.png";
import img7 from "../../../../Assets/Images/img-album-list-07@3x.png";
import img8 from "../../../../Assets/Images/img-album-list-08@3x.png";

import arrowRight from "../../../../Assets/Images/arrow-right.png";

import "./styles.scss";
import Pagination from "../../../Common/Pagination";
import Image from "next/image";
import Link from "next/link";
function ListAlbum() {
  return (
    <div className="listAlbum">
      <div className="listAlbum-container">
        <div className="title">앨범 리스트</div>
        <div className="list">
          {data.map((item, index) => (
            <div className="item" key={index}>
              <div className="img">
                <Image src={item.img} alt=""  />
                <div className="content">
                  <div className="title">{item.title}</div>
                  <div className="author">{item.author}</div>
                </div>
                <div className="content-detail">
                  <div className="title">{item.title}</div>
                  <div className="detail">{item.detail}</div>
                  <div className="viewmore">
                    <Link href={""}>
                      View more
                    <Image src={arrowRight} alt="" height={16} width={16}/>
                    </Link>
                  </div>
                </div>
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

export default ListAlbum;

const data = [
  {
    img: img1,
    title: "Forest Town",
    author: "Cadence Lee",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img2,
    title: "기억에 머문다",
    author: "Cadence Lee",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img3,
    title: "Forest Town",
    author: "Cadence Lee",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img4,
    title: "두번째 EP",
    author: "20세기소년소녀",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img5,
    title: "You Dance (or Not)",
    author: "Cadence Lee",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img6,
    title: "Post Nerdism (fe....",
    author: "Cadence Lee",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img7,
    title: "자연 속에서 찾는 내....",
    author: "Cadence Lee",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img8,
    title: "Abreaction",
    author: "20세기소년소녀",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img1,
    title: "Forest Town",
    author: "Cadence Lee",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img2,
    title: "기억에 머문다",
    author: "Cadence Lee",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img3,
    title: "Forest Town",
    author: "Cadence Lee",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img4,
    title: "두번째 EP",
    author: "20세기소년소녀",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img5,
    title: "You Dance (or Not)",
    author: "Cadence Lee",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img6,
    title: "Post Nerdism (fe....",
    author: "Cadence Lee",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img7,
    title: "자연 속에서 찾는 내....",
    author: "Cadence Lee",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img8,
    title: "Abreaction",
    author: "20세기소년소녀",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img1,
    title: "Forest Town",
    author: "Cadence Lee",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img2,
    title: "기억에 머문다",
    author: "Cadence Lee",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img3,
    title: "Forest Town",
    author: "Cadence Lee",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
  {
    img: img4,
    title: "두번째 EP",
    author: "20세기소년소녀",
    detail:
      "황민구는 대한민국의 작곡가이자 연주자이며, ‘기억에 머문다’ 는 사랑의향기 발매 이후 4번째 앨범이다. 팬플룻을 비롯한 다양한....",
    linkViewmore: "/",
  },
];
