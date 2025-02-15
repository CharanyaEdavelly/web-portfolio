import React from 'react'
import NavBar from '../components/NavBar'
import ProjectItem from '../components/ProjectItem'
import '../styles/Work.css'

// Importing Images
import h_one from '../assets/images/HardwareHub/h_one.jpg'
import h_two from '../assets/images/HardwareHub/h_two.jpg'
import h_three from '../assets/images/HardwareHub/h_three.jpg'
import h_four from '../assets/images/HardwareHub/h_four.png'

import well_1 from '../assets/images/Wellness/well_1.jpg'
import well_2 from '../assets/images/Wellness/well_2.png'
import well_3 from '../assets/images/Wellness/well_3.png'
import well_4 from '../assets/images/Wellness/well_4.png'
import well_5 from '../assets/images/Wellness/well_5.png'
import well_6 from '../assets/images/Wellness/well_6.png'
import well_7 from '../assets/images/Wellness/well_7.png'
import well_8 from '../assets/images/Wellness/well_8.png'

import expense_1 from '../assets/images/Expense/expense_1.png'
import expense_2 from '../assets/images/Expense/expense_2.png'
import expense_3 from '../assets/images/Expense/expense_3.png'
import expense_4 from '../assets/images/Expense/expense_4.png'
import expense_5 from '../assets/images/Expense/expense_5.png'
import expense_6 from '../assets/images/Expense/expense_6.png'
import expense_7 from '../assets/images/Expense/expense_7.png'
import expense_8 from '../assets/images/Expense/expense_8.png'

import feedback from '../assets/images/projectimages/feedback.png'
import rockpaperscissor from '../assets/images/projectimages/rockpaperscissors.png'
import tictactoe from '../assets/images/projectimages/tictactoe.png'
import weather from '../assets/images/projectimages/weather.png'
import quiz from '../assets/images/projectimages/quiz.png'
import calculator from '../assets/images/projectimages/calculator.png'
import news from '../assets/images/projectimages/news.png'


const Work = () => {
  const projects = [
    {
      images: [h_one, h_two, h_three, h_four],
      title: "Hardware Hub",
      description: 'Hardware Hub is an e-commerce web application that lets users to customise PC components according to their needs. Users can also purchase in-built PC and individual hardware components. The project has an intuitive and response UI. It involves integrating APIs, authenticating users, authorising, mailer functionality and others. It is built using MERN Stack.',
      skills: ['MongoDB', 'Express.js', 'React', 'Node', 'Custom CSS']
    },
    {
      images: [well_1, well_2, well_3, well_4, well_5, well_6, well_7, well_8],
      title: "Employee Wellness",
      description: 'As a capstone project, worked on creating a wellness project for employees. In this project, we provide access to employees to register for the wellness events, challenges and benefits, ensuring a work happy place. Employees can find the program details (start date, end date, oraganiser, etc.) and can register if interested. We also created an admin profile for creating, updating and deleting the programs.',
      skills: ['React', 'Spring Boot', 'MySQL', 'Tailwind CSS']
    },
    {
      images: [expense_1, expense_2, expense_3, expense_4, expense_5, expense_6, expense_7, expense_8],
      title: "Expense Management",
      description: 'Expense Management provides a solution for employees to submit and track their expense requests. Employees can log their expenses, upload necessary receipts, and request reimbursements.Managers have access to a expense dashboard where they can review, verify, and approve or reject expense submissions. A dynamic pie chart is integrated into the dashboard, to view the number of expenses approved, rejected and are pending.',
      skills: ['React', 'Node', 'Express.js', 'MySQL', 'Tailwind CSS']
    },
    {
      images: [feedback, rockpaperscissor, tictactoe, weather, quiz, calculator, news],
      title: "My Lil Projects :)",
      description: 'As part of learning React, Javascript, CSS and HTML, I worked on building feedback page that allows user to write a feedback to product/ service using react. I have developed games like Rock Paper Scissors, Tic Tac Toe, a weather application, a quiz project and a calculator using JavaScript. Also created a static news website using custom CSS.',
      skills: ['React', 'Javascript', 'Bootstrap','CSS', 'HTML']

    }
  ]
  return (
    <div className="work">
      <NavBar/>
      
      <div className='work-samples'>
      <h4 className='work-samples-header'>WORK SAMPLES</h4>

      {projects.map((project) => <ProjectItem key={project.projectTitle} project={project}/>)}
    
      </div>
    </div>
  )
}

export default Work