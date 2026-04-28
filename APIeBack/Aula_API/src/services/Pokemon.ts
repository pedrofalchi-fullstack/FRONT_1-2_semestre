import type { Pokemon } from "../pokemon";

const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';

export async function getPokemon(identifier : string | number) : Promise<Pokemon>{

    const value = String(identifier).trim().toLowerCase;

    if(!value){
        throw new Error("Informe o nome ou o ID do Pokemon");
    }

    const response = await fetch(`${ URL_BASE }/${ value }`)

    if(!response.ok){
        throw new Error("Pokemon nao encontrado")
    }

    const data : Pokemon = await response.json()
    return data;

}