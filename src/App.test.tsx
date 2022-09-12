import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';

test('renders header logo', async () => {
  const { getByTestId } = render(<App />);
  const headerElement = await waitFor(() => getByTestId('header-logo'));
  expect(headerElement).toBeInTheDocument();
});
