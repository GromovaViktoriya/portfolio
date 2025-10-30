import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import React from "react";
import {S} from './Main_Styles.ts';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <S.TextWrapper>
                        <S.SmallText>Hi there</S.SmallText>
                        <S.Name>I am <span>Svetlana Dyablo</span></S.Name>
                        <S.MainTitle>
                            <p>A Web Developer.</p>
                            <Typewriter
                            options={{
                                strings: ['A Web Developer.', 'A Frontend Developer.', 'A Web Designer.'],
                                autoStart: true,
                                loop: true,
                                delay: 150
                            }}
                        /></S.MainTitle>
                    </S.TextWrapper>
                    <Tilt
                    className="parallax-effect-img"
                    tiltMaxAngleX={40}
                    tiltMaxAngleY={40}
                    perspective={800}
                    transitionSpeed={1500}
                    scale={1.1}
                    gyroscope={true}
                    >
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt=""/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


