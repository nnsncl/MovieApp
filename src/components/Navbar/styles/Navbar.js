import styled from 'styled-components'

export const Container = styled.nav`
    width: 100%;
`;

export const Frame = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Logotype = styled.img``;

export const Button = styled.button`
    appearance: none;
    outline: none;
    box-sizing: border-box;
    font-weight: bold;
    border: 0;
    cursor: pointer;
    color: #0d0c22;
    padding: 9px 13px;
    background: #f3f3f4;
    border-radius: 8px;
    transition: background .2s;

    &:hover {
        background: #D8D8D8;
    }
`;