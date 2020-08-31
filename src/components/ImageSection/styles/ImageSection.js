import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Frame = styled.div`
    position: absolute;
    z-index: 2;
    padding-top: 195px;
    margin-top: 195px;
    h1 {
            font-size: 13.6rem;
            margin-bottom: 23px;
        }
    p{
        font-size: 2.3rem;
    }

    @media(max-width: 1056px){
        max-width: 100%;

        h1 {
            font-size: 5.6rem;
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
    min-height: 90vh;
    background: url(${({ src }) => (src && `http://image.tmdb.org/t/p/original${src}`)}) bottom center / cover no-repeat;
`;

export const Overlay = styled.div`
    width: 100%;
    min-height: 90vh;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 166.6%);
    position: absolute;
`;
