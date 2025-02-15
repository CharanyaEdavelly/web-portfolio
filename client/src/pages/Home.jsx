import NavBar from "../components/NavBar"
import display_picture from '../assets/images/display_picture.jpg'
import "../styles/Home.css"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"

const Home = () => {
  return (
    <div>
        <NavBar />

        <div className="center">
            <img className="display-picture" src={display_picture} alt="Not Found"/>
        </div>

        <h1 className="name-header">Hi, I'm Charanya <span className="emoji">:)</span> </h1>
        <p className="work-header">I am a <strong>Software Developer</strong>  with 1+ Years of Experience in developing applications using  <strong>JavaScript</strong> and <strong>MERN</strong>  (MongoDB, Express.js, React, Node.js) Stack. I am committed to provide innovative solutions that solve real problems as well as grow my expertise in development. I aim to deliver exceptional web applications with great code quality. Expert in building dynamic <strong>Front-end applications</strong> and <strong>Full-stack applications</strong>.</p>

        <div className="center icons"> 

            <a href="https://www.linkedin.com/in/charanya-edavelly-a725721a2" target="_blank" rel="noreferrer">
              <FaLinkedin className="icon" size={40} color="#1882af"/>
            </a>
            <a href="https://github.com/charanyaedavelly" target="_blank" rel="noreferrer">
              <FaGithub className="icon" size={40} color="#1882af"/>
            </a>

        </div>
    </div>
  )
}

export default Home