import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemProjects = ({id, name, status, image, image_mobile, link, description}) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className='item-projects' onClick={() => window.open(link, '_blank')} style = {{cursor: 'pointer'}}>
        <img className='item-projects_img' src={image} alt="Imagem ilustrativa do projeto"/>
        <img className='item-projects_img-mobile'src={image_mobile} alt="Imagem ilustrativa do projeto" />
        <div className='item-projects_content'>
          <div>
            <p className='subtitle item-projects_title'>{name}</p>
            <p className='item-projects_status'>{status}</p>
          </div>
          <p className={`item-projects_description${showMore ? '-expand' : ''}`} dangerouslySetInnerHTML={{ __html: description}}></p>
          <p className='item-projects_show-more' onClick={() => setShowMore(!showMore)}>{!showMore ? 'Mostrar mais' : 'Mostrar menos'}</p>
          <Link to={'/'} className='item-projects_show-more-mobile'>Ver mais</Link>
        </div>
    </div>
  )
}

export default ItemProjects


