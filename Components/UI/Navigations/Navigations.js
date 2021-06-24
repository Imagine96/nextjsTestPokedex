import HomeButton from './HomeButtton'
import NextPrevButtons from './NextPrevButtons'

const navigations = (props) => {
    return(
        <div className='absolute top-0 bootom-0 left-0 right-0' >
            <HomeButton /> 
            <NextPrevButtons id={props.currentId} /> 
        </div>
    )
}

export default navigations