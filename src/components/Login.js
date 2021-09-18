/* eslint-disable no-undef */
import React from 'react'
import FooterContainer from './Footer';
import {
    Container,
    Content,
    CTA,
    CTALogoOne,
    Title,
    SignUp,
    Description,
    CTALogoTwo,
    BgImage,
 
} from "./styles/LoginStyle"


const Login = () => {
    return (
        <Container>
          <Content>
              <CTA>
                 <CTALogoOne src={process.env.PUBLIC_URL + "/images/cta-logo-original.svg"} alt="" />
                 <Title>2021년 11월 12일 스트리밍 시작</Title>
                 <Description>월 9,900원으로 디즈니+ 콘텐츠를 즐기세요.</Description>
                <SignUp>최신 소식 받기</SignUp>
                <CTALogoTwo src={process.env.PUBLIC_URL + "/images/cta-logo-two.png"} alt="" />
                  
              </CTA>
              <BgImage src={process.env.PUBLIC_URL + "/images/original.png"} />
          
          </Content>
             <FooterContainer/>
        </Container>
    )
}

export default Login;