import React from 'react'
import {
    Container,
    Image,
    ContentFrame,
    Frame,
    Title,
    Subtitle,
    FixedWidth,
    Row
} from './styles/Card'

export default function Card({ children, ...restProps }) {
    return <Container {...restProps} >{children}</Container>
}

Card.FixedWidth = function CardFixedWidth({ children, ...restProps }) {
    return <FixedWidth {...restProps} >{children}</FixedWidth>
}

Card.Frame = function CardGrid({ children, ...restProps }){
    return <Frame {...restProps} >{children}</Frame>
}

Card.Image = function CardImage({ src, alt, ...restProps }) {
    return <Image src={src} alt={alt} { ...restProps } />
}

Card.ContentFrame = function CardContentFrame({ children, ...restProps }) {
    return <ContentFrame {...restProps} >{children}</ContentFrame>
}

Card.Row = function CardContentRow({ children, ...restProps }) {
    return <Row {...restProps} >{children}</Row>
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps} >{children}</Title>
}

Card.Subtitle = function CardSubtitle({ children, ...restProps }) {
    return <Subtitle {...restProps} >{children}</Subtitle>
}