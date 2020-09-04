import styled from 'styled-components'

export const Container = styled.div`
    background: white;
    color: #0b090a;
    border-radius: 8px;
    padding: 0 36px 56px 36px;
    with: 100%;
    max-width: 414px;

    @media(max-width: 672px) {
        max-width: 100%;

    }
`;
export const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 23px 0;
`;
export const FlexFrame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;