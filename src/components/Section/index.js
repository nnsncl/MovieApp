import React from 'react'
import { Container, Frame } from './styles/Section'

export default function Section({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Section.Frame = function SectionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}