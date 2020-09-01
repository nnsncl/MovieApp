import React from 'react'
import { Container, Flex, Title, Subtitle } from './styles/Heading'

export default function HeadingSection({ children, ...restProps }){
    return <Container {...restProps} >{children}</Container>
}

HeadingSection.Flex = function HeadingSectionFlex({ children, ...restProps }) {
    return <Flex { ...restProps }>{children}</Flex>
}

HeadingSection.Title = function HeadingSectionTitle({ children, ...restProps }){
    return <Title {...restProps} >{children}</Title>
}

HeadingSection.Subtitle = function HeadingSectionSubtitle({ children, ...restProps }){
    return <Subtitle {...restProps} >{children}</Subtitle>
}