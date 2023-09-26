import React, { useEffect, useMemo, useState } from "react";
import language from "../../../Assets/Images/language.png";
import logo from "../../../Assets/Images/logo.png";
import { scrollToTop } from "../../../utils/scrollToTop";
import { RoutesString } from "../../Modules/routesString";
import Button from "../Button";
import "./header.scss";
import Image from "next/image";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header
        id="header2"
        style={{
          boxShadow: !navbar ? "none" : undefined,
          backgroundColor: "#141414",
        }}
        className={`header headerSection ${navbar ? "fixed" : ""}`}
      >
        <div className="header_logo">
          <a href="/" className="logo">
            <Image src={logo} alt="logo" />
          </a>
        </div>

        <div className="header_menu">
          {/* //header menu  */}
          <ul className="list_menu">
            {dataRouter.map((item, index) => (
              <li key={index} className="menu_items ">
                <div
                  // className={`${
                  //   pathname.includes(item.router) ? "activeItemsPage" : ""
                  // }`}
                  onClick={scrollToTop}
                >
                  {item.name}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="header_rightMenu">
          <Button
            type="primary"
            text="유통 신청"
            onClick={() => {
              alert("준비중입니다.");
            }}
          />

          <div className="language">
            <Image src={language} alt="language" width={34} height={34} />
          </div>
        </div>

        <div onClick={() => setOpenMenu(!openMenu)} className="header_mobile_icon">
          {iconMobile}
        </div>
      </header>

      {/* //MOBILE  */}
      <aside onClick={() => setOpenMenu(!openMenu)} className={`header-mobile ${openMenu ? "openMenu" : ""}`}>
        <div className="icon-close">
          <span>X</span>
        </div>
        <div className="menu-mobile-items">
          <ul className="list_menu">
            {dataRouter.map((item, index) => (
              <li
                onClick={scrollToTop}
                key={index}
                // className={`menu_items ${
                //   pathname.includes(item.router) ? "activeItemsPage" : ""
                // }`}
              ></li>
            ))}
          </ul>
        </div>
        <div className="menu-mobile-rightMenu">
          <Button
            type="outline"
            style={{ marginTop: 20 }}
            text="무료 체험하기"
            onClick={() => {
              alert("준비중입니다.");
            }}
          />
          <div className="language">
            <Image src={language} alt="" />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;

const dataRouter = [
  {
    name: "배급 안내",
    router: RoutesString.Info,
  },
  {
    name: "출시 앨범",
    router: RoutesString.Album,
  },
  {
    name: "아티스트",
    router: RoutesString.Artist,
  },
  {
    name: "큐오라디오",
    router: RoutesString.Radio,
  },
  {
    name: "큐오뉴스",
    router: RoutesString.News,
  },
];

const iconMobile = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
    />
  </svg>
);
