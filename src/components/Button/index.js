import React from 'react'

import { Button, Large, Light, Link } from './styles/Button'

export default function ButtonDefault({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

ButtonDefault.Large = function ButtonLarge({ children, ...restProps }) {
    return <Large {...restProps} >{children}</Large>
}

ButtonDefault.Light = function ButtonLight({ children, ...restProps }) {
    return <Light {...restProps} >{children}</Light>
}

ButtonDefault.Link = function ButtonLink({ children, ...restProps }) {
    return <Link {...restProps} >{children}</Link>
}