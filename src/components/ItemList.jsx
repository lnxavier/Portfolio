import React from 'react';

const ItemList = ({name, image}) => {
  return (
    <div className='itemList'>
        <img src= {image} alt="" />
        <p>{name}</p>
    </div>
  )
}

export default ItemList