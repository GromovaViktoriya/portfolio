import styled from "styled-components";
import {Menu} from "../../components/menu/Menu.tsx";
import {theme} from "../../styles/Theme.ts";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import {ArrowWrapper} from "../../components/slider/Slider.tsx";

const menuItems = ["Home", "About me", "Portfolio", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterWrapper>
                    <Menu menuItems={menuItems}/>
                    <FlexWrapper direction={"column"} gap={"18px"}>
                        <StyledSpan>Contact:</StyledSpan>
                        <StyledSpan>Email: notitanic33@gmail.com</StyledSpan>
                        <StyledSpan>Inst: notitanic33</StyledSpan>
                        <StyledSpan>Calls: +7 (900) - 121 - 54 -54</StyledSpan>
                    </FlexWrapper>
                    <GridWrapper>
                        <Logo/>
                        <ArrowWrapper>
                            <Icon iconId={"arrow-up"} width={"36px"} height={"36px"} viewBox={"0 0 36 36"}/>
                        </ArrowWrapper>
                        <StyledSmall>Copyright © 2021, Notitanic</StyledSmall>
                    </GridWrapper>
                </FooterWrapper>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    padding: 50px 0;
    background-image: ${theme.colors.secondaryBG};

    nav {
        grid-column: 1/2;

        ul {
            flex-direction: column;
            gap: 18px;
        }
    }
`

const FooterWrapper = styled.div`
    display: grid;
    justify-content: center;
    gap: 56px;
    grid-template-columns: 144px 244px 273px;
    grid-template-rows: repeat(1, 1fr);

    @media screen and (max-width: 830px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        gap: 60px;
    }
    
`
const GridWrapper = styled.div`
    display: grid;
    grid-template-columns:  1fr 1fr;
    grid-template-rows:  1fr;
    justify-items: center;
    align-items: center;
    gap: 57px;
    
    @media screen and (max-width: 830px) {
        div:nth-child(2) {
            justify-self: flex-end;
        }
    }
`

const StyledSpan = styled.span`
    font-weight: 300;
    font-size: 18px;
    color: ${theme.colors.font};
`

const StyledSmall = styled.small`
    font-weight: 300;
    font-size: 18px;
    ${theme.colors.font};
    grid-column: 1/3;
`