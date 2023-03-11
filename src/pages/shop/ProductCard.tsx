import React from 'react'
import Button from '../../components/common/Button'
import './index.scss'


type Props = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

const ProductCard = ({id, name, imageUrl, price}: Props) => {
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttontype='inverted'>Add to cart</Button>
    </div>
  )
}

export default ProductCard