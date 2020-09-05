import React from 'react'
import { Container, Form, FlexFrame } from './styles/Form'

export default function FormContainer({ isVisible, children, ...restProps }) {
    return (
            <Container
                initial={{ scale: .9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, ease: "easeOut", duration: 0.5 }}
                {...restProps} >
                {children}
            </Container>
    )
}

FormContainer.Form = function FormContainerForm({ children, ...restProps }) {
    return (
        <Form
            initial={{ y: -19, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: .3, ease: "easeOut", duration: 1 }}
            {...restProps} >
            {children}
        </Form>
    )
}

FormContainer.FlexFrame = function FormContainerFlexFrame({ children, ...restProps }) {
    return (
        <FlexFrame
            initial={{ y: -19, opacity: 0 }}
            animate={{ delay: .6, y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
            {...restProps} >
            {children}
        </FlexFrame>
    )
}