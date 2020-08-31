import styled from 'styled-components'

export const Container = styled.nav`
    width: 100%;
    padding: 36px 23px;
`;

export const Frame = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Logotype = styled.p`
    font-size: 1.9rem;
    font-weight: 800;
    letter-spacing: -1.3px;

    &::after {
        content: '•';
        font-size: 3.6rem;
        margin-left: 3px;
        color: red;
        animation: linear .9s infinite alternate Blink;
    }

    @keyframes Blink{
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
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