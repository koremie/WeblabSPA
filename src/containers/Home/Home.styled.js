import styled from 'styled-components';

export const HeadingContainer = styled.div`
    display: flex;
    justify-content: start;
    margin-bottom: 8%;

    img{
        display: block;
        width: 35%;
        height: auto;
        margin-right: 10%;
    }

    .headingContent{
        display: flex;
        flex-direction: column;
        h1{
            margin-bottom: 15px;
        }
    }
`;

export const Wrapper = styled.div`
    width: 90%;
    margin: 5% auto;
`;

export const HomeCardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    margin-bottom: 5%;

    div{
        display: flex;
        flex-direction: column;
        flex: 0 0 27%;
        align-items: center;
        text-align: center;
        margin-bottom: 40px;
        margin-left: 4.5%;

        img{
            display: block;
            width: 100%;
            margin-bottom: 20px;
        }

        h2{
            margin-bottom: 10px;
        }
    }
`;

export const ViewMoreButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10%;
`;

export const ViewMoreButton = styled.button`
    width: 15%;
    height: 50px;
    border-radius: 10px;
    background-color: black;
    border: none;
    align-self: center;
    justify-self: center;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
`;