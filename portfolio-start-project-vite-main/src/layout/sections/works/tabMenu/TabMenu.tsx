import {Link} from "../../../../components/Link.tsx";
import { S } from "../Works_Styles.ts";


export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <S.TabMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <S.ListItem key={index}>
                        <Link href="">{item}</Link>
                    </S.ListItem>
                })}
            </ul>
        </S.TabMenu>
    );
};

