import Link from 'next/Link'

import backwardIcon from '../../../assets/round_arrow_back_ios_black_24dp.png'
import fordwardIcon from '../../../assets/round_arrow_forward_ios_black_24dp.png'

const nextPrevButtons = props => {
    let navigationArrows

    if(props.id !== 1 && props.id !== 150){
        navigationArrows = <>
            <Link href={`/pokemon?id=${props.id - 1}`} >
                <a>
                   <div className='p-4' >
                       <img src={backwardIcon} />
                    </div> 
                </a>
            </Link>
            <Link href={`/pokemon?id=${props.id + 1}`} >
                <a>
                   <div className='p-4' >
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
               <div className='p-4' >
                   <img src={fordwardIcon} />
                </div> 
            </a>
        </Link>
    </>
    }else {
        navigationArrows = <>
        <Link href={`/pokemon?id=${props.id - 1}`} >
            <a>
               <div className='p-4' >
                   <img src={backwardIcon} />
                </div> 
            </a>
        </Link>
        <div></div>
    </>
    }

    return(
        <div className='fixed w-screen flex justify-between top-1/2 z-10 '>
            {navigationArrows}
        </div>
    )
}

export default nextPrevButtons