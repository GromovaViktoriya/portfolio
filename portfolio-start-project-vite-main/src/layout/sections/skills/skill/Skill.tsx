import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import { S } from "../Skills_Styles.ts";

type SkillPropsType = {
    iconId: string,
    title: string,
    text: string,
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.IconWrapper>
                    <Icon iconId={props.iconId}/>
                </S.IconWrapper>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.text}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};


