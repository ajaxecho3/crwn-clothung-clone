import React, { createContext, ReactNode, useState } from 'react'
import Products from '../shop-data.json'

interface ProviderProps {
  children: ReactNode
}

type ProductsType = typeof Products

export const ProductsContext = createContext<{ products: ProductsType }>({
  products: [],

})

export const ProductsProvider = ({ children}: ProviderProps) => {
  const [products, setProducts] = useState(Products)
  const value = {products, setProducts}
  return (
    <ProductsContext.Provider value={value}>
        {children}
    </ProductsContext.Provider>
  )
}