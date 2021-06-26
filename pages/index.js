import Layout from "../Components/Layout"
import PokeList from '../Components/PokemonList/PokemonList'

import getTWClasses from "../utility";

export default function Home(props) {

  const [parentClasses, childrensClasses] = getTWClasses('homePageComponent')

  return (
    <div>
      <Layout>
        <h1 className={childrensClasses.h1.join(' ')} >Nextjs Pókedex</h1>
        <PokeList pokemon={props.pokemon} />
      </Layout> 
    </div>
  )
}

export async function getStaticProps(context) {
  try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
      const { results } = await res.json();
      const pokemon = results.map((pokeman, index) => {
          const paddedId = ('00' + (index + 1)).slice(-3);

          const imageURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
          return { ...pokeman, imageURL };
      });
      return {
          props: { pokemon },
      };
  } catch (err) {
      console.error(err);
  }
}  