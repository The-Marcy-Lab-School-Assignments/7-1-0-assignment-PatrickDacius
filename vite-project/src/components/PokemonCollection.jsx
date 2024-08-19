import PokemonCard from './PokemonCard';
import PokemonContext from '../context/PokemonContext';
import { useContext } from 'react';

// TODO: import the PokemonContext and useContext

const PokemonCollection = () => {

    // TODO: Replace this to get the pokemon from PokemonContext
    const { allPokemon } = useContext(PokemonContext)
    console.log(allPokemon)

    return (
        <div className="ui six cards">
            {allPokemon?.map(pokemon =>
                <PokemonCard
                    key={pokemon.id}
                    name={pokemon.name}
                    hp={pokemon.hp}
                    front={pokemon.front}
                    back={pokemon.back} />)}
        </div>
    )
}

// const PokemonCard = (key, name, hp, front, back)

export default PokemonCollection