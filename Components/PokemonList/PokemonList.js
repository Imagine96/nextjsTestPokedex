import Link from 'next/Link'

const pokeList = props => {
    return(
        <ul>
        {props.pokemon.map((poke, index) => {
          return (<li key={index}>
            <Link href={`/pokemon?id=${index + 1}`}>
                <a className='p-4 border-gray my-4 flex items-center text-lg bg-gray-200'>
                    <img className='w-20 h-20 mx-8' src={poke.imageURL} alt={poke.name} />
                    <span> # {index + 1} </span>
                    <p className='capitalize'> {poke.name} </p>
                </a> 
            </Link>
          </li>)
        })}
        </ul>
    )
}
 
export default pokeList