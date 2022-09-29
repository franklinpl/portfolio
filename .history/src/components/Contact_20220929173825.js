import './Contact.css'
import {useState} from 'react'
import emailjs from 'emailjs-com'
import franklinTransparent from '../pictures/franklin_foto2.jpeg'

function Contact(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [emailSent, setEmailSent] = useState(false)
    const [emailError, setEmailError] = useState(undefined)
    const [loading, setLoading] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()
        setLoading(true)
        let template_params = {
            name: name,
            email: email,
            message: message
        }
        
        emailjs.sendForm('gmail', 'template_jit7267', e.target,'zglz4geI1KghnKy9A', template_params).then((result) => {
            setEmailSent(true)
            console.log(result)
            setName('')
            setEmail('')
            setMessage('')
            setLoading(false)
        }, (error) => {
            console.log(error)
            setEmailError(true)
            setLoading(false)
        })

    }

    return(
        <div className='contact'>
            <h1 id='contact'>Contact</h1>
            <div className='form-and-info'>
                <form onSubmit={submitForm}>
                    {emailSent ? <h3 id='email-sent'>Email sent successfully</h3> : ''}
                    <div className='name'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' id='name' required
                        onChange={(e) => setName(e.target.value)} value={name}/>
                    </div>
                    <div className='email'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='email' required 
                        onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div className='message'>
                        <label htmlFor='message'>Message</label>
                        <textarea name='message' id='message' required
                        onChange={(e) => setMessage(e.target.value)} value={message}/>
                    </div>
                    <button id='contact-button'>{loading ? 'Sending...' : 'Send'}</button>
                    <div className='error-message'>
                        {
                            emailError === true ? <p id='email-not-sent'>An error has occurred. Please contact franklindev30@gmail.com directly through your email provider</p>
                            : emailError === undefined ? '' 
                            : <p id='email-sent'>Your email was sent successfully</p>
                        }
                    </div>
                </form>
                
                <div className='picture-and-info'>
                    <img src={franklinTransparent} alt='developer' id='franklin-picture'/>
                    <p>Franklin Peroza Lima</p>
                    <div className='phone'>
                        <img src='https://img.icons8.com/ios/452/apple-phone.png' alt='smartphone'/>
                        <p style={{marginLeft:5}}>+43 073 100 66467</p>
                    </div>
                    <p>franklindev30@gmail.com</p>
                </div>
            
            </div>
        </div>
    )
}

export default Contact