import { Component, type ReactNode } from 'react';
import styles from './spinner.module.css';

export default class Spinner extends Component {
  render(): ReactNode {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Searching Pokemon...</p>
      </div>
    );
  }
}
