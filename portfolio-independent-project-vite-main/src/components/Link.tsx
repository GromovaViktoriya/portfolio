import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const Link = styled.a`
    font-weight: 300;
    font-size: 18px;

    position: relative;
    z-index: 0;
    
    &:hover {
        &::before {
            height: 1px;
        }
    }
    
    &::before {
        content: "";
        display: inline-block;
        height: 0;
        background-image: ${theme.colors.secondaryAccent};

        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        z-index: -1;
    }
`