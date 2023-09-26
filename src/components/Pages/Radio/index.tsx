import React from "react";
import HeroSection from "../../Common/HeroSection";
import bg from "../../../Assets/Images/img-banner-radio@3x.png";
import ListRadio from "./ListRadio";
function CuoRadio() {
  return (
    <main>
      <HeroSection title="큐오 라디오" detail={detailHeroSection} bg={bg} />
      <ListRadio />
    </main>
  );
}

export default CuoRadio;

const detailHeroSection = `큐오뮤직이 제공하는 여러가지 플레이리스트를 들어보세요. 상황에 따라,\n 장소에 따라, 날씨에 따라 새로운 플레이리스트를 통해 새로운 음악을 \n 발견하고 공유할 수 있습니다.`;
