import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../database/projects'
import ProjectsList from './ProjectsList'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
        <h1 className='subtitle section-title projects_title'>PROJETOS</h1>
        <ProjectsList list = {projects}/>
        <Link className='projects_btn btn' to={'/'}>VER TODOS OS PROJETOS</Link>
    </div>
  )
}

export default Projects