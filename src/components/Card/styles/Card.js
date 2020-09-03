import styled from 'styled-components'

export const Container = styled.div`
    margin-right: 13px;
    margin-bottom: 23px;
    height: auto;
    
    &:last-of-type {
        margin-right: 0;
    }

    @media(max-width: 672px){
        margin-right: 0;
    }
`;

export const Frame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media(max-width: 672px){
        flex-direction: column;    
    }
`;

export const FixedWidth = styled.div`
    width: 25%;
    margin-right: 23px;
    margin-bottom: 23px;

    @media(max-width: 641px) {
        width: 42%;
    }
`;

export const Image = styled.img`
    width: 100%;
`;

export const ContentFrame = styled.div`
    margin-top: 23px;
`;

export const Title = styled.p`
    font-size: 2.3rem;
    font-weight: 600;
    margin: 13px 0 9px 0;
`;

export const Subtitle = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
`;