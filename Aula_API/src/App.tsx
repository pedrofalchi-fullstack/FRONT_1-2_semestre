import React, { useEffect, useState } from "react";
import { getPokemon } from "./types/services/Pokemon";
import type { Pokemon } from "./types/pokemon";


const App = () =>{

  const [search,setSearch] = useState('Pikachu');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  async function loadPokemon(identifier : string){
    try{
      setLoading(true);
      setError('');

      const data = await getPokemon(identifier);
      setPokemon(data);
    }
    catch(err){
      setPokemon(null);
      setError(err instanceof Error ? err.message : "Erro ao buscar o Pokemon!")
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(() =>{
    loadPokemon('Pikachu')
  },[])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    loadPokemon(search);
    
  }

  return(
    <>
      <main>
        <h1>Pokemon com react + typescript + vite</h1>
        <form onSubmit={ handleSubmit }>
          <input
            type="text"
            placeholder="Digite o nome ou o ID do Pokemon"
            value={ search }
            onChange={ (e) => setSearch(e.target.value) }
          />
          <button type="submit">Buscar</button>
        </form>
      </main>
      {
        loading && <p>Carregando...</p>
      }
      {
        error && <p>{ error }</p>
      }
      {
        pokemon && !loading && (
          <section>
            <h2>#{ pokemon.id }</h2>
      {
        pokemon.sprites.front_default && (
          <img
        src={ pokemon.sprites.front_default }
        alt={ pokemon.name }
        />
        )
      }
      <p><strong>Altura: </strong>{ pokemon.height }</p>
      <p><strong>Peso: </strong>{ pokemon.weight }</p>

      <p><strong>Tipos: </strong> </p>

          </section>
        )
      }
    </>
  )
}
export default App;