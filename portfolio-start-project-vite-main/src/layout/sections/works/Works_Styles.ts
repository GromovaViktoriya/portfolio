import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {theme} from "../../../styles/Theme.ts";
import {Link} from "../../../components/Link.ts";
import {Button} from "../../../components/Button.ts";

//works

const Works = styled.section`
    position: relative;
    ${FlexWrapper} {
        gap: 30px;
    }
`;


//work
const Work = styled.div`
    background-color: ${theme.colors.secondaryBG};
    //width: 330px;
    //flex-grow: 1;

    ${Link} {
        padding: 0; 
        
        
        & + ${Link} {
            margin-left: 20px;
        }
        
        &::before{
            bottom: -5px;
        }
    }
    // @media ${theme.media.desktop} {
    //     max-width: 540px;
    // }
`;

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -40%);
        transition: ${theme.animations.transition};
        
        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        opacity: 0;
        content: "";
        display: inline-block;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        backdrop-filter: blur(8px);
        background: rgba(0, 0, 0, 0.3);
        transition: ${theme.animations.transition};
    }
    
    
    &:hover {
        &::before {
            opacity: 1;
        }
        
        ${Button} {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }

  @media ${theme.media.tablet} {
      &::before {
          opacity: 1;
      }

      ${Button} {
          opacity: 1;
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


//tab menu
const TabMenu = styled.nav`
   
    
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
`

const ListItem = styled.li`
 
`


export const S = {
    Works,
    Work,
    ImageWrapper,
    Image,
    Description,
    Title,
    Text,
    TabMenu,
    ListItem,
}