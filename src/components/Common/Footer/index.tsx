import React from "react";
import "./styles.scss";
import instagram from "../../../Assets/Images/ic-footer-instagram@3x.png";
import spotify from "../../../Assets/Images/ic-footer-spotify@3x.png";
import linkedin from "../../../Assets/Images/ic-footer-linkedin@3x.png";
import youtube from "../../../Assets/Images/ic-footer-youtube@3x.png";
import Image from "next/image";
import Link from "next/link";
import { pretendardBold } from "@/app/styles/fonts";

function Footer() {
  const infoItem = (tit: string, detail?: string) => (
    <div className="infoItem">
      <div className="title">{tit}</div>
      <div className="detail">{detail}</div>
    </div>
  );

  return (
    <footer>
      <div className="footer-container">
        <div className="topItem">
          <div className="topItem-container">
          <div className="list-info">
            {dataInfo.map((item, index) => (
              <div key={index} className="item">
                <Link href={item.router}>{item.tit}</Link>
              </div>
            ))}
          </div>

          <div className="social">
            {dataSocial.map((item, index) => (
              <div key={index} className="social-item">
                <a href={item.link} className={pretendardBold.className}>
                  <Image src={item.img} alt="" />
                </a>
              </div>
            ))}
          </div>
          </div>
        </div>

        <div className="bottomItem">
          <div className="contact">
            <div className="contact-phone">
              {infoItem("큐오뮤직")}
              {infoItem("대표이사", "서승용")}
              {infoItem("사업자번호", "220-88-76965")}
              {infoItem("연락처", "070-4210-6330")}
            </div>
            <div className="contact-mail">
              {infoItem("이메일", "content@musicgate.com ")}
              {infoItem(
                "주소",
                "서울특별시 강남구 언주로 165길 7-10 지선빌딩 2층 (주)에이티씨미디어"
              )}
            </div>
          </div>

          <p>© 2023 Cuomuisic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const dataInfo = [
  {
    tit: "이용약관",
    router: "/",
  },
  {
    tit: "개인정보처리방침",
    router: "/",
  },
  {
    tit: "배급 및 유통",
    router: "/",
  },
  {
    tit: "음반제작",
    router: "/",
  },
  {
    tit: "부가서비스",
    router: "/",
  },
  {
    tit: "공지사항",
    router: "/",
  },
];

const dataSocial = [
  {
    img: instagram,
    link: "",
  },
  {
    img: spotify,
    link: "",
  },
  {
    img: linkedin,
    link: "",
  },
  {
    img: youtube,
    link: "",
  },
];
