import React from 'react'
import { Container, Form, FlexFrame } from './styles/Form'

export default function FormContainer({ children, ...restProps }) {
    return <Container {...restProps} >{children}</Container>
}

FormContainer.Form = function FormContainerForm({ children, ...restProps }) {
    return <Form {...restProps} >{children}</Form>
}

FormContainer.FlexFrame = function FormContainerFlexFrame({ children, ...restProps }) {
    return <FlexFrame {...restProps} >{children}</FlexFrame>
}