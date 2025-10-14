import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <Name>Svetlana</Name>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"instagram"} width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"telegram"} width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"vk"} width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
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
    background-color: #ffac6b;
    min-height: 20vh;
`
const Name = styled.span`

`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`
const SocialItem = styled.li`

`

const SocialLink = styled.a`

`
const Copyright = styled.small`

`