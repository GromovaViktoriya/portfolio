import {Link} from "../../../../components/Link.tsx";
import {Button} from "../../../../components/Button.tsx";
import {S} from "../Works_Styles.ts";
import React from "react";

type WorkPropsType = {
    src: string,
    title: string,
    description: string,
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>View project</Button>
            </S.ImageWrapper>

            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.description}</S.Text>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </S.Description>
        </S.Work>
    );
};


