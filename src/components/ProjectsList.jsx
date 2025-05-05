import React from 'react'
import ItemProjects from './ItemProjects'

const ProjectsList = ({list}) => {
  return (
    <div className='projects-list'>
        {list.map((currProject, index) => {
            return <ItemProjects key={currProject.id} {...currProject} reverse={index % 2 !== 0}/>
        })}
    </div>
  )
}

export default ProjectsList