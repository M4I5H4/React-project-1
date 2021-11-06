//shortcut rafce
//if you don't want to destrcuture in the yelloe brackets 
//put props and then in the blue h1 braces put props.title
import PropTypes from 'prop-types' //(stort cut impt)
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1> 
            {/* we cut button from here and put it in it's own componet */}
            <Button color='#4DA6FF' text='Add' onClick={onClick} />
        
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
title: PropTypes.string.isRequired
}  //telling us to expect a string


//above would be <h1 style={headingStyle}>{title}</h1> 
// const headingStyle = {
//     backgroundColor: 'black',
//     color: 'teal'
    
// }

export default Header

