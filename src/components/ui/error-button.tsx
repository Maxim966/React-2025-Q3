import { Component, type ReactNode } from 'react';
import type { ErrorButtonProps } from '../../interfaces/interfaces';

export default class ErrorButton extends Component<ErrorButtonProps> {
  state = {
    hasError: false,
  };
  handleClick = (): void => {
    this.setState({ hasError: true });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      throw new Error('Test error for ErrorBoundary');
    }
    return (
      <button className={this.props.className} onClick={this.handleClick}>
        {this.props.text || 'Trow Test Error'}
      </button>
    );
  }
}
