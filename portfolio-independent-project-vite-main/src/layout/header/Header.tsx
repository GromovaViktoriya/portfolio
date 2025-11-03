import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper  justify={"space-between"} align={"center"} >
                    <Logo/>
                    <Menu/>
                    <MobileMenu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    padding: 26px 0;
    margin-bottom: 13px;

    nav:first-of-type {
        @media screen and (max-width: 768px) {
            display: none;
        }
    }
`