import {FlexWrapper} from "../../FlexWrapper.tsx";
import {Link} from "../../Link.tsx";
import {Icon} from "../../icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

type SlidePropsType = {
    text: string,
    image: string,
    imageAlt: string,
    title: string,
}

export const Slide = (props:SlidePropsType) => {
    return (
        <StyledSlide>
            <ImageWrapper>
                <img src={props.image} alt={props.imageAlt}/>
            </ImageWrapper>
            <FlexWrapper direction={"column"} gap={"25px"}>
                <StyledTitle>{props.title}</StyledTitle>
                <StyledText>{props.text}</StyledText>
                <FlexWrapper gap={"7px"} justify={"center"} align={"center"}>
                    <Link>More</Link>
                    <IconWrapper>
                        <Icon iconId={"arrow-small"} width={"14px"} height={"10px"} viewBox={"0 0 14 10"}/>
                    </IconWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </StyledSlide>
    )
}

const StyledSlide = styled.div`
    padding: 50px;
    border-radius: 29px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 81px;

    background-image: ${theme.colors.secondaryBG};
    box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 0.28);

    a {
        color: #e2a100;
    }
`

const ImageWrapper = styled.div`
    width: 493px;
    height: 500px;
   

    img {
        width: 100%;
        border-radius: 29px;
    }
`

const StyledText = styled.p`
    max-width: 296px;
    font-weight: 300;
    font-size: 18px;
    text-align: center;
    color: ${theme.colors.secondaryFont};
`

const StyledTitle = styled.span`
    font-weight: 300;
    font-size: 24px;
    color: ${theme.colors.secondaryFont};
`

const IconWrapper = styled.div`

`