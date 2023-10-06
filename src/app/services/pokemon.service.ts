import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemon(id: number): Observable<Pokemon> {
    // return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return this.http.get<Pokemon>(
      `https://run.mocky.io/v3/0b9c5279-3cf7-42ed-9078-0c5d3a114ad0`,
    );
  }
}
