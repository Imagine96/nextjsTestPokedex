import Link from 'next/Link'

import backwardIcon from '../../../assets/round_arrow_back_ios_black_24dp.png'
import fordwardIcon from '../../../assets/round_arrow_forward_ios_black_24dp.png'
import getTWClasses from '../../../utility'

const nextPrevButtons = props => {

    const [parentClasses, childrensClasses] = getTWClasses('nextPrevButtonsComponent')

    let navigationArrows

    if(props.id !== 1 && props.id !== 150){
        navigationArrows = <>
            <Link href={`/pokemon?id=${props.id - 1}`} >
                <a>
                   <div className={childrensClasses.div.join(' ')} >
                       <img src={backwardIcon} />
                    </div> 
                </a>
            </Link>
            <Link href={`/pokemon?id=${props.id + 1}`} >
                <a>
                   <div className={childrensClasses.div.join(' ')} >
                       <img src={fordwardIcon} />
                    </div> 
                </a>
            </Link>
        </>
    }else if(props.id === 1){
        navigationArrows = <>
        <div></div>
        <Link href={`/pokemon?id=${props.id + 1}`} >
            <a>
               <div className={childrensClasses.div.join(' ')} >
                   <img src={fordwardIcon} />
                </div> 
            </a>
        </Link>
    </>
    }else {
        navigationArrows = <>
        <Link href={`/pokemon?id=${props.id - 1}`} >
            <a>
               <div className={childrensClasses.div.join(' ')} >
                   <img src={backwardIcon} />
                </div> 
            </a>
        </Link>
        <div></div>
    </>
    }

    return(
        <div className={parentClasses}>
            {navigationArrows}
        </div>
    )
}

export default nextPrevButtons