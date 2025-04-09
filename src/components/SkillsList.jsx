import React from 'react'
import ItemList from './ItemList'

const SkillsList = ({title, list}) => {
  return (
    <div className='skill-list'>
        <h1 className='subtitle'>{title}</h1>
        <div className='item-list_container'>
          {list.map(currObj => {
            return <ItemList
              key={currObj.id} 
              {...currObj}
            />
          })}
        </div>
    </div>
  )
}

export default SkillsList