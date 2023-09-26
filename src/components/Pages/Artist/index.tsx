import React from 'react'
import HeroSection from '../../Common/HeroSection'
import bg from "../../../Assets/Images/img-banner-artist-01@3x.png"
import ListArtist from './ListArtist'

function Artist() {
  return (
    <main>
        <HeroSection bg={bg} title='아티스트' detail={`큐오뮤직 소속 아티스트들을 소개합니다. 아티스트의 프로필, 간단한 소개 \n 내용, 활동 내역, 출시 앨범을 한 눈에 확인할 수 있습니다.`} />  
        <ListArtist />
    </main>
  )
}

export default Artist