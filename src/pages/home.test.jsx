import { render, screen } from '@testing-library/react';
import Home from './home';

test('renders main heading', () => {
  render(<Home />);
  const heading = screen.getByText(/crafting moments/i);
  expect(heading).toBeInTheDocument();
}); 