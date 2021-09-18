/* eslint-disable no-undef */
import styled from 'styled-components';

 
export const Container = styled.section`
    // overflow:hidden;
    display:flex;
    flex-direction: column;
    text-align:center;
    height: 100vh;
    
`;

export const Content = styled.div`
   margin-bottom: -220px;
   margin-top:-100px;
   width: 100%;
   position: relative;
 
   box-sizing:border-box;
   display:flex;
   justify-content: center;
   align-items:center;
   flex-direction: column;
   padding: 80px 40px;
   height: 100%;

   @media screen and (max-width:680px) {
    padding: 60px 40px;
   height: 100%;
   margin-bottom: -200px;

 }
`;


export const CTA = styled.div`
   max-width: 650px;
   width: 100%;
   display:flex;
   flex-direction:column;

`;

export const CTALogoOne = styled.img`
   margin-bottom: 12px;
   max-width: 400px;
   margin:auto;
//    min-height: 1px;
   margin-bottom:10px;
   display:block;
   width: 100%;

   @media screen and (max-width: 640px) {
       max-width: 200px;
   }
`;



export const Title = styled.div`
   color: hsla(0, 0%, 95.3%, 1);
   font-size: 28px;
   margin: 0 0 24px;
   line-height: 1.5;
   letter-spacing: 1.5px;

   &:nth-child(1) {
       font-size: 14px;
    }
    
    @media screen and (max-width: 640px) {
        font-size: 20px;
        
    }
    `;
    
export const Description = styled.div`
color: hsla(0, 0%, 95.3%, 1);
font-size: 17px;
   margin: 0 0 24px;
   line-height: 1.5;
   letter-spacing: 1.5px;
   
   @media screen and (max-width: 640px) {
    font-size: 13px;
    font-weight: 400;
    
}
`;

export const BgImage = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  
  `;

export const SignUp = styled.div`
   font-weight: bold;
   color: #f9f9f9;
   background-color:#0063e5;
   margin-bottom: 24px;
   width: 60%;
//    margin:20px 0px 30px 0px;
//    margin:auto;
   position:relative;
   left: 20%;

   
  
   letter-spacing: 1.5px;
   font-size: 18px;
   padding: 16.5px 0;
   border: 1px solid transparent;
   border-radius: 4px;
   cursor: pointer;
   &:hover {
       background-color: #0483ee;
   }
`;


export const CTALogoTwo = styled.img`
   max-width: 600px;
   margin-bottom:0px;
   margin-top: 40px;
   display: inline-block;
   vertical-align:bottom;
   width:100%;

   
`;



export const Footer = styled.div`
// overflow:hidden;
display:flex;
flex-direction: column;
text-align:center;
margin-top:180px;
background:#000;
font-size: 12px;
height: 20%;
z-index:1;
line-height: 22px;

@media screen and (max-width:680px) {
   margin-top:50px;
   height: 22%;
}
`;

export const FooterBody = styled.a`
     width: 100%;
     overflow:hidden;

     @media screen and (max-width: 680px) {
         max-width: 680px;
        //  border:1px solid red;
         
     }
`;

 
export const FooterSpan = styled.span`
    position: relative;
    display: inline-block;
    opacity: .6;
    margin: 0 8px;

    @media screen and (max-width: 680px) {
        // margin 0 -10px;
       
    }
`;

export const FooterLabel = styled.label`
  position: relative;
  display:block;
  pointer-events: none;
  height: 0;
  overflow:hidden;
  opacity: 0;
  border:none;
  z-index: -1;

  label {
      cursor: default;
  }
  
`;
export const FooterSelect = styled.select`
   padding: 0 16px;
   margin: 8px auto;
   z-index: 1;
 
   display: inline-block;
   background-color: transparent;
   cursor: pointer;
   -webkit-appearance: none;
   color:#f9f9f9;
   text-align:center;
   text-align-last:center;
   border:0;
   

   max-width: 1024px;
`;

export const FooterOption = styled.option`
  color:#040714;
  font-weight: normal;
  display:block;
  
  border:none;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
  


`;

export const FooterLink = styled.a`
  z-index:1;
  font-size:14px;
  overflow:hidden;
  margin-top: 20px;
  line-height: 100px;
  margin:20px;
  color:silver;
  text-decoration:none;
  margin-bottom: 0;
  white-space: nowrap;
  
  &:hover {
      color:#fff;
    }
    
   @media screen and (max-width: 680px) {
         font-size:11px;
         
    }

      
    `;


export const FooterNote = styled.div`
  margin-bottom: 20px;     
  
  @media only screen and (min-width: 1025px) {
 
    }

    @media only screen and (min-widght: 1025px) and (max-width:1440px) {
       
    }
`;