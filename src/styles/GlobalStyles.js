import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
:root{
    --dark-bg: #262626;
    --faraway-blue: #2DC0ED;
    --gold: #FFC300;
}
`;

export default GlobalStyles;