import React, { useState } from 'react'
import { Container, Field, Label, FieldContainer } from './styles/Search'

export default function SearchInput({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

SearchInput.Field = function SearchInputField({ query, setQuery, placeholder, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false)

    return (
        <FieldContainer {...restProps} initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .3, ease: "easeOut", duration: 0.5 }} >
            <label htmlFor='search-input' >
                <svg aria-hidden="true" height='36px' width='36px' transform="rotate(360)" viewBox="0 0 512 512">
                    <defs />
                    <path fill="none" stroke="#0b090a" strokeMiterlimit="10" strokeWidth="32" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" />
                    <path fill="none" stroke="#0b090a" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448" />
                </svg>
            </label>
            <Field
                name='search-input'
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