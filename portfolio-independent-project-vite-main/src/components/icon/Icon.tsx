import iconsSprite from '../../assets/images/svg-sprite.svg'
import styled from "styled-components";

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

export const Icon = (props: IconPropsType) => {
    return (
        <StyledSvg width={props.width || "75"} height={props.height || "75"} viewBox={props.viewBox || "0 0 75 75"}
                   fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </StyledSvg>
    );
};

const StyledSvg = styled.svg`

`