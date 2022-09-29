import './Homepage.css'
import pcPicture from '../pictures/pc-picture.png'

function Homepage(){

    return(
        <div className='homepage'>
            <div className='homepage-words'>
                <h1>Hi, I am Franklin</h1>
                <p style={{marginTop:-40}}>I am a React developer.</p>
                <p>take a look at
                    <a id='link' href='#my-projects'> my current projects</a>
                </p>
            </div>
            <div className='homepage-mockup'>
                <img src={pcPicture} alt='computer with nachoose project' id='mockup'/>
            </div>
            {/* <img id='franklin-picture' src={picture} alt='The developer'/> */}
        </div>
    )
}

export default Homepage