import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import { S } from "./Contacts_Styles.ts";
import React, {ElementRef, useRef} from "react";
import emailjs from '@emailjs/browser';

export const Contact : React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!form.current){
            return
        }

        emailjs
            .sendForm('service_gqjr6kq', 'template_jdxhbvj', form.current, {
                publicKey: 'mo4SZjuzb3I75K9ON',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                });
        e.currentTarget.reset();
    };

    return (
        <S.Contact id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"Name"} name={"user_name"}/>
                    <S.Field required placeholder={"Email"} name={"email"}/>
                    <S.Field required placeholder={"Subject"} name={"subject"}/>
                    <S.Field required as={"textarea"} placeholder={"Message"} name={"message"}/>
                    <Button type="submit">Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};

