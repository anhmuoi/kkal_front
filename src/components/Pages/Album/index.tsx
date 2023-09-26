import React from "react";
import HeroSection from "../../Common/HeroSection";
import bg from "../../../Assets/Images/img-banner-album@3x.png";
import ListAlbum from "./ListAlbum";
function AlbumPage() {
  return (
    <main>
      <HeroSection
        bg={bg}
        title="출시 앨범"
        detail={detailBanner}
      />
      <ListAlbum />
    </main>
  );
}

export default AlbumPage;


const detailBanner = `큐오뮤직과 함께하는 아티스트와 음악을 소개합니다. 최근 출시된 앨범들을 \n 확인할 수 있으며, 각 앨범의 트랙목록, 아트스트 프로필, 앨범 아트워크 및 \n 앨범에 대한 설명을 살펴보세요.`