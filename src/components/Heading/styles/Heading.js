import styled from 'styled-components'

export const Container = styled.div`
    margin: 56px 0;
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

    @media(max-width: 672px){
        font-size: 2.3rem;
    }
`;