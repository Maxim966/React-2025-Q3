import { Component, type ReactNode } from 'react';
import type { CreateInputProps } from '../../interfaces/interfaces';

export default class CreateInput extends Component<CreateInputProps> {
  render(): ReactNode {
    return (
      <input
        type={this.props.type}
        id={this.props.id}
        className={this.props.className}
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    );
  }
}
