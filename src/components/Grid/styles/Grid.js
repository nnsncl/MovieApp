import styled from 'styled-components'

const mediaQueries = {
    sm: (styles) => `
        @media only screen and (max-width: 376px){
            ${styles}
        }
    `,
    md: (styles) => `
        @media only screen and (max-width: 672px){
            ${styles}
        }
    `,
    lg: (styles) => `
        @media only screen and (max-width: 1056px){
            ${styles}
        }
    `,
}

export const Container = styled.div`
    ${(restProps) => restProps.maxFreeze === 'true' && (`
       max-width: 1920px;
    `)}
    margin: 0 auto;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Col = styled.div`
    flex: ${(restProps) => restProps.responsiveSize ? `${restProps.responsiveSize}` : `${restProps.size}`};

    ${(restProps) => restProps.breakPoint && mediaQueries[restProps.breakPoint](`
        display: none;
    `)}

    padding: 13px;
    margin: 0 9px;
`;