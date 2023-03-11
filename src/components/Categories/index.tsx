import React from 'react'
import CategoryItem from '../category-item'
import './index.scss'
type Props = {
  categories: Array<{title: string, id: number, imageUrl: string}>
}

function Categories({categories}: Props) {
  return (
    <div className="categories-container">
      {
        categories.map(({ title, id, imageUrl }) => (
          <CategoryItem key={id} title={title} imageUrl={imageUrl} />
        ))
      }
    </div>
  )
}

export default Categories