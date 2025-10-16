import styled from "styled-components";
import {Link} from "../Link.tsx";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <StyledUl>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </StyledUl>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`

`

const StyledUl = styled.ul`
    display: flex;
    gap: 145px;
`

const ListItem = styled.li`

`