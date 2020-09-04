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
`;

export const FlexFrame = styled.div`
    display: flex;
    align-items: center;
    margin-top: 130px;
`;

export const Media = styled.div`
    width: 100%;
    min-height: 66.6vh;
    background: url(${({ src }) => (src && `${src}`)}) top center / cover no-repeat;
`;

export const Overlay = styled.div`
    width: 100%;
    min-height: 66.6vh;
    background: linear-gradient(0deg, rgba(11,9,10,1) 3%, rgba(11,9,11,0) 100%);
    position: absolute;
`;


export const ThumbContainer = styled.div`
    margin: 0 auto;
    width: 66.6%;

    img {
        width: 100%;
    }

`;