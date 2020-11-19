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

  .blog__post {
    background-color: ${props => 
    props.theme.mode === 'dark' ? '#1E1E1E' : '#fff'}
  }

  .blog__post__date span {
    color: ${props => 
    props.theme.mode === 'dark' ? '#fff' : 'rgba(0, 0, 0, .5)'}
  }

  .blog__post__img::before{
    background: ${props => 
    props.theme.mode === 'dark' ?
    'linear-gradient(to right, rgba(18,18,18,.8) 0%, rgba(0,0,0,.8) 100%);':
    'linear-gradient(to right, rgba(79, 172, 254, .8),rgba(0, 242, 254, .8) 100%)'}
  }

  @media screen and (min-width: 768px){
    .nav__link{
      color: ${props => 
      props.theme.mode === 'dark' ? '#fff' : '#111'}
    }
  }
  `

  export default GlobalStyle;