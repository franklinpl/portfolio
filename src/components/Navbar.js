import './Navbar.css'

function Navbar(){
    return(
        <div className='navbar'>
            
            <div className='navbar-logo'>
                <h1 id='navbar-logo'>Franklin Peroza</h1>
            </div>
            
            <div className='navbar-components'>
                <a href='#my-projects'>
                    <p id='navbar-projects'>Projects</p>
                </a>
                <a href='#contact'>
                    <p id='navbar-contact'>Contact</p>
                </a>
            </div>
            
        </div>
    )
}

export default Navbar