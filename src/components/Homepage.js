import './Homepage.css'
import {Link} from 'react-router-dom'

function Homepage(){
    return(
        <div className='homepage'>
            <h1>Hi, I am Franklin</h1>
            <p>I develop and deploy frontend React applications.</p>
            <p>Curious about my work? give a look at 
                <Link to='projects'> my current projects</Link>
            </p>
        </div>
    )
}

export default Homepage