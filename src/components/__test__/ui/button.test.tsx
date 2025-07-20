import { fireEvent, render, screen } from '@testing-library/react';
import CreateButton from '../../ui/button';

describe('CreateButton', () => {
  it('Displays a button with the given text and attributes.', () => {
    const mockOnClick = jest.fn();
    render(
      <CreateButton
        type="button"
        className="class-button"
        onClick={mockOnClick}
        text="Submit"
      />
    );

    const button = screen.getByRole('button', { name: 'Submit' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveClass('class-button');
  });

  it('Checking click events', () => {
    const mockOnClick = jest.fn();
    render(
      <CreateButton
        type="button"
        className="class-button"
        onClick={mockOnClick}
        text="Submit"
      />
    );
    const button = screen.getByText('Submit');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
