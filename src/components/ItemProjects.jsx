import React from 'react';

const ItemProjects = ({id, name, status, image, image_mobile, link, github, description, technologies, reverse}) => {
  return (
    <div className={`item-projects ${reverse ? 'reverse' : ''}`}>
      <img className='item-projects_img' src={image} alt="Imagem ilustrativa do projeto"/>
      <div className='item-projects_content'>
        <div className='item-projects_title-conatainer'>
          <p className='subtitle item-projects_title'>{name}</p>
          <p className='item-projects_status'>{status}</p>
        </div>
          <p className={'item-projects_description'} dangerouslySetInnerHTML={{ __html: description}}></p>
          <div className='item-projects_technologies'>
            {technologies.map((tech, index) => (
              <p key={index} className='item-projects_tech'>{tech}</p>
            ))}
          </div>
          <div className='item-projects_btns'>
            <a className='item-projects_btn' href={link}>Vizualizar</a>
            <a className='item-projects_btn' href={github}>GitHub</a>
          </div>
      </div>
    </div>
  )
}

export default ItemProjects


