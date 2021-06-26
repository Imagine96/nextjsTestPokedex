import Link from 'next/Link'
import homeIcon from '../../../assets/round_home_black_24dp.png'

import getTWClasses from '../../../utility.js'

const homeButton = props => {

    const [parentClasses, childrensClasses] = getTWClasses('homeButtonComponent')

    return(
        <Link href={'/'}>
        <a>
            <div className={parentClasses}>
                <img src={homeIcon} className={childrensClasses.img.join(' ')} /> 
            </div>
        </a>
        </Link>
    )
}

export default homeButton