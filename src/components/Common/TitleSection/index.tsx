import React from "react";
import arrowRight from "../../../Assets/Images/arrow-right.png"
import "./styles.scss";
import Image from "next/image";
import { pretendardBold, pretendardMedium, pretendardSemiBold } from "@/app/styles/fonts";
interface Props {
    title: string,
    detail?: string
    rightAction?:() => void
}
function TitleSection({title,detail,rightAction}:Props) {
  return (
    <div className="titleSection">
      <div className="content">
        <div className={`${pretendardSemiBold.className} title`}>
        {title}
        </div>
        <div className="detail">
          <p> 
          {detail}
          </p>
        </div>
      </div>
      <div onClick={rightAction} className={ `${pretendardMedium.className} more`}>
        <p>View more</p>
        <Image src={arrowRight} alt="" height={16} width={16}/>
      </div>
    </div>
  );
}

export default TitleSection;
