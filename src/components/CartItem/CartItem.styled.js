import styled from "styled-components";

export const CardTileWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  border: 2.4px solid #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 #999;
  overflow: hidden;
  margin: 0 0 1%;
  img {
    width: 250px;
    height: 100%;
    margin-right: 70px;
  }
  > h2 {
    font-weight: 600;
    font-size: 27px;
    position: absolute;
    left: 24%;
    top: 38%;
  }
  > h3 {
    font-weight: 600;
    font-size: 24px;
    position: absolute;
    right: 13%;
    top: 39%;
  }
  > button{
    position: absolute;
    right: 3%;
    top: 41%;
    font-weight: 500;
    font-size: 20px;
    background: none;
    color: #f21;
    border: none;
    padding: 0;
    cursor: pointer;
    margin-bottom: -5px;
  }
`;

export const CountWrapper = styled.div`
  position: absolute;
  right: 24%;
  top: 38%;
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-right: 60px;
  h3{
    margin: 0 20px 0px;
    font-size: 25px;
  }
  p{
    font-size: 16px;
    margin-bottom: -30px;
    margin-top: -6px;
  }
`;

export const ChangeButton = styled.button`
  width: 35px;
  height: 35px;
  color: #eee;
  font-size: 22px;
  display: flex;
  background-color: #222;
  border: none;
  justify-content: center;
  align-items: start;
  line-height: 28px;
  border-radius: 20px;
`;