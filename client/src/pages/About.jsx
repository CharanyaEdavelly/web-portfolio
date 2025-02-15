import NavBar from '../components/NavBar'
import WorkItem from '../components/WorkItem';
import EducationItem from '../components/EducationItem';
import CertificateItem from '../components/CertificateItem';
import Resume from '../assets/docs/Resume.pdf'
import '../styles/About.css'

const About = () => {

    const workData =[
        {
            designation: "Member Technical",
            company : "ADP Private Limited",
            duration: "Aug 2023 - Present",
            location: "Hyderabad, India",
            responsibilities: "Enhanced user experience through implementing user friendly and website responsiveness. Managed component and application level state using React hooks and Redux ensuring efficient state management and improving performance. Integrated RESTful APIs using axios and handled asynchronous operations upgrading application functionality."
        }
    ];

    const education = [
    {
        degree : "B.tech in Computer Science and Engineering",
        schoolName : "Sreyas Institute Of Engineering and Technology",
        duration: "2019 - 2023",
        location: "Hyderabad, India",
        score: "CGPA - 7.5 / 10"
    },
    {
        degree : "Intermediate in MPC",
        schoolName : "Sri Gayatri Junior College",
        duration: "2017 - 2019",
        location: "Hyderabad, India",
        score: "Percentage - 96%"
    },
    {
        degree : "Board of Secondary Education",
        schoolName : "Sanskriti The School",
        duration: "2017",
        location: "Hyderabad, India",
        score: "CGPA - 9.2 / 10"
    }
    ]

    const certificatesAndAwards = [
        {
            name: "Certificate Of Excellence",
            year: "2018",
            description: "Received Certificate Of Excellence for scoring high percent"
        },
        {
            name: "Change Maker Award",
            year: "2015",
            description: "Received the Change Maker Award for active presence and efforts in educating the poverty-stricken by Happy India."
        }
    ]

  return (
    <div>
        <NavBar />

        <div className='about'>

            {/* Work Experience */}
            <h4 className='work-experience-header'>WORK EXPERIENCE</h4>
            <hr />
            {workData.map((item) => 
            <WorkItem key={item.company} data={item}/> )}
            

            {/* Education */}
            <h4 className='education-header'>EDUCATION</h4>
            <hr />
            {education.map((item) => <EducationItem key={item.degree} data={item}/>)}
            
            {/* Certificates And Awards */}
            <h4 className='certifications-header'>CERTIFICATES AND AWARDS</h4>
            <hr />
            {certificatesAndAwards.map((item) => <CertificateItem key={item.name} data={item}/>)}

            <button className='resume'><a target='_blank' href={Resume} rel="noopener noreferrer" className='resume-link'>Download Resume </a></button>
            
        </div>
    </div>
  )
}

export default About