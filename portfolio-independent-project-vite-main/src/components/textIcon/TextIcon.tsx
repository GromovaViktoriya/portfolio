import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type IconPropsType = {
    iconText: string
}

export const TextIcon = (props: IconPropsType) => {
    return (
        <StyledTextIcon>
           {props.iconText}
        </StyledTextIcon>
    )
}

const StyledTextIcon = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 100%;
    background-image: ${theme.colors.secondaryBG};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    font-family: "NEXT ART", sans-serif;
    font-weight: 700;
    font-size: 36px;
    color: ${theme.colors.accent};
    text-transform: uppercase;

    &:before {
        content: '';
        background: linear-gradient(45deg, #ffffff, #00c4f0, #b2f0ff);
        position: absolute;
        top: -2px;
        left: -2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(4px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        border-radius: 100%;
        animation: glowing 20s linear infinite;
        opacity: 0;
        transition: opacity .3s ease-in-out;
    }
    &:hover:before {
        opacity: 1;
    }
`