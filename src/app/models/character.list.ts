export class CharacterList {
    heroes: Character[];
    villains: Character[];
    antiHeroes: Character[];
    aliens: Character[];
    humans: Character[];
}

class Character {
    name: string;
    alterEgo: string;
    imagePath: string;
    biography: string;
    caracteristics: Caracteristic;
    abilities: Ability;
    movies: [];
}

class Caracteristic  {
    birth: string;
    weight: {
        value: number;
        unity: string;
    }
    height: {
        value: number;
        unity: string;
    }
    universe: string;
}

class Ability  {
    force: number;
    intelligence: number;
    agility: number;
    endurance: number;
    velocity: number;
}