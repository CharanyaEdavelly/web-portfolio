import { useState } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import '../styles/Contact.css'

const Contact = () => {

  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)


  const [formData, setFormData] = useState({
    name : "",
    email: "",
    message: "",
  })

  const {name, email, message} = formData;

  const handleInputChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
  }

  const handleSubmit = async (e) => {

    e.preventDefault();
    try{
      setLoading(true)
      await axios.post("http://localhost:5500/mail", formData)
      setLoading(false)
      setIsSuccess(true)
      setTimeout(()=> {setIsSuccess(false)}, 2000)
      setFormData({ name: '', email: '', message: '' }); 

    } catch(error) {
      setLoading(false)
      setIsError(true)
      setTimeout(()=> {setIsError(false)}, 2000)
      console.log(error.request, error.message)
      setFormData({ name: '', email: '', message: '' }); 
    }
  }  

  return (
    <>
    <div>
        <NavBar />
        <h1 className='contact-header'>Get In Touch! 👋</h1>
        <div className='contact-desc'>
        <p className='queries-tagline'>For Any Queries and Projects, </p>
        <p className='queries-tagline'>Reach Out to Me - I'm Ready to Help and Deliver!</p>
        </div>
       {isSuccess &&  <p className='response-success'>Message Sent Successfully!</p>}
       {isError && <p className='response-error'>Error Sending Message - Try Again!</p>}
        
        {loading && <div className="loader"></div> }
        <div>
            <form className='form' onSubmit={handleSubmit}>

               <label htmlFor='name'>Name</label>
               <input type="text" name="name" onChange={handleInputChange} value={name} required disabled={loading}/>

               <label htmlFor='email'>Email</label>
               <input type="email" name="email" onChange={handleInputChange} value={email} required disabled={loading}/>

               <label htmlFor='message'>Message</label>
               <textarea name="message" onChange={handleInputChange} value={message} required disabled={loading}/>

               <button type='submit' className='submit' disabled={loading}>Submit</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact