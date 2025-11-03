import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.tsx";
import {About} from "./about/About.tsx";
import {theme} from "../../../styles/Theme.ts";
import { Fade } from "react-awesome-reveal";


export const Key = () => {
    return (
        <StyledKey>
            <Container>
                <StyledSkills>
                    <Fade cascade={true}>
                        <FlexWrapper wrap={"wrap"} gap={"30px"} justify={"center"}>
                            <Skill iconId={"product-design"} width={"100px"} height={"80px"} viewBox={"0 0 100 80"}
                                   text={"Product Design"}/>
                            <Skill iconId={"ux-ui-design"} width={"143px"} height={"48px"} viewBox={"0 0 143 48"}
                                   text={"UX/UI Design"} marginTop={"27px"}/>
                            <Skill iconId={"icon-design"} text={"Icon Design"}/>
                            <Skill iconId={"logo-design"} text={"Logo Design"}/>
                            <Skill iconId={"backend"} text={"Backend"}/>
                            <Skill iconId={"frontend"} text={"Frontend"}/>
                            <Skill iconId={"motion"} text={"Motion"}/>
                        </FlexWrapper>
                    </Fade>
                </StyledSkills>
                <About/>
            </Container>
        </StyledKey>
    )
}

const StyledKey = styled.section`
    padding: 113px 0 159px;
    background-image: ${theme.colors.secondaryBG};

    @media (max-width: 900px) {
        padding-bottom: 434px;
    }
    
    @media (max-width: 768px) {
        padding-top: 90px;
    }
`;

const StyledSkills = styled.div`
    margin-bottom: 186px;

    div:nth-child(1) {
        gap: 25px;
    }
    
    @media (max-width: 768px) {
        margin-bottom: 107px;
    }
`;

