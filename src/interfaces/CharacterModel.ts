// CharacterModel.ts

interface WandModel {
    wood: string;
    core: string;
    length: number;
  }
  
  export interface CharacterModel {
    id: string;
    name: string;
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string;
    yearOfBirth: number;
    wizard: boolean;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: WandModel;
    hogwartsStudent: boolean;
    alive: boolean;
    image: string;
  }
  