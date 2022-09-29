import './Projects.css'
import pickyourfruitpicture from './pickyourfruit.png'
import nachoose from '../pictures/nachoose.png'
import antoneli from '../pictures/antoneli.png'
import {useState} from 'react'
import expandMore from '../pictures/expandMore.svg'
import expandLess from '../pictures/expandLess.svg'

function Projects(){
    
    const [expandpyf, setExpandPyf] = useState(false)
    const [expandNachoose, setExpandNachoose] = useState(false)
    const [expandAntoneli, setExpandAntoneli] = useState(false)

    return(
        <div className='projects'>
            <h1 id='my-projects'>My projects</h1>

            <div className='paralel-universe'>
            
            <div>
                    <a href='http://nachoose.netlify.app' target='_blank' rel='noreferrer'>
                        <h3 id='div-text'>Nachoose</h3>
                        <img src={nachoose} id='image' alt='nachoose project'/>
                    </a>
                    
                    <p id='retracted-text'>Nachoose is an e-comerce website focused on the preparation of
                        custom made nachos.</p>
                    
                    {expandNachoose ? 
                        <p id='retracted-text'>The complexity of the project lays on
                        each step of the preparation being a component sending information to the
                        redux store. The information is then used at the summary and orders page.
                            <img alt='icon' id='project-icon'  src={expandLess} onClick={()=>setExpandNachoose(false)} ></img>
                        </p>
                :
                <img id='project-icon' alt='icon' src={expandMore} onClick={()=>setExpandNachoose(true)} ></img>
                }
                       
                </div>
                
                <div>
                    <a href='http://pickyourfruit.netlify.app' target='_blank' rel='noreferrer'>
                        <h3 id='div-text'>Pick Your Fruit</h3>
                        <img src={pickyourfruitpicture} id='image' alt='pickyourfruit project'/>
                    </a>
                    
                    <p id='retracted-text'>Pick your fruit is a fictional company that 
                        delivers fresh fruits everyday
                        to the client's address.
                    </p>
                        
                    { expandpyf ?
                    <p id='retracted-text'>
                        As other e-comerce websites, it
                        uses complex logic for adding, sorting and removing products
                        from cart. It was my first complete React/Redux project
                        <img alt='icon' id='project-icon' src={expandLess} onClick={()=>setExpandPyf(false)}></img>
                    </p>  
                    :
                    <img alt='icon' id='project-icon' src={expandMore} onClick={()=>setExpandPyf(true)} ></img>
                    }
                </div>
                
                <div>
                    <a href='http://antoneli.netlify.app' target='_blank' rel='noreferrer'>
                        <h3 id='div-text'>Antoneli</h3>
                        <img src={antoneli} id='image' alt='antoneli project'/>
                    </a>

                    <p id='retracted-text'>Antoneli is a booking website. It simulates bookings
                        for a barber shop and send an email after each appointment.</p>
                    
                    {expandAntoneli ?
                        <p id='retracted-text'>
                            Even though the idea is simple, it uses complex logic
                            to search for previous appointments, lock the appointment date
                            and set new bookings. besides the usual Redux and React Router,
                            I used Reactstrap for some of the design implementation.
                                <img alt='icon' id='project-icon' src={expandLess} onClick={()=>setExpandAntoneli(false)} ></img>
                        </p> 
                    :
                        <img alt='icon' id='project-icon' src={expandMore} onClick={()=>setExpandAntoneli(true)}/>        
                    }     
                </div>
            </div>
        </div>
    )
}

export default Projects