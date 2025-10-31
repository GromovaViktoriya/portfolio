import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {Container} from "../../components/Container.ts"
import {S} from "./Footer_Styles.ts";
import React from "react";


const SocialItemsData = [
    {
        iconId: "instagram",
        href: "",
    },
    {
        iconId: "telegram",
        href: "",
    },
    {
        iconId: "vk",
        href: "",
    },
    {
        iconId: "linkedIn",
        href: "",
    }
]


export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.Name>Svetlana</S.Name>
                    <S.SocialList>

                        {SocialItemsData.map((s, index) => {
                            return <S.SocialItem key={index}>
                                <S.SocialLink href={s.href}>
                                    <Icon iconId={s.iconId} width={"21"} height={"21"} viewBox={"0 0 21 21"}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        })}

                    </S.SocialList>
                    <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};

