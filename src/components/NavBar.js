const NavBar = (props) => {
    return (
        <header>
            <h1 style={{color: 'black', backgroundColor: 'red'}}>{props.title}</h1>
        </header>
    )
}


NavBar.defaultProps = {
    title: 'Journal Log',
}

export default NavBar
