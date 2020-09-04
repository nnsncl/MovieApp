import React from 'react'
import { Container, FlexFrame, Frame, Media, Overlay, ThumbContainer } from './styles/ImageSection'

export default function ImageSection({ children, ...restProps }) {
    return <Container {...restProps }>{children}</Container>
}

ImageSection.FlexFrame = function ImageSectionFlexFrame({ children, ...restProps}){
    return <FlexFrame { ...restProps } >{children}</FlexFrame>
}

ImageSection.Frame = function ImageSectionFrame({ children, ...restProps}){
    return <Frame { ...restProps } >{children}</Frame>
}

ImageSection.ThumbContainer = function ImageSectionThumbContainer({ children, ...restProps }) {
    return <ThumbContainer {...restProps}>{children}</ThumbContainer>
}

ImageSection.Media = function ImageSectionMedia({ backgroundImage, children, ...restProps}){
    return <Media { ...restProps } backgroundImage={backgroundImage} >{children}</Media>
}

ImageSection.Overlay = function ImageSectionOverlay({ ...restProps}){
    return <Overlay { ...restProps }/>
}
