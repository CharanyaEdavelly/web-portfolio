import React from 'react'
import ImageSlider from './ImageSlider'
import TechButton from './TechButton'
import '../styles/ProjectItem.css'

const ProjectItem = ({project}) => {
  const {images, title, description, skills} = project;
  return (
    <div className='image-slider'>

        <ImageSlider workImages={images}/>
        <h5 className='project-title'>{title}</h5>
        <p className='project-description'>{description}</p>
        <p className="tech-stack-header">Tech Stack Used</p>
        {skills.map((skill, index) => <TechButton key={index} skill={skill} />)}
      </div>
  )
}

export default ProjectItem