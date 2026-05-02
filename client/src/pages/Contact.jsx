import { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import PageWrapper from '../components/PageWrapper'
import '../styles/Contact.css'

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const { name, email, message } = formData

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await axios.post('https://web-portfolio-server-ten.vercel.app/mail', formData)
      setLoading(false)
      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 2000)
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setLoading(false)
      setIsError(true)
      setTimeout(() => setIsError(false), 2000)
      console.log(error.request, error.message)
      setFormData({ name: '', email: '', message: '' })
    }
  }

  return (
    <PageWrapper>
      <div>
        <NavBar />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="contact-header" variants={itemVariant}>
            Get In Touch! 👋
          </motion.h1>

          <motion.div className="contact-desc" variants={itemVariant}>
            <p className="queries-tagline">For any queries and projects,</p>
            <p className="queries-tagline">reach out to me — I'm ready to help and deliver!</p>
          </motion.div>

          {isSuccess && <p className="response-success">Message sent successfully!</p>}
          {isError && <p className="response-error">Error sending message — please try again.</p>}
          {loading && <div className="loader" />}

          <motion.form className="form" onSubmit={handleSubmit} variants={itemVariant}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleInputChange}
                value={name}
                required
                disabled={loading}
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={handleInputChange}
                value={email}
                required
                disabled={loading}
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                onChange={handleInputChange}
                value={message}
                required
                disabled={loading}
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </PageWrapper>
  )
}

export default Contact
