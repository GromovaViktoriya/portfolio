import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

//slider
const Slider = styled.div`
    border: 1px solid red;
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
  
    text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: inline-block;
    margin: 22px 0 32px;
`

const Pagination = styled.div`

    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;

        & + span {
            margin-left: 5px;
        }
        
        &.active {
            background: ${theme.colors.accent};
            width: 20px;
            border-radius: 20px;
        }
    }
`


export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination,
}