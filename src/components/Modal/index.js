import React from 'react'

import { Container, Header, FlexFrame } from './styles/Modal'

export default function ModalContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

ModalContainer.Header = function ModalContainerHeader({ children, ...restProps }) {
    return <Header {...restProps} >{children}</Header>
}

ModalContainer.FlexFrame = function ModalContainerFlexFrame({ children, ...restProps }) {
    return <FlexFrame {...restProps} >{children}</FlexFrame>
}