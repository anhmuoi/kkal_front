import localFont from 'next/font/local'
 
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
const IowanRoman = localFont({ src: './IowanOldStyleBT-Roman.otf' })
const pretendardVariable = localFont({ src: './PretendardVariable.ttf' })
const pretendardSemiBold = localFont({ src: './Pretendard-SemiBold.otf' })
const pretendardExtraBold = localFont({ src: './Pretendard-ExtraBold.otf' })
const pretendardBold = localFont({ src: './Pretendard-Bold.otf' })
const pretendardMedium = localFont({ src: './Pretendard-Medium.otf' })
 
export { IowanRoman, pretendardVariable, pretendardSemiBold, pretendardExtraBold, pretendardBold, pretendardMedium }