import React, { useState } from 'react'
import { Container, Field, Label, FieldContainer } from './styles/Search'

export default function SearchInput({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

SearchInput.Field = function SearchInputField({ query, setQuery, placeholder, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false)

    return (
        <FieldContainer {...restProps} >
            <Field
                onClick={() => setSearchActive(!searchActive)}
                {...restProps}
                value={query}
                onChange={({ target }) => setQuery(target.value)}
                placeholder={placeholder}
                active={searchActive}
            />
        </FieldContainer>
    )
}

SearchInput.Label = function SearchInutLabel({ htmlFor, children, ...restProps }) {
    return <Label htmlFor={htmlFor} {...restProps} >{children}</Label>
}