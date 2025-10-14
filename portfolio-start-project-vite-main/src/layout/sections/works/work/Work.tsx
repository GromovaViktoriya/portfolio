import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";
import {theme} from "../../../../styles/Theme.ts";
import {Button} from "../../../../components/Button.tsx";

type WorkPropsType = {
    src: string,
    title: string,
    description: string,
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <Button>View project</Button>
            </ImageWrapper>

            <Description>
                <Title>{props.title}</Title>
                <Text>{props.description}</Text>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: ${theme.colors.secondaryBG};
    max-width: 540px;
    width: 100%;

    ${Link} {
        padding: 0; 
        
        
        & + ${Link} {
            margin-left: 20px;
        }
        
        &::before{
            bottom: -5px;
        }
    }
`;

const ImageWrapper = styled.div`
    position: relative;

    &:hover {
        &::before {
            content: "";
            display: inline-block;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            backdrop-filter: blur(8px);
            background: rgba(0, 0, 0, 0.3);
        }
        
        ${Button} {
            opacity: 1;
        }
    }

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        
        &::before {
            width: 100%;
            height: 100%;
        }
    }
`;

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`;

const Description = styled.div`
    padding: 25px 20px;
`;

const Title = styled.h3`

`;

const Text = styled.p`
    margin: 14px 0 10px;
`;
