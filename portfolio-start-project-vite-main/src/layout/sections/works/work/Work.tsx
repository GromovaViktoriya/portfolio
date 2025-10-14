import styled from "styled-components";

type WorkPropsType = {
    src: string,
    title: string,
    description: string,
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <Link href={"#"}>demo</Link>
            <Link href={"#"}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: #fff291;
    max-width: 540px;
    width: 100%;
`;

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`;

const Link = styled.a`

`;

const Title = styled.h3`

`;

const Description = styled.p`

`;
