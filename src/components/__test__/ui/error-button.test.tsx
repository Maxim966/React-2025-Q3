import { render, screen } from '@testing-library/react';
import ErrorButton from '../../ui/error-button';

describe('ErrorButton', () => {
  it('renders button', () => {
    render(<ErrorButton className="test-btn" text="Crash App (Test)" />);

    const button = screen.getByRole('button', { name: 'Crash App (Test)' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('test-btn');
  });
});
