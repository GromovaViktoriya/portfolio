import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import { S } from "./Contacts_Styles.ts";
import React from "react";

export const Contact : React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"Name"}/>
                    <S.Field placeholder={"Subject"}/>
                    <S.Field as={"textarea"} placeholder={"Message"}/>
                    <Button>Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};

