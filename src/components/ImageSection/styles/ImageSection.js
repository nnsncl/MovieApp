import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Frame = styled.div`
    position: absolute;
    z-index: 2;
    max-width: 66.6%;
    padding-top: 136px;
    margin-top: 136px;
    h1 {
            font-size: 9.5rem;
            margin-bottom: 9px;
        }
    p{
        font-size: 2.3rem;
        margin-bottom: 36px;
    }

    @media(max-width: 1056px){
        max-width: 100%;
        padding-right: 36px;

        h1 {
            font-size: 3.6rem;
            margin-bottom: 23px;
        }
        p{
            font-size: 1.6rem;
        }

    }
`;

export const Media = styled.div`
    position: relative
    width: 100%;
    min-height: 75vh;
    background: url(${({ src }) => (src && `http://image.tmdb.org/t/p/original${src}`)}) bottom center / cover no-repeat;

    @media(max-width: 813px){
        min-height: 90vh;
    }
`;

export const Overlay = styled.div`
    width: 100%;
    min-height: 75vh;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 166.6%);
    position: absolute;

    @media(max-width: 813px){
        min-height: 90vh;
    }
`;
