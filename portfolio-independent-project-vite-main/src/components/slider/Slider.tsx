import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {Icon} from "../icon/Icon.tsx";
import {Slide} from "./Slide/Slide.tsx";

import PortfolioImg from "../../assets/images/portfolio.png";
import {theme} from "../../styles/Theme.ts";


export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper gap={"40px"} align={"center"} justify={"space-between"}>
                <ArrowWrapper>
                    <Icon iconId={"arrow-left"} width={"36px"} height={"36px"} viewBox={"0 0 36 36"}/>
                </ArrowWrapper>

                <Slide image={PortfolioImg} imageAlt={"Project 1"} title={"Landing Ice-cream"}
                       text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel."}/>

                <ArrowWrapper>
                    <Icon iconId={"arrow-right"} width={"36px"} height={"36px"} viewBox={"0 0 36 36"}/>
                </ArrowWrapper>
            </FlexWrapper>
        </StyledSlider>
    )
}


export const ArrowWrapper = styled.div`
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
    }
`

const StyledSlider = styled.div`
    ${ArrowWrapper}:first-child {
        margin-left: 12px;
    }

    ${ArrowWrapper}:last-child {
        margin-right: 12px;
    }
`
