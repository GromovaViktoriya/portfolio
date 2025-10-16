import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type IconPropsType = {
    iconText: string
}

export const TextIcon = (props: IconPropsType) => {
    return (
        <StyledTextIcon>
            <StyledSpan>{props.iconText}</StyledSpan>
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
`

const StyledSpan = styled.span`
    font-family: "NEXT ART", sans-serif;
    font-weight: 700;
    font-size: 36px;
    color: ${theme.colors.accent};
    text-transform: uppercase;
`