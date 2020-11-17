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
    props.theme.mode === 'dark' ? '#121212' : '#EFF1F3'};
  }

  .svgicon {
    filter: ${props => 
    props.theme.mode === 'dark' ? 'invert(85%) sepia(8%) saturate(19%) hue-rotate(343deg) brightness(89%) contrast(93%)' : 'filter: invert(29%) sepia(6%) saturate(0%) hue-rotate(239deg) brightness(97%) contrast(87%)'}
  }
  
  .home__social-icon {
    color:${props =>
    props.theme.mode === 'dark' ? '#fff' : 'var(--second-color)'}
  }

  .l-header{
    background-color: ${props=>
    props.theme.mode === 'dark' ? '#111' : '#fff'}
  }

  .burguer div {
    background-color: ${props => 
    props.theme.mode === 'dark' ? '#fff' : '#111'}
  }

  @media screen and (min-width: 768px){
    .nav__item {
      color: ${props => 
      props.theme.mode === 'dark' ? '#fff' : '#111'}
    }
  }
  `

  export default GlobalStyle;