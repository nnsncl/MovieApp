import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LabelLarge = styled.label`
    font-size: 2.3rem;
`;

export const Wide = styled.input`
    font-size: 1.9rem;
    border: 0;
    background: transparent;
    color: white;
    outline: none;
    margin: 9px 0 23px 0;
    transition: opacity .2s;
    opacity: .3;

    &:hover, &:focus {
        opacity: 1;
    }
`;

export const TextAreaWide = styled.textarea`
    font-size: 1.9rem;
    border: 0;
    background: transparent;
    font-family: sans-serif;
    resize: none;
    color: white;
    outline: none;
    margin: 9px 0 23px 0;
    height: auto;

    transition: opacity .2s;
    opacity: .3;

    &:hover, &:focus {
        opacity: 1;
    }
`;