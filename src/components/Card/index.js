import React from 'react'
import { Container, Image, ContentFrame, Grid } from './styles/Card'

export default function Card({ children, ...restProps }) {
    return <Container {...restProps} >{children}</Container>
}

Card.Grid = function CardGrid({ children, ...restProps }){
    return <Grid {...restProps} >{children}</Grid>
}

Card.Image = function CardImage({ src, alt, ...restProps }) {
    return <Image src={src} alt={alt} { ...restProps } />
}

Card.ContentFrame = function CardContentFrame({ children, ...restProps }) {
    return <ContentFrame {...restProps} >{children}</ContentFrame>
}