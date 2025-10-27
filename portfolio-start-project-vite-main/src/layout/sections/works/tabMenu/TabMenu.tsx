import {Link} from "../../../../components/Link.ts";
import {S} from "../Works_Styles.ts";
import React from "react";


export const TabMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
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

