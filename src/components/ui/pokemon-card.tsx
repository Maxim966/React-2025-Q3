import { Component, type ReactNode } from 'react';
import styles from './pokemon-card.module.css';
import type { CardProps } from '../../interfaces/interfaces';

export default class Card extends Component<CardProps> {
  render(): ReactNode {
    return (
      <li className={styles['results__item']}>
        <p className={styles['results__name']}>{this.props.name}</p>
      </li>
    );
  }
}
