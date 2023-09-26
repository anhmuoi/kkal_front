import React from "react";
import img1 from "../../../../../Assets/Images/img-discography-01@3x.png";
import img2 from "../../../../../Assets/Images/img-discography-02@3x.png";
import img3 from "../../../../../Assets/Images/img-discography-03@3x.png";
import img4 from "../../../../../Assets/Images/img-discography-04@3x.png";
import img5 from "../../../../../Assets/Images/img-discography-05@3x.png";
import img6 from "../../../../../Assets/Images/img-discography-06@3x.png";
import img7 from "../../../../../Assets/Images/img-discography-07@3x.png";
import img8 from "../../../../../Assets/Images/img-discography-08@3x.png";
import Button from "../../../../Common/Button";

import "./styles.scss"
import Image from "next/image";
function Records() {
  return (
    <div className="records">
      <div className="records-container">
        <div className="title">음반</div>

        <div className="list">
          {data.map((item, index) => (
            <div key={index} className="item">
              <div className="img">
                <Image src={item.img} alt="" />
              </div>
              <div className="title">{item.tit}</div>
              <div className="author">{item.author}</div>
            </div>
          ))}
        </div>

        <div className="buttonMore">
          <Button text="더보기" size="normal" type="outline" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default Records;

const data = [
  {
    img: img1,
    tit: "The 6th Album ‘SUNSET’",
    author: "Park Jin Hee",
  },
  {
    img: img2,
    tit: "Single - 봄비 (Spring Rain)",
    author: "Park Jin Hee",
  },
  {
    img: img3,
    tit: "Park Jin Hee - The 5th Alb....",
    author: "Park Jin Hee",
  },
  {
    img: img4,
    tit: "EPS - 데이지 (Daisy)",
    author: "Park Jin Hee",
  },
  {
    img: img5,
    tit: "The 6th Album ‘SUNSET’",
    author: "Park Jin Hee",
  },
  {
    img: img6,
    tit: "Single - 봄비 (Spring Rain)",
    author: "Park Jin Hee",
  },
  {
    img: img7,
    tit: "Park Jin Hee - The 5th Alb....",
    author: "Park Jin Hee",
  },
  {
    img: img8,
    tit: "EPS - 데이지 (Daisy)",
    author: "Park Jin Hee",
  },
];
