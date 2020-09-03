import React from 'react'
import { Chips } from './styles/Chips'

export default function ChipsDefault({ children, ...restProps }) {
    return <Chips {...restProps} >{children}</Chips>
}