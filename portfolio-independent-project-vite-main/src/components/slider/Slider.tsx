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

                <Slide image={PortfolioImg} title={"Landing Ice-cream"}
                       text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel."}/>

                <ArrowWrapper>
                    <Icon iconId={"arrow-right"} width={"36px"} height={"36px"} viewBox={"0 0 36 36"}/>
                </ArrowWrapper>
            </FlexWrapper>
        </StyledSlider>
    )
}

const StyledSlider = styled.div`

`

const ArrowWrapper = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
   
    background-image: ${theme.colors.secondaryAccent};
    cursor: pointer;
`
