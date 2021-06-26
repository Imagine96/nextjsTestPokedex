import Layout from "../Components/Layout";
import Navigations from '../Components/UI/Navigations/Navigations'

//ojo esto está al berro, la info debería ser un componente aparte pokeInfo o yo q se pero por la mala estructura de este componente se enreda usar el utility.js

export default function pokemon(props) {
    return(
        <Layout tittle={props.pokemonData.name} >
            <Navigations currentId={props.pokemonData.id} />
            <h1 className='text-4xl mb-2 text-center capitalize'> {props.pokemonData.name} </h1>
            <img className='mx-auto' src={props.pokemonData.imageURL} alt={props.pokemonData.name} />
            <p><span className='font-bold mr-2'> Weight: </span> {props.pokemonData.weight}</p>
            <p><span className='font-bold mr-2'> Height: </span> {props.pokemonData.height}</p>
            {props.pokemonData.abilities.map((ability, index) => {
                return <p className='capitalize' key={index} > <span className='font-bold mr-2'> Ability: </span> {ability.ability.name} </p>
            })}          
            {props.pokemonData.types.map((type , index) => {
                return (
                    <p className='capitalize' key={index} > <span className='font-bold mr-2'> type: </span> {type.type.name} </p>
                )
            })}
        </Layout>
    )
}

export async function getServerSideProps({query}) {
    const id = query.id;
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = await res.json();
        const paddedId = ('00' + (id)).slice(-3);
        const imageURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
        pokemonData.imageURL = imageURL;
        return{
            props: {pokemonData}
        }
    } catch(err){
        console.error(err)
    }
}

