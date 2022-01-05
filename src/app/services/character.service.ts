import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CharacterList } from "../models/character.list";

@Injectable({providedIn: 'root'})
export class CharacterService {
    private baseUrl = 'http://localhost:3000/';
    
    constructor(private http: HttpClient) { }

    getHeroes(character: number | string): Observable<CharacterList> {
        return this.http.get<CharacterList>(this.baseUrl + 'heroes/' + character);
    }

    getVillains(character: number | string): Observable<CharacterList> {
        return this.http.get<CharacterList>(this.baseUrl + 'villains/' + character);
    }

    getAntiHeroes(character: number | string): Observable<CharacterList> {
        return this.http.get<CharacterList>(this.baseUrl + 'antiHeroes/' + character);
    }

    getAliens(character: number | string): Observable<CharacterList> {
        return this.http.get<CharacterList>(this.baseUrl + 'aliens/' + character);
    }

    getHumans(character: number | string): Observable<CharacterList> {
        return this.http.get<CharacterList>(this.baseUrl + 'humans/' + character);
    }
    
}