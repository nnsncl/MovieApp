import styled from 'styled-components'

export const Container = styled.div`
    margin: 95px 0 23px 0;
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1``;

export const Subtitle = styled.h2`
    font-size: 5.6rem;
    font-weight: 800;
    letter-spacing: -1.9px;

    @media(max-width: 813px){
        font-size: 3.6rem;
    }
`;

export const Button = styled.button`
    appearance: none;
    letter-spacing: -.9px;
    outline: none;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-weight: bold;
    border: 0;
    cursor: pointer;
    color: #0d0c22;
    padding: 13px 19px;
    background: #f3f3f4;
    border-radius: 8px;
    transition: background .2s;

    &:hover {
        background: #D8D8D8;
    }
`;