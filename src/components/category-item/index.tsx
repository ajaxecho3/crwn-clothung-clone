import React from 'react'
import './index.scss'
type Props = {
  title: string,
  imageUrl: string
}

const CategoryItem = ({imageUrl, title}: Props) => {
  return (
    <div className='category-container' >
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='category-body-container'>
        <h2 >{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}

export default CategoryItem