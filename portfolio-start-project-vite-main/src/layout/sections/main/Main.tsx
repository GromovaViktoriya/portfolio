import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import React from "react";
import { S } from './Main_Styles.ts';

export const Main:React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <S.TextWrapper>
                        <S.SmallText>Hi there</S.SmallText>
                        <S.Name>I am <span>Svetlana Dyablo</span></S.Name>
                        <S.MainTitle>A Web Developer.</S.MainTitle>
                    </S.TextWrapper>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


