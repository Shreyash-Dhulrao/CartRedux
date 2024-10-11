import React from 'react'
import {products} from './Products'
import { useDispatch } from 'react-redux'
import { addItem } from '../Files/CartSlice'

const cartItem = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <h2 className='text-2xl text-center font-semibold'>Items for Shopping</h2>
        <div className='grid grid-cols-4 gap-4 p-4'>
        {products.map(items =>{
            return(
                <div key={items.id} className='bg-zinc-100 justify-center p-4 gap-3 flex flex-col text-center'>
                    <img src={items.imageUrl} alt="" className='object-contain w-full h-64 bg-white' />
                    <h2>{items.name}</h2>
                    <p>${(items.price).toLocaleString()}</p>
                    <button className='bg-white py-2' onClick={()=>{dispatch(addItem(items))}}>Add to Cart</button>
                    </div>
            )
        })}
        </div>
    </div>
  )
}

export default cartItem
