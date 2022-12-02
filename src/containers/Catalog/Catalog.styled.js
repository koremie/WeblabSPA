import styled from 'styled-components';
import { Button } from 'antd';

export const CardWrapper = styled.div`
    min-height: 60vh;
    display: flex;
    flex-wrap: wrap;
    > div{
        background-color: #eee;
        margin: 0 4% 4% 0;
        border-radius: 20px;
        overflow: hidden;
        flex: 0 0 21%;

        button{
            margin-left: 160px;
            color: #000;
        }
    }
    width: 95%;
    margin: 60px 2% 5% 4%;
`;

export const ApplyButton = styled.button`
    display: inline-block;
    justify-content: space-around;
    width: 100px;
    height: 40px;
    margin: 0 20px;
    font-size: larger;
`;
export const FiltersWrapper = styled.div`
    border-bottom: 2px solid black;
    margin-bottom: 15px;
`;
export const FiltersContainer = styled.div`
    display: flex;
    width: 92%;
    justify-content: start;
    align-items: center;
    margin: 15px auto;

    position: relative;

    input{
        width: 230px;
        height: 40px;
        padding: 0 15px;
        font-size: large;
        margin: 0 15px;
        position: absolute;
        right: 2%;
    }
`;
export const MySelect = styled.select`
    width: 230px;
    height: 40px;
    padding: 0 15px;
    font-size: large;
    margin: 0 15px;
`;