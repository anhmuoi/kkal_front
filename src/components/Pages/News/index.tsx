import React from "react";
import HeroSection from "../../Common/HeroSection";
import bg from "../../../Assets/Images/img-banner-news-01@3x.png";
import News from "./ListNews/index";
function NewsPage() {
  return (
    <main>
      <HeroSection title="큐오 뉴스" detail={detailHeroSection} bg={bg} />
      <News />
    </main>
  );
}

export default NewsPage;

const detailHeroSection = `큐오뮤직에 대한 다양한 소식을 확인해 보세요. 아티스트의 소식, 콘서트 \n 일정, 특별한 행사 및 라이브 공연, 아티스트 관련 이벤트 등 수많은 정보를 \n 확인할 수 있습니다.`;
