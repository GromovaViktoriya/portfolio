import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {theme} from "../../styles/Theme.ts";


export const Logo = () => {
    return (
        <StyledLogo>
            <Icon iconId={"logo"} width={"65px"} height={"48px"} viewBox={"0 0 65px 48px"}/>
            <StyledLogoSpan>Notitanic</StyledLogoSpan>
        </StyledLogo>
    )
}

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    
    @media screen and (max-width: 830px) {
        justify-self: flex-start;
    }
`

const StyledLogoSpan = styled.span`
    font-family: "Nico Moji", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: ${theme.colors.secondaryFont};
    margin-left: 10px;
`
