import styled from 'styled-components'

export const Container = styled.div`
    margin: 25% auto;
    max-width: 414px;

    @media(max-width: 672px) {
        max-width: 100%;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    button {
        margin-bottom: 23px;
    }
`;

export const FlexFrame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;