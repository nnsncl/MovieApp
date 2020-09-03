import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #0b090a;
        color: #f3f3f4;
        font-size: 62.5%;
        margin: 0 auto;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Manrope', sans-serif;
        letter-spacing: -1.9px;
    }
`;