import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../../styles/Theme.ts";

type SkillPropsType = {
    text: string,
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
    marginTop?: string,
}
export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <IconWrapper marginTop={props.marginTop}>
                <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
            </IconWrapper>
            <StyledSpan>{props.text}</StyledSpan>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    width: 270px;
    height: 270px;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.47);
    background: #2a2a2a;
    border-radius: 29px;
`

const IconWrapper = styled.div<SkillPropsType>`
    margin-top: ${props => props.marginTop || "0"};
`
const StyledSpan = styled.span`
    font-weight: 300;
    font-size: 24px;
    color: ${theme.colors.font};
`