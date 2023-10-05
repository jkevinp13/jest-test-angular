import { Component } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-charizard',
  templateUrl: './charizard.component.html',
  styleUrls: ['./charizard.component.scss'],
})
export class CharizardComponent {
  public charizard?: Pokemon;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon(6).subscribe({
      next: (pokemon) => {
        this.charizard = pokemon;
        console.log(pokemon);
      },
      error: console.log,
    });
  }
}
