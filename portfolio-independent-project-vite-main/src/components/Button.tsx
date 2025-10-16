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
`