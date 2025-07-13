import { Component, type ReactNode } from 'react';
import './App.css';
import SearchControls from './components/search-controls';
import Results from './components/results-list';
import type { AppState } from './interfaces/interfaces';

export default class App extends Component<object, AppState> {
  state: AppState = {
    search: '',
  };

  handleSearch = (query: string) => {
    this.setState({ search: query });
  };

  render(): ReactNode {
    return (
      <>
        <SearchControls onSearch={this.handleSearch} />
        <Results request={this.state.search} />
      </>
    );
  }
}
