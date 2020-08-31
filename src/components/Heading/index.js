import React from 'react'
import { Container, Title } from './styles/Heading'

export default function HeadingSection({ children, ...restProps }){
    return <Container {...restProps} >{children}</Container>
}

HeadingSection.Title = function HeadingSectionTitle({ children, ...restProps }){
    return <Title {...restProps} >{children}</Title>
}