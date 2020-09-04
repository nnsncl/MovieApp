import React from 'react'
import { Container, Flex, Padded } from './styles/Heading'

export default function HeadingSection({ children, ...restProps }){
    return <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6, ease: "easeOut", duration: 0.5 }} {...restProps} >{children}</Container>
}

HeadingSection.Padded = function HeadeingSectionPadded({ children, ...restProps }) {
    return <Padded { ...restProps }>{children}</Padded>
}

HeadingSection.Flex = function HeadingSectionFlex({ children, ...restProps }) {
    return <Flex { ...restProps }>{children}</Flex>
}