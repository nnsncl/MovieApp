import React from 'react'
import { Container, LabelLarge, Wide, TextAreaWide } from './styles/Input'

export default function Input({ children, ...restProps }) {
    return <Container {...restProps} >{children}</Container>
}

Input.LabelLarge = function({ children, ...restProps }) {
    return <LabelLarge {...restProps} >{children}</LabelLarge>
}
Input.TextAreaWide = function({ ...restProps }) {
    return <TextAreaWide {...restProps} />
}

Input.Wide = function({ ...restProps }) {
    return <Wide {...restProps} />
}