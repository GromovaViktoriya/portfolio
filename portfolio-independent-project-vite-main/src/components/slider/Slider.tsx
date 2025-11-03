import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

import PortfolioImg from "../../assets/images/portfolio.png";
import {theme} from "../../styles/Theme.ts";
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import {FlexWrapper} from "../FlexWrapper.tsx";
import {Link} from "../Link.tsx";


export const CarouselSlider = () => {
    return (
        <StyledSlider>
            <CarouselProvider
                naturalSlideWidth={970}
                naturalSlideHeight={600}
                totalSlides={3}
                isIntrinsicHeight={true}
                className={"carousel-provider"}
            >
                <ButtonBack className={"btn-wrapper"}>
                    <Icon iconId={"arrow-left"} width={"36px"} height={"36px"} viewBox={"0 0 36 36"}/>
                </ButtonBack>

                <Slider className={"slider-wrapper"}>
                    <Slide index={0} className={"slide"}>
                        <ImageWrapper>
                            <img src={PortfolioImg} alt={"Project 1"}/>
                        </ImageWrapper>
                        <FlexWrapper direction={"column"} gap={"25px"} align={"center"}>
                            <StyledTitle>{"Landing Ice-cream"}</StyledTitle>
                            <StyledText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel."</StyledText>
                            <FlexWrapper gap={"7px"} justify={"center"} align={"center"}>
                                <Link>More</Link>
                                <IconWrapper>
                                    <Icon iconId={"arrow-small"} width={"14px"} height={"10px"} viewBox={"0 0 14 10"}/>
                                </IconWrapper>
                            </FlexWrapper>
                        </FlexWrapper>
                    </Slide>
                    <Slide index={1} className={"slide"}>
                        <ImageWrapper>
                            <img src={PortfolioImg} alt={"Project 1"}/>
                        </ImageWrapper>
                        <FlexWrapper direction={"column"} gap={"25px"} align={"center"}>
                            <StyledTitle>{"Landing Ice-cream"}</StyledTitle>
                            <StyledText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel."</StyledText>
                            <FlexWrapper gap={"7px"} justify={"center"} align={"center"}>
                                <Link>More</Link>
                                <IconWrapper>
                                    <Icon iconId={"arrow-small"} width={"14px"} height={"10px"} viewBox={"0 0 14 10"}/>
                                </IconWrapper>
                            </FlexWrapper>
                        </FlexWrapper>
                    </Slide>
                    <Slide index={2} className={"slide"}>
                        <ImageWrapper>
                            <img src={PortfolioImg} alt={"Project 1"}/>
                        </ImageWrapper>
                        <FlexWrapper direction={"column"} gap={"25px"} align={"center"}>
                            <StyledTitle>{"Landing Ice-cream"}</StyledTitle>
                            <StyledText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel."</StyledText>
                            <FlexWrapper gap={"7px"} justify={"center"} align={"center"}>
                                <Link>More</Link>
                                <IconWrapper>
                                    <Icon iconId={"arrow-small"} width={"14px"} height={"10px"} viewBox={"0 0 14 10"}/>
                                </IconWrapper>
                            </FlexWrapper>
                        </FlexWrapper>
                    </Slide>
                </Slider>

                <ButtonNext className={"btn-wrapper"}>
                    <Icon iconId={"arrow-right"} width={"36px"} height={"36px"} viewBox={"0 0 36 36"}/>
                </ButtonNext>
            </CarouselProvider>
        </StyledSlider>
    )
}



const StyledSlider = styled.div`
    .carousel-provider{
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-template-rows: 1fr;
        align-items: center;
        gap: 40px;

        @media screen and (max-width: 768px) {
            grid-template-columns: repeat(2, auto);
            grid-template-rows: repeat(2, auto);
            column-gap: 81px;
            row-gap: 62px;
        }
        
        .btn-wrapper {
            width: 36px;
            height: 36px;
            cursor: pointer;

            position: relative;
            z-index: 0;

            &::before {
                content: "";
                display: inline-block;
                width: 60px;
                height: 60px;
                border-radius: 100%;
                background-image: ${theme.colors.secondaryAccent};

                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: -1;
            }}
    }
    
    
    .btn-wrapper:first-child {
        margin-left: 12px;

        @media screen and (max-width: 768px) {
            grid-column: 1/2;
            grid-row: 2/3;
            justify-self: flex-end;
        }
    }

        .btn-wrapper:last-child {
        margin-right: 12px;

        @media screen and (max-width: 768px) {
            grid-column: 2/3;
            grid-row: 2/3;
            justify-self: flex-start;
        }
    }

    .slide .carousel__inner-slide{
        padding: 50px;
        border-radius: 29px;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        align-items: center;
        justify-content: space-between;
        gap: 25px;

        background-image: ${theme.colors.secondaryBG};
        box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 0.28);

        a {
            color: #e2a100;
        }

        @media (max-width: 1100px) {
            grid-template-columns: auto;
            grid-template-rows: auto auto;
            justify-items: center;
        }
        
    }
    .slide {
        @media screen and (max-width: 768px) {
            grid-column: 1/3;
            grid-row: 1/2;
        }

        @media screen and (max-width: 576px) {
            padding: 30px 25px;
        }
    }
    
`

const ImageWrapper = styled.div`
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
    
    @media (max-width: 1100px) {
        max-width: 755px;
    }
`

const StyledTitle = styled.span`
    font-weight: 300;
    font-size: 24px;
    color: ${theme.colors.secondaryFont};
`

const IconWrapper = styled.div`

`