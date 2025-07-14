import { Component, type ReactNode } from 'react';
import type { CreateButtonProps } from '../../interfaces/interfaces';

export default class CreateButton extends Component<CreateButtonProps> {
  render(): ReactNode {
    return (
      <button
        type={this.props.type}
        className={this.props.className}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}
