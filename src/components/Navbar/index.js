import React from 'react'
import { Container, Frame, Logotype, Button } from './styles/Navbar'

export default function Navbar({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Navbar.Frame = function NavbarFrame({ children, ...restProps }) {
    return <Frame { ...restProps }>{children}</Frame>
}

Navbar.Logotype = function NavbarLogotype({ ...restProps }) {
    return <Logotype {...restProps} />
}

Navbar.Button = function NavbarButton({ children, ...restProps }) {
    return <Button { ...restProps }>{children}</Button>
}