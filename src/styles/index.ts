import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: ${({ theme }) => theme.fonts.primaryFamily};
  }
  body {
    background-color: ${({ theme }) => theme.colors.body};
    margin: 0;
  }
`;

export * from './theme';
