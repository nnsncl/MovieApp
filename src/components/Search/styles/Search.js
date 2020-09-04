import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
export const FieldContainer = styled.div`
    z-index: 2;
    margin-top: -190px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: white;
    padding: 19px 23px;
    border-radius: 8px;

    @media(max-width: 1280px){
        margin-top: 0;
    }

    svg {
        margin-right: 23px;
    }
`;
export const Field = styled.input`
    font-size: 3.6rem;
    border: 0;
    background: transparent;
    color: #0b090a;
    outline: none;
    transition: opacity .2s;
    opacity: .3;
    width: 100%;

    &:hover, &:focus, &:active {
        opacity: 1;
    }

    @media(max-width: 1056px) {
        font-size: 2.3rem;
    }
`;
export const Label = styled.label`
    font-size: 1.9rem;
`;
