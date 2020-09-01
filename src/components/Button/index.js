import React from 'react'

import { Button, Large, Light } from './styles/Button'

export default function ButtonDefault({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

ButtonDefault.Large = function ButtonLarge({ children, ...restProps }) {
    return <Large {...restProps} >{children}</Large>
}

ButtonDefault.Light = function ButtonLight({ children, ...restProps }) {
    return <Light {...restProps} >{children}</Light>
}