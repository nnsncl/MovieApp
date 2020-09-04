import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.nav`
    width: 100%;
    padding: 36px 23px;
    position: fixed;
    z-index: 3;
    background: linear-gradient(180deg, rgba(11,9,10,1) 0%, rgba(11,9,10,0) 100%);
`;

export const Frame = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Group = styled.div`
    display: flex;
    align-items: center;

    a {
        margin-right: 36px;

        &:last-of-type {
            margin-right: 0;
        }
    }
`;

export const Logotype = styled(ReachRouterLink)`
    font-size: 1.9rem;
    font-weight: 800;
    letter-spacing: -1.3px;
    text-decoration: none;
    color: white;
    padding-bottom: 17px;
    
    &::after {
        content: '•';
        font-size: 3.6rem;
        margin-left: 3px;
        color: red;
        animation: linear .9s infinite alternate Blink;
    }

    @media(max-width: 672px) {
        font-size: 0;
        &::after {
        font-size: 5.6rem;
    }
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