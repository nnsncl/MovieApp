import React from 'react'
import { Container, Image, ContentFrame } from './styles/Card'

export default function Card({ children, ...restProps }) {
    return <Container {...restProps} >{children}</Container>
}

Card.Image = function CardImage({ src, alt, ...restProps }) {
    return <Image src={src} alt={alt} { ...restProps } />
}

Card.ContentFrame = function CardContentFrame({ children, ...restProps }) {
    return <ContentFrame {...restProps} >{children}</ContentFrame>
}