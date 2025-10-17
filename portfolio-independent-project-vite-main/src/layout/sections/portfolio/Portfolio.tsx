import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider.tsx";
import {Container} from "../../../components/Container.tsx";

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container>
                <Slider/>
            </Container>
        </StyledPortfolio>
    )
}

const StyledPortfolio = styled.section`

`