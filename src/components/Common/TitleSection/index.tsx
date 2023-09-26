import React from "react";
import arrowRight from "../../../Assets/Images/arrow-right.png"
import "./styles.scss";
import Image from "next/image";
interface Props {
    title: string,
    detail?: string
    rightAction?:() => void
}
function TitleSection({title,detail,rightAction}:Props) {
  return (
    <div className="titleSection">
      <div className="content">
        <div className="title">
        {title}
        </div>
        <div className="detail">
          <p> 
          {detail}
          </p>
        </div>
      </div>
      <div onClick={rightAction} className="more">
        <p>View more</p>
        <Image src={arrowRight} alt="" />
      </div>
    </div>
  );
}

export default TitleSection;
