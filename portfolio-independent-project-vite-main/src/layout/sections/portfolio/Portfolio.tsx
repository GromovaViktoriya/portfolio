import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider.tsx";
import {Container} from "../../../components/Container.tsx";
import {Title} from "../../../components/Title.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container className={"portfolio"}>
                <Title text={"Portfolio"}/>
                <Slider/>
            </Container>
        </StyledPortfolio>
    )
}

const StyledPortfolio = styled.section`
    background-image: ${theme.colors.primaryBG};
    
    .portfolio {
        padding: 97px 15px 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h3 {
        font-weight: 400;
        font-size: 48px;
        color: ${theme.colors.secondaryFont};
        margin-bottom: 50px;
    }
`