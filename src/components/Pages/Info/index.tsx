import React from 'react'
import Button from '../../Common/Button'
import HeroSection from '../../Common/HeroSection'
import Partner from './Partner'
import Services from './Services'
import Statistical from './Statistical'
import WithCuoMusic from './WithCuoMusic'
import banner  from "../../../Assets/Images/img-banner-info@3x.png"

function InfoPage() {
  return (
    <main>
      <HeroSection 
      bg={banner}
        title='음원, 음반 배급 안내'
        detail={`큐오뮤직은 아티스트 여러분의 음원 유통을 도와드립니다. 아래 버튼 링크를 \n 눌러 음원 유통 전, 필요한 내용을 등록하고 신청하세요. 내용을 확인한 후,\n 개별 연락을 드립니다.`}
        button={<Button size='normal' text='지금 신청' type='primary' />}
      />
      <Services />
      <Statistical />
      <WithCuoMusic />
      <Partner />
    </main>
  )
}

export default InfoPage