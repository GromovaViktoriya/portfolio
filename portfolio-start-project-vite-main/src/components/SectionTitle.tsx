import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const SectionTitle = styled.h2`
    font-family: "Josefin Sans", sans-serif;
    text-align: center;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 0.14em;
    margin-bottom: 90px;
    
    position: relative;

    
    &::before {
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent};
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
    }
`;