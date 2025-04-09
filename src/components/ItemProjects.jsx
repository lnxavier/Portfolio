import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemProjects = ({id, name, status, image, image_mobile, link, description}) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className='item-projects'>
        <Link className='item-projects_link' to={link}>
          <img className='item-projects_img' src={image} alt="Imagem ilustrativa do projeto"/>
          <img className='item-projects_img-mobile'src={image_mobile} alt="Imagem ilustrativa do projeto" />
          <div className='item-projects_content'>
            <div>
              <p className='subtitle item-projects_title'>{name}</p>
              <p className='item-projects_status'>{status}</p>
            </div>
            <p className={`item-projects_description${showMore ? '-expand' : ''}`} dangerouslySetInnerHTML={{ __html: description}}></p>
          </div>
        </Link>
        <p className='item-projects_show-more' onClick={() => setShowMore(!showMore)}>{!showMore ? 'Mostrar mais' : 'Mostrar menos'}</p>
    </div>
  )
}

export default ItemProjects


