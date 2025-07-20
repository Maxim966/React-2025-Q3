import { fireEvent, render, screen } from '@testing-library/react';
import CreateInput from '../../ui/input';

describe('CreateInput', () => {
  it('Displays input with attribute validation', () => {
    const handleChange = jest.fn();
    render(
      <CreateInput
        type="text"
        id="1"
        className="input"
        value="butterfree"
        placeholder="enter text"
        onChange={handleChange}
      />
    );

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('input');
    expect(inputElement).toHaveAttribute('placeholder', 'enter text');
    expect(inputElement).toHaveAttribute('id', '1');
  });

  it('Checking the initial value', () => {
    const handleChange = jest.fn();
    render(
      <CreateInput
        type="text"
        id="1"
        className="input"
        value="butterfree"
        placeholder="enter text"
        onChange={handleChange}
      />
    );

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveValue('butterfree');
  });

  it('Checking for value changes', () => {
    const handleChange = jest.fn((e) => {
      return e.target.value;
    });
    render(
      <CreateInput
        type="text"
        id="1"
        className="input"
        value="butterfree"
        placeholder="enter text"
        onChange={handleChange}
      />
    );

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'kakuna' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.results[0].value).toBe('kakuna');
    expect(inputElement).toHaveValue('butterfree');
  });
});
