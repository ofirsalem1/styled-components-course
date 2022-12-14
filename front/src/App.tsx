import { DefaultTheme, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import { GlobalStyles } from './components/styles/Global';

function App() {
  const theme: DefaultTheme = {
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <h1>Hello</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
