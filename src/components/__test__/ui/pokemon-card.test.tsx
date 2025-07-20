import { render, screen } from '@testing-library/react';
import Card from '../../ui/pokemon-card';

describe('Card', () => {
  it('renders pokemon name', () => {
    render(<Card name="venusaur" />);
    const pokemon = screen.getByText('venusaur');
    expect(pokemon).toBeInTheDocument();
    expect(pokemon).toHaveClass('results__name');
  });
});
