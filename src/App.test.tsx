import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles';

test('renders header logo', async () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
  const headerElement = await waitFor(() => getByTestId('header-logo'));
  expect(headerElement).toBeInTheDocument();
});
