import styled from "styled-components";
import Icon from "@ant-design/icons";

export const FooterWrapper = styled.div`
  width: 100%;
  border-top: 2px solid #000;
  p{
    align-self: center;
    text-align: center;
    margin-bottom: 3%;
  }
`;

export const FooterContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 20px;
  margin-bottom: 2%;
  padding-bottom: 2.5%;
  border-bottom: 2px solid #000;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  left: 48%;
  width: 65px;
  height: 65px;
  background-color: black;
  display: flex;
  align-items: center;

    img{
        display: block;
        width: 100%;
        height: auto;
    }
`;

export const Context = styled.div`
  h3{
    margin-bottom: 0;
  }
  flex-basis: 30%;
  p{
    text-align: left;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledIcon = styled(Icon)`
  font-size: 2.2rem;
  margin: 0 0 0 30px;
`;
