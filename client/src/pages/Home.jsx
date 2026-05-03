import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import PageWrapper from '../components/PageWrapper'
import display_picture from '../assets/images/display_picture.jpg'
import Resume from '../assets/docs/Resume.pdf'
import '../styles/Home.css'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import useTypewriter from '../hooks/useTypewriter'

const roles = ['Software Developer', 'MERN Stack Developer', 'Frontend Engineer']

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '15+', label: 'Technologies' },
  { value: '100%', label: 'Commitment' },
]

const FrontendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
)

const BackendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)

const FullstackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const services = [
  {
    Icon: FrontendIcon,
    title: 'Frontend Development',
    desc: 'Building responsive, accessible UIs with React and Angular. Pixel-perfect from design to production.',
    tags: ['React', 'Angular', 'TailwindCSS', 'Bootstrap'],
  },
  {
    Icon: BackendIcon,
    title: 'Backend Development',
    desc: 'Designing robust server-side systems and RESTful APIs with Node.js and ASP.NET Core.',
    tags: ['Node.js', 'Express', 'ASP.NET Core', 'REST APIs'],
  },
  {
    Icon: FullstackIcon,
    title: 'Full Stack Solutions',
    desc: 'End-to-end web applications using the MERN stack — from database schema to cloud deployment.',
    tags: ['MERN Stack', 'MySQL', 'MongoDB', 'Azure'],
  },
]

const techStack = [
  'React', 'Angular', 'Node.js', 'Express', 'ASP.NET Core',
  'JavaScript', 'TypeScript', 'C#', 'MongoDB', 'MySQL',
  'TailwindCSS', 'Git', 'Azure', 'Vercel',
]

const Home = () => {
  const role = useTypewriter(roles)

  return (
    <PageWrapper>
      <NavBar />

      {/* ── Hero ── */}
      <div className="hero-section">
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        <motion.div className="hero-image-col" variants={imageVariants} initial="hidden" animate="visible">
          <img className="display-picture" src={display_picture} alt="Charanya" />
        </motion.div>

        <motion.div className="hero-text-col" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 className="name-header" variants={itemVariants}>
            Hi, I'm Charanya <span className="emoji">:)</span>
          </motion.h1>

          <motion.p className="role-line" variants={itemVariants}>
            <span className="role-text">{role}</span>
            <span className="typewriter-cursor" />
          </motion.p>

          <motion.p className="work-header" variants={itemVariants}>
            3+ Years of Experience building applications with <strong>React, Angular </strong> and {' '}
            <strong>MERN</strong> Stack. Focused on delivering exceptional, high-quality web
            experiences that solve real problems.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <div className="icons">
              <a href="https://www.linkedin.com/in/charanya-edavelly-a725721a2" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="icon" size={36} />
              </a>
              <a href="https://github.com/charanyaedavelly" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub className="icon" size={36} />
              </a>
            </div>
            <a href={Resume} target="_blank" rel="noopener noreferrer" className="resume-cta">
              View Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats ── */}
      <motion.div
        className="stats-row"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* ── What I do ── */}
      <div className="home-section">
        <motion.div
          className="home-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="home-section-label">What I Do</p>
          <h2 className="home-section-title">How I can help you</h2>
        </motion.div>

        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              className="service-card"
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } } }}
            >
              <div className="service-icon-wrapper"><s.Icon /></div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => <span key={t} className="service-tag">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Tech strip ── */}
      <motion.div
        className="tech-strip-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="home-section-label" style={{ textAlign: 'center', marginBottom: '20px' }}>Tech Stack</p>
        <div className="tech-strip">
          <div className="tech-strip-track">
            {[...techStack, ...techStack].map((tech, i) => (
              <span key={i} className="tech-chip">{tech}</span>
            ))}
          </div>
        </div>
      </motion.div>

    </PageWrapper>
  )
}

export default Home
