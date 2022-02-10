import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CharacterList } from "../models/character.list";

@Injectable({providedIn: 'root'})
export class CharacterService {
    private baseUrl = 'http://localhost:3000/';
    
    constructor(private http: HttpClient) { }

    getData(): Observable<CharacterList> {
        return this.http.get<CharacterList>(this.baseUrl + 'db');
    }
    
}