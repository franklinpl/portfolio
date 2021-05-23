import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div className='navbar'>
            
            <div className='navbar-logo'>
                <Link to='/'>
                    <h1>Franklin Peroza</h1>
                </Link>
            </div>
            
            <div className='navbar-components'>
                <Link to='/about'>
                    <p>About</p>
                </Link>
                <Link to='/projects'>
                    <p>My projects</p>
                </Link>
                <Link to='/contact'>
                    <p>Contact</p>
                </Link>  
            </div>
            
        </div>
    )
}

export default Navbar