import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <SectionTitle>I Am Available For Freelance</SectionTitle>
                <Button>Hire me</Button>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #e7d9fb;
`