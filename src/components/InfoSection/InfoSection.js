import React from 'react';
import { InfoSec, 
  InfoRow, 
  InfoColumn, 
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSectionElements';
import { Container } from '../../glabalStyles';
import img1 from '../../images/restaurant.jpg';
import './InfoSection.css'




const InfoSection = ({ lightBg, imgStart, lightTopLine, lightTextDesc,
description, headline, lightText, topline, img, alt, start, require }) => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100},
    visible: { opacity: 1, x: 0}
}   


  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper
                variants={fadeLeft}
                initial='hidden'
                animate='visible'
                transition={{ duration: 1 }}
              >
                <TopLine lightTopLine={lightTopLine}>{topline}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <li className="nav-item active">
                  <i className="fas fa-home"></i>Ankara, Esat cadde, 34/3
                </li>
                <li className="nav-item active">
                  <i className="fas fa-envelope"></i>ryzybayramow@gmail.com
                </li>
                <li className="nav-item active">
                  <i className="fas fa-phone-alt"></i>055684686855
                </li>
                
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img1} alt={alt}/>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}
export default InfoSection;