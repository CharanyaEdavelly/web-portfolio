import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import PageWrapper from '../components/PageWrapper'
import AnimatedSection from '../components/AnimatedSection'
import ProjectItem from '../components/ProjectItem'
import '../styles/Work.css'

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

const cardVariant = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: i * 0.1,
    },
  }),
}

const Work = () => {
  const projects = [
    {
      images: [h_one, h_two, h_three, h_four],
      title: 'Hardware Hub',
      description:
        'Hardware Hub is an e-commerce web application that lets users customise PC components according to their needs. Users can purchase in-built PCs and individual hardware components. It involves integrating APIs, authenticating users, authorising, mailer functionality, and more. Built using the MERN Stack.',
      skills: ['MongoDB', 'Express.js', 'React', 'Node', 'Custom CSS'],
    },
    {
      images: [well_1, well_2, well_3, well_4, well_5, well_6, well_7, well_8],
      title: 'Employee Wellness',
      description:
        'A capstone project — a wellness platform for employees to register for events, challenges, and benefits. Employees can view program details and register if interested. Includes an admin profile for creating, updating, and deleting programs.',
      skills: ['React', 'Spring Boot', 'MySQL', 'Tailwind CSS'],
    },
    {
      images: [expense_1, expense_2, expense_3, expense_4, expense_5, expense_6, expense_7, expense_8],
      title: 'Expense Management',
      description:
        'A solution for employees to submit and track expense requests — log expenses, upload receipts, and request reimbursements. Managers can review, approve, or reject submissions via a dashboard with a dynamic pie chart.',
      skills: ['React', 'Node', 'Express.js', 'MySQL', 'Tailwind CSS'],
    },
    {
      images: [feedback, rockpaperscissor, tictactoe, weather, quiz, calculator, news],
      title: 'My Lil Projects :)',
      description:
        'A collection of projects built while learning React, JavaScript, CSS, and HTML — including a feedback form, Rock Paper Scissors, Tic Tac Toe, a weather app, a quiz, a calculator, and a static news website.',
      skills: ['React', 'Javascript', 'Bootstrap', 'CSS', 'HTML'],
    },
  ]

  return (
    <PageWrapper>
      <div className="work">
        <NavBar />
        <div className="work-samples">
          <AnimatedSection>
            <h4 className="work-samples-header">WORK SAMPLES</h4>
          </AnimatedSection>

          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
            >
              <ProjectItem project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}

export default Work
