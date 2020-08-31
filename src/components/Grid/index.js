import React from 'react'
import { Container, Row, Col } from './styles/Grid'

export default function Grid({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Grid.Row = function GridRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}

Grid.Col = function GridCol({ children, ...restProps }){
    return <Col {...restProps}>{children}</Col>
}   