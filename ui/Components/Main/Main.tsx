
import GlobalStyle from '#/styles/GlobalStyle';
import theme from '#/styles/theme';
import { ThemeProvider } from 'styled-components';
import * as S from './styles';

interface MainProps {
  children: React.ReactNode;
}
const Main = ({ children }: MainProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
  </ThemeProvider>
)

export default Main;
