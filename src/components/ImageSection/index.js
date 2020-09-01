import React from 'react'
import { Container, Frame, Media, Overlay } from './styles/ImageSection'

export default function ImageSection({ children, ...restProps }) {
    return <Container {...restProps }>{children}</Container>
}

ImageSection.Frame = function ImageSectionFrame({ children, ...restProps}){
    return <Frame { ...restProps } >{children}</Frame>
}

ImageSection.Media = function ImageSectionMedia({ backgroundImage, children, ...restProps}){
    return <Media { ...restProps } backgroundImage={backgroundImage} >{children}</Media>
}

ImageSection.Overlay = function ImageSectionOverlay({ ...restProps}){
    return <Overlay { ...restProps }/>
}
