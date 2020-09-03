import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom';

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
    background: #D00000;
    border-radius: 8px;
    transition: background .2s;

    &:hover {
        background: #9D0208;
    }
`;

export const Large = styled(Button)`
    padding: 23px 36px;
`;

export const Light = styled(ReachRouterLink)`
    display: block;
    appearance: none;
    letter-spacing: -.9px;
    outline: none;
    box-sizing: border-box;
    font-size: 1.9rem;
    font-weight: bold;
    text-decoration: none;
    padding: 13px 19px;
    background: #0b090a;
    cursor: pointer;
    color: #FAFAFA;
    border-radius: 8px;
    transition: ease-out .2s;
    width: fit-content;

    &:hover {
        background: #f3f3f4;
        color: #0b090a;
    }
`;

export const Link = styled(ReachRouterLink)`
    display: block;
    appearance: none;
    letter-spacing: -.9px;
    outline: none;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    color: #FAFAFA;
    transition: color .2s;

    &:hover {
        color: white;
    }
`;
