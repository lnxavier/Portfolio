import React from 'react'
import ItemProjects from './ItemProjects'

const ProjectsList = ({list}) => {
  return (
    <div className='projects-list'>
        {list.map(currProject => {
            return <ItemProjects key={currProject.id} {...currProject}/>
        })}
    </div>
  )
}

export default ProjectsList