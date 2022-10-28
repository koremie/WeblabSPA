import React from 'react';
import {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
} from "@ant-design/icons";
import Logo from "../../images/logo.png";
import {FooterWrapper, FooterContainer, LogoWrapper, IconsWrapper, StyledIcon, Context} from "./Footer.styled.js";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
      <Context>
          <h3>Branding stuff</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Cumque maiores minus placeat itaque, iusto, eaque qui soluta officia eius illum molestiae fugit. 
               Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.</p>
      </Context>
        <LogoWrapper>
          <img src={Logo} alt="logo" />
        </LogoWrapper>
        <IconsWrapper>
          <StyledIcon component={YoutubeOutlined} />
          <StyledIcon component={TwitterOutlined} />
          <StyledIcon component={LinkedinOutlined} />
          <StyledIcon component={InstagramOutlined} />
        </IconsWrapper>
      </FooterContainer>
      <p>2022 IoT © Copyright all rights reserved</p>
    </FooterWrapper>
  );
};

export default Footer;
