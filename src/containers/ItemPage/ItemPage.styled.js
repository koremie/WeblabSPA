import styled from "styled-components";

export const ItemWrapper = styled.div`
    position: relative;
    width: 90%;
    margin: 5% auto 10%;
    display: flex;
    flex-direction: column;
`;

export const ContentWrapper = styled.div`
    img{
        display: block;
        width: 40%;
        height: auto;
        margin: auto 0;
    }
    font-size: large;
    flex: 0 0 100%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
`;

export const DescriptionWrapper = styled.div`
    flex: 0 0 55%;
    height: 400px;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TagWrapper = styled.div`
    width: 50px;
    margin-right: 42px;
`;

export const TagsWrapper = styled.div`
    display: flex;
    justify-content: start;
`;

export const ButtonsWrapper = styled.div`
    position: absolute;
    right: 5%;
    bottom: -14%;
    display: flex;
    justify-content: start;
    button{
        margin: 0 10px;
        font-size: large;
        padding-bottom: 32px;
    }
`;

export const PriceWrapper = styled.div`
    position: absolute;
    left: 10%;
    bottom: -10%;
    font-size: x-large;
`;

export const OtherContentWrapper = styled.div`
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    input{
        margin-left: 20px;
        width: 50px;
    }
`;