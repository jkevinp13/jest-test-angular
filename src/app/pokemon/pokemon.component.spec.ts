import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PokemonComponent } from './pokemon.component';
import { PokemonService } from '../services/pokemon.service';
import { of } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;
  let compiled: HTMLElement;
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonComponent],
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe de hacer match con el snapshot', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  });

  it('debe de mostrar un loading al inicio', () => {
    const h2 = compiled.querySelector('h2');
    expect(h2?.textContent).toContain('Loading...');
  });

  it('debe de cargar a charizard inmediatamente', () => {
    const dummyPokemon = {
      name: 'charizardo!!',
      sprites: {
        front_default: 'https://charizard.com/sprite.png',
      },
    };

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6');
    expect(request.request.method).toBe('GET');
    request.flush(dummyPokemon);

    fixture.detectChanges();
    // console.log(compiled.innerHTML);
    const h3 = compiled.querySelector('h3');
    const img = compiled.querySelector('img');

    expect(h3?.textContent?.toLocaleLowerCase()).toContain(
      dummyPokemon.name.toLocaleLowerCase(),
    );
    expect(img?.src).toBe(dummyPokemon.sprites.front_default);
    expect(img?.alt).toBe(dummyPokemon.name);
  });

  it('debe de cargar a charizard inmediatamente con jestSpyOn', () => {
    const dummyPokemon = {
      name: 'charizardo!!',
      sprites: {
        front_default: 'https://charizard.com/sprite.png',
      },
    };
    const spyService = jest
      .spyOn(service, 'getPokemon')
      .mockReturnValue(of(dummyPokemon as Pokemon));
    component.ngOnInit();

    fixture.detectChanges();
    // console.log(compiled.innerHTML);
    const h3 = compiled.querySelector('h3');
    const img = compiled.querySelector('img');

    expect(spyService).toHaveBeenCalledWith(6);
    expect(h3?.textContent?.toLocaleLowerCase()).toContain(
      dummyPokemon.name.toLocaleLowerCase(),
    );
    expect(img?.src).toBe(dummyPokemon.sprites.front_default);
    expect(img?.alt).toBe(dummyPokemon.name);
  });
});
