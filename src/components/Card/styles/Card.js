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

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    padding: 13px 0;
    ${(restProps) => restProps.spaceBetween === 'true' ?
        (`justify-content: space-between;`)
    :   (`a { margin-right: 13px; }`)
    }
`;

export const FixedWidth = styled.div`
    width: 29%;
    margin-right: 23px;
    margin-bottom: 23px;

    @media(max-width: 672px){
        width: ${(restProps) => restProps.responsiveWide === 'true' ? (`100%;`) : (`42%`)};
    }
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 19px;
`;

export const ContentFrame = styled.div`
    margin-top: 23px;
`;