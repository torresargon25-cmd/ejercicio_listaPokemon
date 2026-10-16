import { Component } from '@angular/core';
import { PokemonItem } from '../pokemon-item/pokemon-item';

const POKEMONS: Pokemon [] = [
  {
    id: 1,
    nombre: "Bulbasaur",
    tipo: "Planta / Veneno",
    fase_evolucion: "Semilla (Inicial)",
    peso: 6.9,
    altura: 0.7,
    fotoUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  },
  {
    id: 4,
    nombre: "Charmander",
    tipo: "Fuego",
    fase_evolucion: "Lagartija (Inicial)",
    peso: 8.5,
    altura: 0.6,
    fotoUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
  },
  {
    id: 7,
    nombre: "Squirtle",
    tipo: "Agua",
    fase_evolucion: "Tortuguita (Inicial)",
    peso: 9.0,
    altura: 0.5,
    fotoUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
  },
  {
    id: 25,
    nombre: "Pikachu",
    tipo: "Eléctrico",
    fase_evolucion: "Ratón (Fase 1)",
    peso: 6.0,
    altura: 0.4,
    fotoUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
  },
  {
    id: 150,
    nombre: "Mewtwo",
    tipo: "Psíquico",
    fase_evolucion: "Genético (Legendario)",
    peso: 122.0,
    altura: 2.0,
    fotoUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
  }
]


@Component({
  imports: [PokemonItem],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList {
  pokemonList = POKEMONS;
}
