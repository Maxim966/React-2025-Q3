import { Component, type ReactNode } from 'react';
import styles from './input.module.css';
import type { CreateInputProps } from '../../interfaces/interfaces';

export default class CreateInput extends Component<CreateInputProps> {
  render(): ReactNode {
    return (
      <input
        type={this.props.type}
        id={this.props.id}
        className={styles['input']}
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    );
  }
}
