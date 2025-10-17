import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.tsx";
import {Title} from "../../../components/Title.tsx";

export const Key = () => {
    return (
        <StyledKey>
            <Container>
                <StyledSkills>
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
                </StyledSkills>
                <StyledAbout>
                    <Title text={"About me"}/>
                </StyledAbout>
            </Container>
        </StyledKey>
    )
}

const StyledKey = styled.section`
    padding: 113px 0 159px;
`
const StyledSkills = styled.div`
    margin-bottom: 103px;
`
const StyledAbout = styled.div`
    margin-bottom: 114px;
    
`