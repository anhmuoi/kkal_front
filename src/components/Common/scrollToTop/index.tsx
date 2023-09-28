import React from "react";
import "./styles.scss";
import Image from "next/image";
import btnTop from "../../../Assets/Images/btn-top.png";

function BtnScrollTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="btn-top" onClick={scrollToTop}>
      <Image src={btnTop} alt="btn-top" width={80} height={80} />
    </div>
  );
}
export default BtnScrollTop;
