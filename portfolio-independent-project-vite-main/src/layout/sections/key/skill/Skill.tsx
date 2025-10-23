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

type IconWrapperPropsType = {
    marginTop?: string,
}

export const Skill = (props: SkillPropsType) => {
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
    
    @media (max-width: 768px) {
        width: 220px;
        height: 220px;
        padding: 30px;
    }
    
    @media (max-width: 576px) {
        width: 160px;
        height: 160px;
        padding: 20px;
    }
`

const IconWrapper = styled.div<IconWrapperPropsType>`
    margin-top: ${props => props.marginTop || "0"};

    @media (max-width: 576px) {
       transform: scale(0.6);
        transform-origin: center;
    }
`

const StyledSpan = styled.span`
    font-weight: 300;
    // font-size: calc( (100vw - Vmin)/(Vmax - Vmin) * (Fmax - Fmin) + Fmin);
    font-size:  calc( (min(100vw, 1920px) - 375px)/(1920 - 375) * (24 - 18) + 18px);
    color: ${theme.colors.font};
    @media (max-width: 576px) {
       white-space: nowrap;
    }
`