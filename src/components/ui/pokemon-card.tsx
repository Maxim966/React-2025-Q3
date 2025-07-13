import { Component, type ReactNode } from 'react';
import type { CardProps } from '../../interfaces/interfaces';

export default class Card extends Component<CardProps> {
  render(): ReactNode {
    return (
      <li className="results__item">
        <p className="results__name">{this.props.name}</p>
      </li>
    );
  }
}
