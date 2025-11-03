import styled, {css} from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import AboutImg from "../../../assets/images/about-image.png";
import {TextIcon} from "../../../components/textIcon/TextIcon.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";

type TextIconPropsType = {
    iconId: string,
}

export const Main = () => {
    return (
            <StyledAbout id={"home"}>
                <Container>
                    <FlexWrapper className={"flexAboutWrapper"} justify={"space-between"}>
                        <FlexWrapper className={"aboutTextWrapper"} direction={"column"} gap={"27px"}>
                            <StyledSpan>Hello</StyledSpan>
                            <StyledTitle>I’m Gleb Kostrubov</StyledTitle>
                            <StyledText>
                                I've been doing web design, front-end and back-end development for a year now. Do you need a
                                website design, site layout, or maybe a turnkey website? Then contact me
                            </StyledText>
                            <Button>Contact me</Button>
                        </FlexWrapper>
                        <FlexWrapper>
                            <ImageWrapper>
                                <img src={AboutImg} alt="Main portrait"/>
                                <IconWrapper>
                                    <Icon iconId={"main-circle"} width={"879px"} height={"880px"} viewBox={"0 0 879 880"}/>
                                </IconWrapper>
                                <TextIconWrapper iconId={"ui"}>
                                    <TextIcon iconText={"UI"}/>
                                </TextIconWrapper>
                                <TextIconWrapper iconId={"tag"}>
                                    <TextIcon iconText={"</"}/>
                                </TextIconWrapper>
                                <TextIconWrapper iconId={"ux"}>
                                    <TextIcon iconText={"Ux"}/>
                                </TextIconWrapper>
                                <TextIconWrapper iconId={"ps"}>
                                    <TextIcon iconText={"Ps"}/>
                                </TextIconWrapper>
                            </ImageWrapper>
                        </FlexWrapper>
                    </FlexWrapper>
                </Container>
            </StyledAbout>
    )
}


const StyledAbout = styled.section`
    ${FlexWrapper}.aboutTextWrapper {
        width: 447px;
        align-self: center;
    }
    
    @media (max-width: 1100px) {
        ${FlexWrapper}.flexAboutWrapper {
            flex-direction: column;
            align-items: center;  
            padding-top: 40px;
        }
    }

    @media (max-width: 576px){
        ${FlexWrapper}.flexAboutWrapper {
            padding-top: 0;
        }
        
        ${FlexWrapper}.aboutTextWrapper {
            width: 345px;
        }
        
    }

`
const StyledSpan = styled.span`
    font-weight: 600;
    // font-size: calc( (100vw - Vmin)/(Vmax - Vmin) * (Fmax - Fmin) + Fmin);
    font-size: calc((min(100vw, 1920px) - 375px) / (1920 - 375) * (48 - 27) + 27px);
    line-height: 1;
`

const StyledTitle = styled.h1`
    font-weight: 700;
    // font-size: calc( (100vw - Vmin)/(Vmax - Vmin) * (Fmax - Fmin) + Fmin);
    font-size: calc((min(100vw, 1920px) - 375px) / (1920 - 375) * (72 - 52) + 52px);
    line-height: 1;
`

const StyledText = styled.p`

`
const TextIconWrapper = styled.div<TextIconPropsType>`
    position: absolute;
    z-index: 0;

    ${props => props.iconId === "ui" && css<TextIconPropsType>`
        top: 99px;
        right: 112px;
    `}
    
    ${props => props.iconId === "tag" && css<TextIconPropsType>`
        top: 131px;
        left: -45px;
    `}
    
    ${props => props.iconId === "ux" && css<TextIconPropsType>`
        top: 297px;
        left: -121px;
    `}
    
    ${props => props.iconId === "ps" && css<TextIconPropsType>`
        bottom: 205px;
        left: -90px;
    `}
    
`

const ImageWrapper = styled.div`
    position: relative;
    z-index: 1;
    margin-right: 33px;

    @media (max-width: 1100px){
        margin-right: 0;
        margin-left: 50px;
    }

    img {
        height: 100%;
    }

    @media screen and (max-width: 768px){
        transform: scale(0.8);
        transform-origin: bottom;
        margin-top: -115px;
    }
    
    @media screen and (max-width: 576px){
        transform: scale(0.59);
        margin-top: -270px;
        margin-left: 40px;
    }
    
`

const IconWrapper = styled.div`
    position: absolute;
    z-index: -1;
    left: 49%;
    bottom: 0;
    top: 191px;
    transform: translate(-50%, -50%);
`



