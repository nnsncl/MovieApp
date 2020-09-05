import styled from 'styled-components'

export const TitleLarge = styled.h1`
    font-size: 9.5rem;
    margin-bottom: 9px;
    letter-spacing: -1.9px;

    @media(max-width: 1056px){
        font-size: 5.6rem;
        margin-bottom: 23px;
    }

    @media(max-width: 672px){
        font-size: 3.6rem;
        margin-bottom: 23px;
    }
`;
export const TitleMd = styled.h2`
    font-size: 5.6rem;
    font-weight: 800;
    letter-spacing: -1.9px;
    letter-spacing: -1.9px;

    @media(max-width: 672px){
        font-size: 2.3rem;
    }
`;
export const TitleSm = styled.h3`
    font-size: 3.6rem;
    margin-bottom: 23px;
`;
export const TitleXs = styled.h4`
    font-size: 1.9rem;
    font-weight: 800;
    margin-bottom: 13px;
`;
export const TitleXxs = styled.h5`
    font-size: 1.9rem;
`;
export const TitleH6 = styled.h6`
    font-size: 1.9rem;
`;
export const BodyLarge = styled.p`
    font-size: 2.3rem;
    margin-bottom: 23px;
`;
export const Body = styled.p`
    font-size: 1.9rem;
    font-weight: 400;
    color: #D8D8D8;
    opacity: .6;
`;
export const BodySmall = styled.p`
    font-size: 1.3rem;
`;
