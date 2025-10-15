import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {theme} from "../../styles/Theme.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <Name>Svetlana</Name>
                    <SocialList>
                        <SocialItem>
                            <SocialLink href={""}>
                                <Icon iconId={"instagram"} width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink href={""}>
                                <Icon iconId={"telegram"} width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink href={""}>
                                <Icon iconId={"vk"} width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink href={""}>
                                <Icon iconId={"linkedIn"} width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"}/>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                    <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBG};
    padding: 40px 0;

`
const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 3px;
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
const SocialItem = styled.li`

`

const SocialLink = styled.a`
    width: 35px;
    height: 35px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    
    color: ${theme.colors.accent};
    &:hover {
        color: ${theme.colors.primaryBG};
        background-color: ${theme.colors.accent};
        transform: translateY(-4px);
    }
`
const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`