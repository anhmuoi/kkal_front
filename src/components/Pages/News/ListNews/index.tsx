import React from "react";
import img1 from "../../../../Assets/Images/img-news-thumb-01@3x.png";
import img2 from "../../../../Assets/Images/img-news-thumb-02@3x.png";
import img3 from "../../../../Assets/Images/img-news-thumb-03@3x.png";
import img4 from "../../../../Assets/Images/img-news-thumb-04@3x.png";
import img5 from "../../../../Assets/Images/img-news-thumb-05@3x.png";
import img6 from "../../../../Assets/Images/img-news-thumb-06@3x.png";
import img7 from "../../../../Assets/Images/img-news-thumb-07@3x.png";
import img8 from "../../../../Assets/Images/img-news-thumb-08@3x.png";
import img9 from "../../../../Assets/Images/img-news-thumb-09@3x.png";
import img10 from "../../../../Assets/Images/img-news-thumb-10@3x.png";

import "./styles.scss";
import Pagination from "../../../Common/Pagination";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../../../utils/scrollToTop";
import Image from "next/image";

function News() {
  const navigation = useNavigate();
  return (
    <div className="newsPage">
      <div className="newsPage-container">
        <div className="list">
          {data.map((item, index) => (
            <div
              onClick={() => {
                navigation(`/news/${item.id}`);
                scrollToTop();
              }}
              key={index}
              className="item"
            >
              <div className="item-img">
                <Image src={item.img} alt="" />
              </div>

              <div className="title">{item.title}</div>
              <div className="detail">{item.detail}</div>

              <div className="date">
                <p>{item.date}</p>
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

export default News;

const data = [
  {
    img: img1,
    title:
      "[큐오뮤직] 오는 3월 서비스 전면 개편에 나설 예정...앞으로 기대되는 성장",
    detail:
      "효과적은 팬들과의 소통과 뮤지션 홍보를 위해 페이스북, 인스타그램, 유튜브 등 SNS 채널에 소개영상을 게시합니다. 인터뷰 영상, 제작스케치 영상을 활용한 콘텐츠를 제작하여 네이버포스트에 게시합니다.",
    id: "item-1",
    date: "2023. 01. 16",
  },
  {
    img: img2,
    title: "[아티스트] 이나연 1st Single [선톡] - 네이버 검색 메인 페이지 소개",
    detail: `"선톡"은 '이나연'의 첫 자작곡으로 그녀의 실제 경험담을 바탕으로 만든 노래이다. 어느 날 누군가의 노래를 들으며 마치 자신을 대변하는 것 같은 기분을 느꼈다는 그녀가 짝사랑을 하던 때의 감정과 느낌을 이번 곡에 담아냈다.`,
    id: "item-1",
    date: "2023. 01. 16",
  },
  {
    img: img3,
    title: "[아티스트] 디템포, 첫번째 EP앨범 [반골] 멜론 메인 표지 장식",
    detail: `디템포의 첫번째 EP앨범인 [반골] 멜론이 메인 표지를 장식했습니다. 디템포는 5월 발매한 첫번째 EP앨범을 통해 팬들과 적극적으로 소통할 예정입니다.`,
    id: "item-1",
    date: "2023. 01. 16",
  },
  {
    img: img4,
    title:
      "[큐오뮤직] 오는 3월 서비스 전면 개편에 나설 예정...앞으로 기대되는 성장",
    detail: `효과적은 팬들과의 소통과 뮤지션 홍보를 위해 페이스북, 인스타그램, 유튜브 등 SNS 채널에 소개영상을 게시합니다. 인터뷰 영상, 제작스케치 영상을 활용한 콘텐츠를 제작하여 네이버포스트에 게시합니다.`,
    id: "item-1",
    date: "2023. 01. 16",
  },
  {
    img: img5,
    title:
      "[큐오뮤직] 오는 3월 서비스 전면 개편에 나설 예정...앞으로 기대되는 성장",
    detail:
      "효과적은 팬들과의 소통과 뮤지션 홍보를 위해 페이스북, 인스타그램, 유튜브 등 SNS 채널에 소개영상을 게시합니다. 인터뷰 영상, 제작스케치 영상을 활용한 콘텐츠를 제작하여 네이버포스트에 게시합니다.",
    id: "item-1",
    date: "2023. 01. 16",
  },
  {
    img: img6,
    title: "[아티스트] 이나연 1st Single [선톡] - 네이버 검색 메인 페이지 소개",
    detail: `"선톡"은 '이나연'의 첫 자작곡으로 그녀의 실제 경험담을 바탕으로 만든 노래이다. 어느 날 누군가의 노래를 들으며 마치 자신을 대변하는 것 같은 기분을 느꼈다는 그녀가 짝사랑을 하던 때의 감정과 느낌을 이번 곡에 담아냈다.`,
    id: "item-1",
    date: "2023. 11. 02",
  },
  {
    img: img7,
    title:
      "[큐오뮤직] 오는 3월 서비스 전면 개편에 나설 예정...앞으로 기대되는 성장",
    detail:
      "효과적은 팬들과의 소통과 뮤지션 홍보를 위해 페이스북, 인스타그램, 유튜브 등 SNS 채널에 소개영상을 게시합니다. 인터뷰 영상, 제작스케치 영상을 활용한 콘텐츠를 제작하여 네이버포스트에 게시합니다.",
    id: "item-1",
    date: "2023. 01. 16",
  },
  {
    img: img8,
    title: "[아티스트] 이나연 1st Single [선톡] - 네이버 검색 메인 페이지 소개",
    detail: `"선톡"은 '이나연'의 첫 자작곡으로 그녀의 실제 경험담을 바탕으로 만든 노래이다. 어느 날 누군가의 노래를 들으며 마치 자신을 대변하는 것 같은 기분을 느꼈다는 그녀가 짝사랑을 하던 때의 감정과 느낌을 이번 곡에 담아냈다.`,
    id: "item-1",
    date: "2023. 01. 16",
  },
  {
    img: img9,
    title: "[아티스트] 디템포, 첫번째 EP앨범 [반골] 멜론 메인 표지 장식",
    detail: `디템포의 첫번째 EP앨범인 [반골] 멜론이 메인 표지를 장식했습니다. 디템포는 5월 발매한 첫번째 EP앨범을 통해 팬들과 적극적으로 소통할 예정입니다.`,
    id: "item-1",
    date: "2023. 01. 16",
  },
  {
    img: img10,
    title:
      "[큐오뮤직] 오는 3월 서비스 전면 개편에 나설 예정...앞으로 기대되는 성장",
    detail: `효과적은 팬들과의 소통과 뮤지션 홍보를 위해 페이스북, 인스타그램, 유튜브 등 SNS 채널에 소개영상을 게시합니다. 인터뷰 영상, 제작스케치 영상을 활용한 콘텐츠를 제작하여 네이버포스트에 게시합니다.`,
    id: "item-1",
    date: "2023. 01. 16",
  },
];
