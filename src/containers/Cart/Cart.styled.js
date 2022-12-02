import styled from "styled-components";

export const EmptyCartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20vh;
    width: 92%;
    margin: 0 auto;
    > h3{
        font-size: x-large;
        color: #555;
    }
    > button{
        font-weight: 500;
        font-size: 24px;
        background: none;
        color: #222;
        border: none;
        padding: 0;
        cursor: pointer;
    }
`;

export const CartItemsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const CartPageContainer = styled.div`
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 92%;
    margin: 2% auto 4%;
    > h2{
        font-size: xx-large;
        margin-bottom: 30px;
    }
    > h3{
        font-size: xx-large;
        margin: 30px 0 4%;
    }
`;

export const CartPageWrapper = styled.div`
    min-height: 60vh;
    padding: 2% 0 4%;
    background-color: #eee;
`;

export const ButtonsWrapper = styled.div`
    width: 100%;
    margin: 0 0 -4%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
        width: auto;
        height: 40px;
        color: #000;
        font-size: 28px;
        display: flex;
        background-color: #fff;
        border: 2px solid #888;
        padding: 5px 18px;
        justify-content: center;
        align-items: start;
        line-height: 24px;
        border-radius: 8px;
    }
`;