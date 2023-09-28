import React from "react";
import banner from "../../../../Assets/Images/img-banner-main@3x.png";

import "./styles.scss";
import Image from "next/image";
import { IowanRoman } from "@/app/styles/fonts";
function HeroSection() {
  return (
    <div className="heroSection">
      <div className="heroSection-bg">
        <Image src={banner} alt="" />
      </div>
      <div className="heroSection-content">
        <div className={`title ${IowanRoman.className}`}>
          <p className={IowanRoman.className}>
            {" "}
            Would you listen to this? Time to <br />
            communicate with music and people. Feel <br />
            the melodic flow in your heart.
          </p>
        </div>
        <div className="detail" >
          <p>
            큐오뮤직은 음악 제작과 마케팅을 다년 간 담당했던 인재들로 이루어진
            회사입니다. 작곡가, 엔지니어 <br />등 음원 유통 전문가와 함께
            여러분의 음악으로 소통하고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
