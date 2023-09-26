import React from "react";
import logo1 from "../../../../Assets/Images/img-info-logo-01@3x.png";
import logo2 from "../../../../Assets/Images/img-info-logo-02@3x.png";
import logo3 from "../../../../Assets/Images/img-info-logo-03@3x.png";
import logo4 from "../../../../Assets/Images/img-info-logo-04@3x.png";
import logo5 from "../../../../Assets/Images/img-info-logo-05@3x.png";
import logo6 from "../../../../Assets/Images/img-info-logo-06@3x.png";

import img1 from "../../../../Assets/Images/ic-info-services-01@3x.png";
import img2 from "../../../../Assets/Images/ic-info-services-02@3x.png";
import img3 from "../../../../Assets/Images/ic-info-services-03@3x.png";
import img4 from "../../../../Assets/Images/ic-info-services-04@3x.png";
import Title from "../Title/Title";

import "./styles.scss"
import Image from "next/image";
function Services() {
  return (
    <div className="services">
      <div className="services-container">
        <div className="logo-list">
          {dataLogo.map((item, index) => (
            <div className="logo-item" key={index}>
              <Image src={item.img} alt="" />
            </div>
          ))}
        </div>

        <Title
          subTit="Cuomusic Services"
          title="서비스"
          detail={detailText}
        />

        <div className="list-services">
          {dataServices.map((item, index) => (
            <div className="item" key={index}>
              <div className="img">
                <Image src={item.img} alt="" />
              </div>
              <div className="title">{item.title}</div>
              <p className="detail">{item.detail}</p>
            </div>
          ))}
        </div>
        

      </div>
    </div>
  );
}

export default Services;

const dataLogo = [
  { img: logo1 },
  { img: logo2 },
  { img: logo3 },
  { img: logo4 },
  { img: logo5 },
  { img: logo6 },
];
const dataServices = [
  {
    img: img1,
    title: "국내외 주요 음악사이트에 음원 공급",
    detail:
      "큐오뮤직에서는 멜론, 지니, 엠넷, 소리바다, VIBE, FLO 등 국내 주요 음악사이트와 Apple, Youtube, Spotify, Pandora, Amazon, KKBOX등 주요 해외 음악사이트에 음원을 공급하고 있습니다.",
  },
  {
    img: img2,
    title: "SNS홍보 지원",
    detail:
      "효과적은 팬들과의 소통과 뮤지션 홍보를 위해 페이스북, 인스타그램, 유튜브 등 SNS 채널에 소개영상을 게시합니다. 인터뷰 영상, 제작스케치 영상을 활용한 콘텐츠를 제작하여 네이버포스트에 게시합니다.",
  },
  {
    img: img3,
    title: "카페라이브",
    detail:
      "큐오뮤직은 매월 카페라이브를 통해 실시간스트리밍, SNS, Youtube에서 활용 가능한 다양한 콘텐츠로 뮤지션들의 홍보를 지원합니다.",
  },
  {
    img: img4,
    title: "특별한 정산 시스템",
    detail:
      "큐오뮤직에서 음원을 발매한 뮤지션은 자체 정산 시스템에 로그인하여 자신의 곡이 어떤 매체에서 얼마나 플레이되었는지 실시간으로 정확한 확인이 가능합니다.",
  },
];
const detailText = `큐오뮤직은 국내 최고의 음악전문 커뮤니티 큐오넷 (www.cuonet.com)과 음원유통플랫폼 전문회사인 (주)에이티씨미디어가 함께 \n 운영하고 있습니다. 회사 직원 모두가 음악적 경력과 오랜 유통 경험을 쌓은 능력이 있는 회사이기 때문에, 누구나 믿고 함께 할 수\n 있습니다. 음원 유통 전문가와 함께 여러분의 음악으로 소통하겠습니다.`;
