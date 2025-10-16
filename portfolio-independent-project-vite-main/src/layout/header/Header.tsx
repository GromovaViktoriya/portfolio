import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

const menuItems = ["Home", "About me", "Portfolio", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"} >
                    <Logo/>
                    <Menu menuItems={menuItems}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    padding: 26px 0;
    margin-bottom: 13px;
`