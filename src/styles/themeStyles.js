import { createGlobalStyle } from 'styled-components'
import style from 'styled-theming';

const getBackground = style('mode', {
    light: '#EEE',
    dark: '#111'
  });
  
  const getForeground = style('mode', {
    light: '#111',
    dark: '#EEE'
  });
  
  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${getBackground};
    color: ${getForeground}
  }
  
  #navbar {
    background-color: ${props =>
    props.theme.mode === 'dark' ? '#272727' : '#EFF1F3'};
  }
  
  `

  export default GlobalStyle;