import React from 'react'
import { Container, Flex, Padded } from './styles/Heading'

export default function HeadingSection({ children, ...restProps }){
    return <Container {...restProps} >{children}</Container>
}

HeadingSection.Padded = function HeadeingSectionPadded({ children, ...restProps }) {
    return <Padded { ...restProps }>{children}</Padded>
}

HeadingSection.Flex = function HeadingSectionFlex({ children, ...restProps }) {
    return <Flex { ...restProps }>{children}</Flex>
}