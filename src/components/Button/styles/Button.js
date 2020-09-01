import styled from 'styled-components'

export const Button = styled.button`
    appearance: none;
    letter-spacing: -.9px;
    outline: none;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-weight: bold;
    border: 0;
    cursor: pointer;
    color: white;
    padding: 13px 19px;
    background: #d00000;
    border-radius: 8px;
    transition: background .2s;

    &:hover {
        background: red;
    }
`;

export const Large = styled(Button)`
    padding: 23px 36px;
`;

export const Light = styled(Button)`

    background: #FAFAFA;
    color: black;
    &:hover {
        background: white;
    }
`;
