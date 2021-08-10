import Button from './Button'


const NavBar = (props) => {

const onClick = () => {
    console.log('Click')
}

    return (
        <header className='header'>
            <h1 style={{color: 'black', backgroundColor: 'red'}}>{props.title}</h1>
        <br></br>
        <Button color='blue' text='New Entry' onClick={onClick} />
        <Button color='blue' text='Your Journal' onClick={onClick}/>
        </header>
    )
}


NavBar.defaultProps = {
    title: 'Journal Log',
}

export default NavBar
