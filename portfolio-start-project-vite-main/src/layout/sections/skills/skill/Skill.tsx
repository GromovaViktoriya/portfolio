import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type SkillPropsType = {
    iconId: string,
    title: string,
    text: string,
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={props.iconId}/>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.text}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;

`;

const SkillTitle = styled.h3`
    text-transform: uppercase;
    margin: 70px 0 15px;
`;

const SkillText = styled.p`
    text-align: center;
`;

const IconWrapper = styled.div`
position: relative;
    &::before{
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
        transform: rotate(45deg) translate(-50%, -50%) ;
    }
`