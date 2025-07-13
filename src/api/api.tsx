const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon';

export default class Pokemons {
  async getAll(offset = 0, limit = 20) {
    const response = await fetch(
      `${POKEMON_API}?offset=${offset}&limit=${limit}`
    );
    return response.json();
  }

  async getByName(name: string) {
    const response = await fetch(`${POKEMON_API}/${name}`);
    return response.json();
  }
}
