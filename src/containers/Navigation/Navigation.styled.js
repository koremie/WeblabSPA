import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-bottom: 2px solid #000;
`;

export const LogoWrapper = styled.div`
    position: absolute;
    height: 60px;
    width: 60px;
    left: 70px;
    top: 7px;
    display: flex;
    align-items: center;

    img{
        display: block;
        width: 100%;
        height: auto;
    }
`;

export const LinkingWrapper = styled.div`
    width: 40%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;

    .selected {
        background-color: rgb(220,220,220);
    }

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-self: center;
        margin: 0;
        padding: 0;
        font-weight: 200;
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex-basis: 29%;
        font-size: 22px;
        a {
            color: rgb(40,40,40);
            font-weight: 400;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            border-radius: 30px;
        }
    }
`;