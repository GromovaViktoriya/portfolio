import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const Button = styled.button`
    width: 200px;
    height: 47px;
    border-radius: 6px;

    background-image: ${theme.colors.secondaryAccent};
    box-shadow: 0 2px 13px 0 rgba(226, 158, 0, 0.48);

    font-family: "NEXT ART", sans-serif;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    position: relative;
    z-index: 0;

    &:before {
        content: '';
        background: linear-gradient(45deg, #ffffff, #f8cb62, #e2a300, #00c4f0, #b2f0ff);
        position: absolute;
        top: -2px;
        left: -2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(4px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing 20s linear infinite;
        opacity: 0;
        transition: opacity .3s ease-in-out;
        border-radius: 10px;
    }

    &:hover:before {
        opacity: 1;
    }

    &:after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: ${theme.colors.secondaryAccent};
        left: 0;
        top: 0;
        border-radius: 10px;
    }
`