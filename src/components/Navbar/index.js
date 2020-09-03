import React from 'react'
import { Container, Frame, Logotype, Group } from './styles/Navbar'

export default function Navbar({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Navbar.Frame = function NavbarFrame({ children, ...restProps }) {
    return <Frame { ...restProps }>{children}</Frame>
}

Navbar.Group = function NavbarGroup({ children, ...restProps }) {
    return <Group { ...restProps }>{children}</Group>
}

Navbar.Logotype = function NavbarLogotype({ ...restProps }) {
    return <Logotype {...restProps} />
}