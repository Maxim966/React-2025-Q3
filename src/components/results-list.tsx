import { Component, type ReactNode } from 'react';
import styles from './results-list.module.css';
import Card from './ui/pokemon-card';
import Pokemons from '../api/api';
import type { ResultsProps, ResultsState } from '../interfaces/interfaces';
import Spinner from './ui/spinner';

export default class Results extends Component<ResultsProps, ResultsState> {
  pokemonResponse = new Pokemons();

  state: ResultsState = {
    results: [],
    error: null,
    loading: false,
  };

  componentDidMount(): void {
    this.loadPokemons();
  }

  componentDidUpdate(prevProps: ResultsProps): void {
    if (this.props.request !== prevProps.request) {
      this.loadPokemons();
    }
  }

  async loadPokemons() {
    this.setState({ loading: true });
    try {
      let data;
      if (this.props.request.trim() === '') {
        const response = await this.pokemonResponse.getAll();
        data = response.results;
      } else {
        const pokemon = await this.pokemonResponse.getByName(
          this.props.request.toLowerCase()
        );
        data = [pokemon];
      }
      this.setState({ results: data, error: null });
    } catch {
      this.setState({ error: 'Pokemon not found' });
    } finally {
      this.setState({ loading: false });
    }
  }

  render(): ReactNode {
    const { results, error, loading } = this.state;

    if (error) return <div className="error">{error}</div>;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className={styles['results']}>
        <h2 className={styles['results__title']}>Results</h2>
        {results.length > 0 ? (
          <ul className={styles['results__list']}>
            {results.map((pokemon) => (
              <Card key={pokemon.name} name={pokemon.name} />
            ))}
          </ul>
        ) : (
          <div>No Pokemon found</div>
        )}
      </div>
    );
  }
}
