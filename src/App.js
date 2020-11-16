import { Provider } from 'react-redux';
import store from './store';
import Routes from './router'
import { ThemeProvider } from 'styled-components';
import useTheme from './components/useTheme';

import GlobalStyle  from './styles/themeStyles';



function App() {

  const theme = useTheme();

  return (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
    </Provider>
  );
}

export default App;
