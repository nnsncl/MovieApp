import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 9.5rem;
    margin-bottom: 9px;

    @media(max-width: 1056px){
        font-size: 3.6rem;
        margin-bottom: 23px;
    }

`;

export const Subtitle = styled.p`
    font-size: 2.3rem;
    margin-bottom: 36px;

    @media(max-width: 1056px){
        font-size: 1.6rem;
    }
`;

export const Frame = styled.div`
    position: absolute;
    z-index: 2;
    max-width: 66.6%;
    padding-top: 136px;
    margin-top: 136px;
`;

export const FlexFrame = styled.div`
    display: flex;
    align-items: center;
    margin-top: 130px;
`;

export const Media = styled.div`
    width: 100%;
    min-height: 75vh;
    background: url(${({ src }) => (src && `${src}`)}) bottom center / cover no-repeat;
    margin-bottom: 95px;

    @media(max-width: 672px){
        min-height: 50vh;
        margin-bottom: ${(restProps) => restProps.responsiveMargin === 'true' && (`190px`)};
    }

    @media(max-width: 641px){
        min-height: 66.6vh;
    }
`;

export const Overlay = styled.div`
    width: 100%;
    min-height: 75vh;
    background: linear-gradient(0deg, rgba(11,9,10,1) 0%, rgba(11,9,11,0) 166.6%);
    position: absolute;

    @media(max-width: 672px){
        min-height: 50vh;
    }
    @media(max-width: 641px){
        min-height: 66.6vh;
    }
`;


export const ThumbContainer = styled.div`
    margin: 0 auto;
    width: 66.6%;

    img {
        width: 100%;
    }

`;