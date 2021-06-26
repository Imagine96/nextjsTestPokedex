import Link from 'next/Link'
import getTWClasses from '../../utility'

const pokeList = props => {

  const [parentClasses, childrensClasses] = getTWClasses('pokeListComponent')
  
    return(
        <ul>
        {props.pokemon.map((poke, index) => {
          return (<li key={index}>
            <Link href={`/pokemon?id=${index + 1}`}>
                <a className= {parentClasses} >
                    <img className={childrensClasses.img.join(' ')} src={poke.imageURL} alt={poke.name} />
                    <span> # {index + 1} </span>
                    <p className={childrensClasses.p.join(' ')}> {poke.name} </p>
                </a> 
            </Link>
          </li>)
        })}
        </ul>
    )
}
 
export default pokeList