import React from 'react'
import { otherSkills } from '../database/otherSkills'
import { usedTecnologies } from '../database/technologiesIHaveUsed'
import { learningTecnologies } from '../database/tecnologiesLearning'
import { usingTecnologies } from '../database/tecnologiesUsing'
import SkillsList from './SkillsList'

const Skills = () => {
  return (
    <div id='skills' className='skills'>
        <h1 className='subtitle section-title skills_title'>HABILIDADES</h1>
        <div className='skill-list_container'>
          <SkillsList title='Tecnologias em uso:' list={usingTecnologies}/>
          <SkillsList title='Tecnologias que já tive contato:' list={usedTecnologies}/>
          <SkillsList title='Aprendendo:' list={learningTecnologies}/>
          <SkillsList title='Outras habilidades:' list={otherSkills}/>
        </div>
    </div>
  )
}

export default Skills