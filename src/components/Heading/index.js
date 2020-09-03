import React from 'react'
import { Container, Flex } from './styles/Heading'

export default function HeadingSection({ children, ...restProps }){
    return <Container {...restProps} >{children}</Container>
}

HeadingSection.Flex = function HeadingSectionFlex({ children, ...restProps }) {
    return <Flex { ...restProps }>{children}</Flex>
}