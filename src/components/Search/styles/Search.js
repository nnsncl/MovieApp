import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
export const FieldContainer = styled.div`
    padding: 95px 0 0 0;
`;
export const SearchButton = styled.button``;
export const Field = styled.input`
    font-size: 5.6rem;
    border: 0;
    background: transparent;
    color: white;
    outline: none;
    margin: 9px 0 23px 0;
    transition: opacity .2s;
    opacity: .3;
    width: 100%;

    &:hover, &:focus {
        opacity: 1;
    }
`;
export const Label = styled.label`
    font-size: 1.9rem;
`;
