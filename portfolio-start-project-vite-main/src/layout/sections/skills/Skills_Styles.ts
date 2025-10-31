import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";


//skills
const Skills = styled.section`
position: relative;
`;


//skill
const Skill = styled.div`
    width: 330px;
    flex-grow: 1;
    padding: 42px 20px 40px;
    @media ${theme.media.mobile} {
        padding: 40px 0 52px;
    }
`;

const SkillTitle = styled.h3`
    text-transform: uppercase;
    margin: 70px 0 15px;
`;

const SkillText = styled.p`
    text-align: center;
`;

export const IconWrapper = styled.div`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: rgba(255, 255, 255, 0.1);

        position: absolute;
        left: 50%;
        top: 50%;
        //точка трансформирования установлена по дефолту от центра элемента, перезадаю ее через transform-origin 
        //на верхний левый угол
        transform-origin: top left;
        transform: rotate(45deg) translate(-50%, -50%);
    }
`

export const S = {
    Skills,
    Skill,
    SkillTitle,
    SkillText,
    IconWrapper,
}