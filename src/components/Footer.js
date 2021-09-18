/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { 
  FooterBody,
  Footer,
  FooterSpan,
  FooterLabel,
  FooterSelect,
  FooterOption,
  FooterNote,
  FooterLink
} from "./styles/LoginStyle";
import {FaAngleDown, FaGlobe} from "react-icons/fa"
 

const FooterContainer = () => {
    return (
        <Footer>
          <FooterBody>
            <FooterSpan>
                <FooterLabel>Languages</FooterLabel>
                <FaGlobe/>
                <FooterSelect>
                     <FooterOption
                       value="/en-kr/"
                     >English</FooterOption>
                     <FooterOption
                        value="/ko-kr/"
                     >한국어</FooterOption>
                
                </FooterSelect>
                <FaAngleDown />
            </FooterSpan>
             <FooterLink 
               href="https://disneytermsofuse.com/korean/"
               target="_blank"
             >
             
               이용 약관
               
               </FooterLink>
             <FooterLink 
               href="https://privacy.thewaltdisneycompany.com/ko/"
               target="_blank"
               >개인 정보 처리 방침</FooterLink>
             <FooterLink 
                href="https://preferences-mgr.trustarc.com/?pid=disney01&aid=disneyplus01&type=disneyplus"
                target="_blank"
              >관심 기반 광고</FooterLink>
              
              
             <FooterNote>
                 Disney+의 콘텐츠는 이용하지 못할 수도 있습니다.
                 <br/>
                 © Disney. All Rights Reserved.
             </FooterNote>
          </FooterBody>
        </Footer>
    )
}


export default FooterContainer;