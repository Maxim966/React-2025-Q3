import { Component, type ChangeEvent, type ReactNode } from 'react';
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
      <div className="top-control">
        <h2 className="top-control__title">Top controls</h2>
        <CreateInput
          type="text"
          className="top-control__input"
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
    );
  }
}
