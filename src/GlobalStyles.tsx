/**
 *
 * GlobalStyle
 *
 * A helper function to generate a special StyledComponent that handles global styles.
 * Normally, styled components are automatically scoped to a local CSS class and therefore isolated from
 * other components. In the case of createGlobalStyle, this limitation is removed and things like CSS
 * resets or base stylesheets can be applied.
 *
 * @see https://styled-components.com/docs/api
 */
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
   h1, h2, h3, h4, h5, h6, p, blockquote, pre,
   a, abbr, acronym, address, big, cite, code,
   del, dfn, em, img, ins, kbd, q, s, samp,
   small, strike, strong, sub, sup, tt, var,
   b, u, i, center,
   dl, dt, dd, ol, ul, li,
   fieldset, form, label, legend,
   table, caption, tbody, tfoot, thead, tr, th, td,
   article, aside, canvas, details, embed,
   figure, figcaption, footer, header, hgroup,
   menu, nav, output, ruby, section, summary,
   time, mark, audio, video {
     margin: 0;
     padding: 0;
     border: 0;
     font-size: 100%;
     font: inherit;
     vertical-align: baseline;
     color: #091E42;
   }
   html, body, #root{
    height: 100%;
  }

   a {
     text-decoration: none;
   }
   /* HTML5 display-role reset for older browsers */
   article, aside, details, figcaption, figure,
   footer, header, hgroup, menu, nav, section {
     display: block;
   }
   ol, ul {
     list-style: none;
   }
   blockquote, q {
     quotes: none;
   }
   blockquote:before, blockquote:after,
   q:before, q:after {
     content: '';
     content: none;
   }
   table {
     border-collapse: collapse;
     border-spacing: 0;
   }
   body {
     line-height: 1;
     margin: 0;
     padding: 0;
     font-family: Open-Sans, Helvetica, Sans-Serif;
     font-size: 16px;
     height: 100%;
     background-color: #F4F5F7;
   }
   input:focus-visible {
      outline: none;
   }
   .chakra-checkbox__control > div {
    background-color: #3182ce;
   }
 `;

export default GlobalStyle;
