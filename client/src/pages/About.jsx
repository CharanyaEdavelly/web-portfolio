import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import PageWrapper from '../components/PageWrapper'
import AnimatedSection from '../components/AnimatedSection'
import WorkItem from '../components/WorkItem'
import EducationItem from '../components/EducationItem'
import CertificateItem from '../components/CertificateItem'
import Resume from '../assets/docs/Resume.pdf'
import '../styles/About.css'

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}


const About = () => {
  const workData = [
    {
      designation: 'Member Technical',
      company: 'ADP Private Limited',
      duration: 'Aug 2023 - Present',
      location: 'Hyderabad, India',
      responsibilities:
        'Enhanced user experience through implementing user friendly and website responsiveness. Managed component and application level state using React hooks and Redux ensuring efficient state management and improving performance. Integrated RESTful APIs using axios and handled asynchronous operations upgrading application functionality.',
    },
  ]

  const education = [
    {
      degree: 'B.tech in Computer Science and Engineering',
      schoolName: 'Sreyas Institute Of Engineering and Technology',
      duration: '2019 - 2023',
      location: 'Hyderabad, India',
      score: 'CGPA - 7.5 / 10',
    },
    {
      degree: 'Intermediate in MPC',
      schoolName: 'Sri Gayatri Junior College',
      duration: '2017 - 2019',
      location: 'Hyderabad, India',
      score: 'Percentage - 96%',
    },
    {
      degree: 'Board of Secondary Education',
      schoolName: 'Sanskriti The School',
      duration: '2017',
      location: 'Hyderabad, India',
      score: 'CGPA - 9.2 / 10',
    },
  ]

  const skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'React', 'Angular', 'Bootstrap', 'TailwindCSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'ASP.NET Core', 'ASP.NET MVC'] },
    { category: 'Databases', items: ['MySQL', 'MariaDB', 'MongoDB'] },
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'C#'] },
    { category: 'API & Testing', items: ['RESTful APIs', 'Postman'] },
    { category: 'Version Control', items: ['Git', 'GitHub', 'Bitbucket'] },
    { category: 'Cloud & Deploy', items: ['Azure', 'InfomaniaK', 'Vercel'] },
  ]

  const certificatesAndAwards = [
    {
      name: 'Certificate Of Excellence',
      year: '2018',
      description: 'Received Certificate Of Excellence for scoring high percent',
    },
    {
      name: 'Change Maker Award',
      year: '2015',
      description:
        'Received the Change Maker Award for active presence and efforts in educating the poverty-stricken by Happy India.',
    },
  ]

  return (
    <PageWrapper>
      <NavBar />
      <div className="about">

        {/* ── Page hero ── */}
        <motion.div
          className="about-hero"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="about-section-label">About Me</p>
          <h1 className="about-hero-title">Passionate about building applications and committed to outstanding deliveries</h1>
          <p className="about-hero-bio">
            With 3+ years of hands-on experience, I'm proficient in building dynamic, responsive,
            high-performing, scalable front-end and full-stack web applications.
            I handle the entire development lifecycle, from front-end design and development to
            back-end implementation and deployment.
          </p>
        </motion.div>

        {/* ── Work Experience ── */}
        <AnimatedSection>
          <div className="about-section-header">
            <p className="about-section-label">Career</p>
            <h2 className="about-section-title">Work Experience</h2>
          </div>
        </AnimatedSection>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {workData.map((item) => (
            <motion.div key={item.company} variants={cardVariant}>
              <WorkItem data={item} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Tech Stack & Skills ── */}
        <AnimatedSection delay={0.05}>
          <div className="about-section-header">
            <p className="about-section-label">Toolkit</p>
            <h2 className="about-section-title">Tech Stack &amp; Skills</h2>
          </div>
        </AnimatedSection>
        <motion.div
          className="skills-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {skills.map((s) => (
            <motion.div key={s.category} className="skill-category" variants={cardVariant}>
              <span className="skill-category-label">{s.category}</span>
              <div className="skill-pills">
                {s.items.map((item) => (
                  <span key={item} className="skill-pill">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Education ── */}
        <AnimatedSection delay={0.05}>
          <div className="about-section-header">
            <p className="about-section-label">Background</p>
            <h2 className="about-section-title">Education</h2>
          </div>
        </AnimatedSection>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {education.map((item) => (
            <motion.div key={item.degree} variants={cardVariant}>
              <EducationItem data={item} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Certificates & Awards ── */}
        <AnimatedSection delay={0.05}>
          <div className="about-section-header">
            <p className="about-section-label">Recognition</p>
            <h2 className="about-section-title">Certificates &amp; Awards</h2>
          </div>
        </AnimatedSection>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certificatesAndAwards.map((item) => (
            <motion.div key={item.name} variants={cardVariant}>
              <CertificateItem data={item} />
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={0.1}>
          <button className="resume">
            <a target="_blank" href={Resume} rel="noopener noreferrer" className="resume-link">
              Download Resume
            </a>
          </button>
        </AnimatedSection>

      </div>
    </PageWrapper>
  )
}

export default About
