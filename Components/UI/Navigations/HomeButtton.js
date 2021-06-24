import Link from 'next/Link'
import homeIcon from '../../../assets/round_home_black_24dp.png'

const homeButton = props => {
    return(
        <Link href={'/'}>
        <a>
            <div className="rounded-br-full relative z-10 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 homeButton ">
                <img src={homeIcon} className='w-8 h-8 ml-1' /> 
            </div>
        </a>
        </Link>
    )
}

export default homeButton