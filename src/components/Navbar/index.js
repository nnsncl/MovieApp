import React from 'react'
import { Container, Frame, Logotype } from './styles/Navbar'

export default function Navbar({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Navbar.Frame = function NavbarFrame({ children, ...restProps }) {
    return <Frame { ...restProps }>{children}</Frame>
}

Navbar.Logotype = function NavbarLogotype({ ...restProps }) {
    return <Logotype {...restProps} />
}