import React from 'react'
import { Container, Frame, Logotype, Group } from './styles/Navbar'

export default function Navbar({ children, ...restProps }) {
    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            {...restProps}>
            {children}
        </Container>
    )
}

Navbar.Frame = function NavbarFrame({ children, ...restProps }) {
    return (
        <Frame
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3, ease: "easeOut", duration: 0.5 }}
            {...restProps}>
            {children}
        </Frame>
    )
}

Navbar.Group = function NavbarGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Navbar.Logotype = function NavbarLogotype({ ...restProps }) {
    return <Logotype {...restProps} />
}