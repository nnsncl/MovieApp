import React from 'react'
import {
    Container,
    Image,
    ContentFrame,
    Frame,
    FixedWidth,
    Row
} from './styles/Card'

export default function Card({ children, ...restProps }) {
    return <Container {...restProps} >{children}</Container>
}

Card.FixedWidth = function CardFixedWidth({ children, ...restProps }) {
    return <FixedWidth initial={{ y: -100, opacity: 0, scale: .9 }} animate={{ ease: "easeInOut", duration: 3, y: 0, opacity: 1, scale: 1 }} {...restProps} >{children}</FixedWidth>
}

Card.Frame = function CardGrid({ children, ...restProps }){
    return <Frame {...restProps} >{children}</Frame>
}

Card.Image = function CardImage({ src, alt, ...restProps }) {
    return <Image initial={{ scale: 1, opacity: 0 }} animate={{ duration: 3, opacity: 1 }} whileHover={{ scale: 1.1 }}  src={src} alt={alt} { ...restProps } />
}

Card.ContentFrame = function CardContentFrame({ children, ...restProps }) {
    return <ContentFrame {...restProps} >{children}</ContentFrame>
}

Card.Row = function CardContentRow({ children, ...restProps }) {
    return <Row {...restProps} >{children}</Row>
}