import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import { S } from "./Skills_Styles.ts";
import {Fade} from "react-awesome-reveal";


const skillData = [
    {
        iconId: "html",
        title: "html5",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "css",
        title: "css3",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "react",
        title: "React",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "typescript",
        title: "Typescript",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "styledComponents",
        title: "Styled Components",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "webDesign",
        title: "Web Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    }]

export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade={true} damping={0.1} >
                        {skillData.map((s, index) => {
                            return <Skill iconId={s.iconId} key ={index} title={s.title} text={s.text}/>
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    )
        ;
};


