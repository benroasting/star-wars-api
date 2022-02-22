import { createGlobalStyle } from 'styled-components';
import StarJedi from '../assets/fonts/StarJedi.ttf';
import theboldfont from '../assets/fonts/theboldfont.ttf';
import LibreFranklin from '../assets/fonts/LibreFranklin.ttf';


const Typography = createGlobalStyle`
@font-face {
    font-family: 'StarJedi';
    src: url(${StarJedi});
    font-style: normal;
}
@font-face {
    font-family: 'LibreFranklin';
    src: url(${LibreFranklin});
    font-style: normal;
}
@font-face {
    font-family: 'theboldfont';
    src: url(${theboldfont});
    font-style: normal;
}

`;

export default Typography;