import styled from "styled-components";

type TitlePropsType = {
    text: string,
}

export const Title = (props: TitlePropsType) => {
    return (
        <StyledTitle>{props.text}</StyledTitle>
    )
}

const StyledTitle = styled.h3`
    font-weight: 400;
    font-size: 48px;
`