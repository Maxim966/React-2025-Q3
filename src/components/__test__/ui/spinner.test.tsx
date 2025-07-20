import { render, screen } from '@testing-library/react';
import Spinner from '../../ui/spinner';

describe('Spinner', () => {
  it('Сhecking elements', () => {
    render(<Spinner />);

    const loadingElement = screen.getByRole('loading');
    const spinner = screen.getByTestId('spinner');
    const text = screen.getByText('Searching Pokemon...');

    expect(spinner).toBeInTheDocument();
    expect(loadingElement).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(text.tagName).toBe('P');
  });

  it('Checking for classes', () => {
    render(<Spinner />);
    const loadingElement = screen.getByRole('loading');
    const spinner = screen.getByTestId('spinner');

    expect(loadingElement).toHaveClass('loading');
    expect(spinner).toHaveClass('spinner');
  });
});
