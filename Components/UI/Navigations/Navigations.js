import HomeButton from './HomeButtton'
import NextPrevButtons from './NextPrevButtons'
import getTWClasses from '../../../utility.js'

const navigations = (props) => {
    const classes = getTWClasses('navigationsComponent')
    return(
        <div className={classes} >
            <HomeButton /> 
            <NextPrevButtons id={props.currentId} /> 
        </div>
    )
}

export default navigations