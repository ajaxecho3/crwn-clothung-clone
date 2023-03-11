import React, { useContext } from 'react'
import { ProductsContext } from '../../context/products.context'
import ProductCard from './ProductCard'
type Props = {}

const Shop = (props: Props) => {

  const { products } = useContext(ProductsContext)
  return (
    <div className='products-container'>
      {
        products.map(({ id, name, imageUrl, price }) => (
          <ProductCard key={id} id={id} name={name} imageUrl={imageUrl} price={price} />
        ))
      }
    </div>
  )
}

export default Shop