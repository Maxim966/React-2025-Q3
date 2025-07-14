import { Component, type ChangeEvent, type ReactNode } from 'react';
import styles from './search-controls.module.css';
import CreateInput from './ui/input';
import CreateButton from './ui/button';
import LocalStorageService from '../services/storage-service';
import type { SearchControlsProps } from '../interfaces/interfaces';

export default class SearchControls extends Component<SearchControlsProps> {
  state = {
    inputValue: '',
  };

  componentDidMount(): void {
    const savedQuery = LocalStorageService.get<string>('');
    this.setState({ inputValue: savedQuery });
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleClick = (): void => {
    LocalStorageService.set(this.state.inputValue);
    this.props.onSearch(this.state.inputValue);
  };

  render(): ReactNode {
    return (
      <div className={styles['top-control']}>
        <h2 className={styles['top-control__title']}>Top controls</h2>
        <div className={styles['top-control__wrapper']}>
          <CreateInput
            type="text"
            className={styles['top-control__input']}
            placeholder="Enter the full name of the Pokemon"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <CreateButton
            type="button"
            className="top-control__button"
            text="Submit"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}
