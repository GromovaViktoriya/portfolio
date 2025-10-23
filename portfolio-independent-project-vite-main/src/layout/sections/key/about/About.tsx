import Img1 from "../../../../assets/images/main-image1.png";
import Img2 from "../../../../assets/images/main-image3.png";
import Img3 from "../../../../assets/images/main-image2.png";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
import {Icon} from "../../../../components/icon/Icon.tsx";

export const About = () => {
    return (
        <StyledAbout>
            <IconWrapper>
                <Icon iconId={"big-circle"} width={"932px"} height={"932px"} viewBox={"0 0 932px 932px"}/>
            </IconWrapper>
            <IconWrapper>
                <Icon iconId={"middle-circle"} width={"626px"} height={"626px"} viewBox={"0 0 626px 626px"}/>
            </IconWrapper>
            <IconWrapper>
                <Icon iconId={"mini-circle"} width={"496px"} height={"496px"} viewBox={"0 0 496px 496px"}/>
            </IconWrapper>
            <ImageWrapper1>
                <img src={Img1} alt="Portrait1"/>
            </ImageWrapper1>
            <ImageWrapper2>
                <img src={Img2} alt="Portrait2"/>
            </ImageWrapper2>
            <StyledText>
                <StyledSpan>About me</StyledSpan>
                Hello again everyone! So, you already know that my name is Gleb. A little about myself: student,
                18 y.o., athlete-football player, I love creativity since childhood, I live in Donetsk, Ukraine.
                Why programming? Everything is elementary - I like it, the profession of the future, thanks to
                which I can provide myself and fulfill my dream - travel, at the moment I specialize in web
                design, front-end and back-end development, turnkey websites. Why should you choose me? I
                approach each order with great responsibility and love, as I want to make a name for myself,
                exclude plagiarism and negligence, fully study the project, the client and its target audience,
                work for quality, trying to make an order as quickly and uniquely as possible, taking into
                account all the edits and wishes.
                By trusting me, you will get the maximum return for your project, save your nerves and time.
                If you are interested in me , you want to know something more or use my services, then I will
                provide all my contacts below.
            </StyledText>
            <ImageWrapper3>
                <img src={Img3} alt="Portrait3"/>
            </ImageWrapper3>
        </StyledAbout>
    )
}

const IconWrapper = styled.div`
    position: absolute;
    z-index: 0;


    &::before {
        content: "";
        display: inline-block;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
`

const StyledAbout = styled.div`
    display: grid;
    grid-template-columns: 1fr 496px 1fr;
    grid-template-rows: repeat(3, auto);

    position: relative;
    left: 100px;

    ${IconWrapper}:nth-child(1) {
        left: -227px;
        bottom: -75px;
    }

    ${IconWrapper}:nth-child(2) {
        right: 0;
        bottom: -190px;
    }

    ${IconWrapper}:nth-child(3) {
        right: 0;
        top: -95px;
    }

    @media screen and (max-width: 1300px) {
        left: 0;

        ${IconWrapper}:nth-child(1) {
            display: none;
        }
    }

    @media screen and (max-width: 1150px) {
        left: -50px;

        ${IconWrapper}:nth-child(2) {
            right: -50px;
        }

        ${IconWrapper}:nth-child(3) {
            right: -50px;
        }
    }

    @media screen and (max-width: 1100px) {
        left: -75px;

        ${IconWrapper}:nth-child(2) {
            right: -75px;
        }

        ${IconWrapper}:nth-child(3) {
            right: -75px;
        }
    }

    @media screen and (max-width: 1050px) {
        left: -50px;

        ${IconWrapper}:nth-child(2) {
            right: -50px;
        }

        ${IconWrapper}:nth-child(3) {
            right: -50px;
        }
    }

    @media screen and (max-width: 975px) {

        ${IconWrapper}:nth-child(2) {
            right: -95px;
        }

        ${IconWrapper}:nth-child(3) {
            right: -95px;
        }

    }

    @media screen and (max-width: 925px) {
        left: -75px;

        ${IconWrapper}:nth-child(2) {
            right: -125px;
        }

        ${IconWrapper}:nth-child(3) {
            right: -125px;
        }
    }

    @media screen and (max-width: 900px) {
        ${IconWrapper}:nth-child(2) {
            display: none;
        }

        left: 0;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, auto);
        justify-items: center;

        ${IconWrapper}:nth-child(3) {
            right: 70px;
            top: 765px;
        }
    }
    
    @media screen and (max-width: 768px) {
        ${IconWrapper}:nth-child(3) {
            right: 20px;
        }
        
    }

`;

const StyledSpan = styled.span`
    font-family: "NEXT ART", sans-serif;
    font-weight: 400;
    font-size: 48px;
    color: ${theme.colors.font};
`;

const StyledText = styled.p`
    max-width: 496px;
    padding: 63px;
    font-weight: 300;
    font-size: 20px;
    letter-spacing: 0.01em;
    color: ${theme.colors.secondaryFont};
    position: relative;
    z-index: 0;
    border-radius: 14px;
    background-color: #2c2c2c;

    grid-column: 2/3;
    grid-row: 1/3;
    
    span{
        position: absolute;
        left: 49.4%;
        top: -28px;
        transform: translateX(-50%);
        z-index: 1;
        white-space: nowrap;
    }

    @media screen and (max-width: 900px){
        grid-column: 1/2;
        grid-row: 1/3;
    }
`;

const ImageWrapper1 = styled.div`
    max-width: 330px;
    max-height: 378px;
    padding: 29px;

    grid-column: 1/2;
    grid-row: 1/2;
    
    position: relative;
    top: -47px;
    left: 41px;
    z-index: 1;
    border-radius: 14px;
    background-color: #2c2c2c;

    img {
        outline: 6px solid #686868
    }
    @media screen and (max-width: 1150px) {
        & {
            transform: scale(0.8);
            transform-origin: right;
        }
    }
    
    @media screen and (max-width: 900px){
        display: none;
    }
    
`;

const ImageWrapper2 = styled.div`
    max-width: 307px;
    max-height: 339px;
    padding: 29px;
    
    grid-column: 1/2;
    grid-row: 2/3;
    
    position: relative;
    bottom: -85px;
    left: 63px;
    z-index: 1;
    border-radius: 14px;
    background-color: #2c2c2c;

    img {
        outline: 6px solid #686868;
    }

    @media screen and (max-width: 1150px) {
        & {
            transform: scale(0.8);
            transform-origin: right;
        }
    }
    
    @media screen and (max-width: 900px){
        bottom: -308px;
        left: 0;
        transform: scale(1);
    }
`;

const ImageWrapper3 = styled.div`
    max-width: 345px;
    max-height: 485px;
    padding: 29px;

    grid-column: 3/4;
    grid-row: 1/3;
    
    position: relative;
    top: 159px;
    right: 47px;
    z-index: 0;
    border-radius: 14px;
    background-color: #2c2c2c;
    
    img {
        outline: 6px solid #686868;
    }
    
    @media screen and (max-width: 1150px) {
        & {
            transform: scale(0.8);
            transform-origin: left;
        }
    }
    
    @media screen and (max-width: 1110px ) {
        display: none;
    }
`;


