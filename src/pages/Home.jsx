import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import InputSearch from '../components/Home/InputSearch'
import { getAllProducts } from '../store/slices/product.slice'
import './styles/home.css'

const Home = () => {

  const [inputText, setInputText] = useState('')
  const [filterByText, setFilterByText] = useState()

  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getAllProducts())
  }, [])

  useEffect(() => {

    if(inputText !== '' && products){
      const cb = product => product.title.toLowerCase().includes(inputText.toLowerCase().trim())
      setFilterByText(products.filter(cb))
    } else {
      setFilterByText(products)
    }
    
  }, [inputText, products])

console.log(filterByText)

  return (
    <main className='home'>
      <InputSearch inputText={inputText} setInputText={setInputText} />
      <div className='home__container'>
        {
          filterByText?.map(product => (
            <CardProduct
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </main>
  )
}

export default Home