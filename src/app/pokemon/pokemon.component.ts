import { Component } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  public pokemon?: Pokemon;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon(6).subscribe({
      next: (pokemon) => {
        this.pokemon = pokemon;
        // console.log(pokemon);
      },
      error: console.log,
    });
  }
}
