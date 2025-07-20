import { Component, type ReactNode } from 'react';
import styles from './spinner.module.css';

export default class Spinner extends Component {
  render(): ReactNode {
    return (
      <div role="loading" className={styles.loading}>
        <div data-testid="spinner" className={styles.spinner}></div>
        <p>Searching Pokemon...</p>
      </div>
    );
  }
}
