import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { addItem, subItem , deleteItem , clearCart  } from '../Files/CartSlice'
import { useDispatch } from 'react-redux'

const Cart = () => {
    const dispatch = useDispatch()
    const newCart = useSelector(state => state.heyCart)
  return (
    <div>
        <h2 className='w-full text-center text-xl font-semibold'>Cart</h2>
       <div className='gap-3 flex  py-2 justify-center'>
       <Link to='/'>Home</Link>
       <button onClick={()=>{dispatch(clearCart())}}>Clear cart</button>
       </div>
       <div className='w-full items-center justify-center flex my-3'>
      <button onClick={()=>alert("Checkout")} className='bg-blue-400 px-4 rounded-md text-white py-2'>Checkout</button>
      </div>

      <div className='w-full flex flex-col gap-3 items-center'>
      {newCart.map((items)=>{
        return(
            <div key={items.id} className={`${items.count === 0 ? "hidden" : ""} bg-zinc-100 rounded-lg w-1/2 flex`}>
                <img src={items.imageUrl} alt="" className='object-contain w-1/4 h-fill' />
                <div className='px-4 py-4 w-full flex flex-col '>
                <h2 className='font-semibold text-lg'>{items.name}</h2>
                <p >$ {(items.price).toLocaleString()} /-</p>
                <div className='flex gap-4 w-full '>
                    <button onClick={()=>{dispatch(subItem(items))}} className='hover:bg-zinc-300 transition duration-300 px-4 py-2 rounded-sm'> - </button>
                <p className='bg-zinc-100 py-3 px-5 font-semibold text-lg '>{items.count}</p>
                    <button onClick={()=>{dispatch(addItem(items))}} className='hover:bg-zinc-300 transition duration-300 px-4 py-2 rounded-sm'> + </button>
                    <button onClick={()=>{dispatch(deleteItem(items))}} className='hover:bg-red-400 transition duration-300 px-4 py-2 rounded-lg'>Delete</button>
                </div>
                <div>
                    <p className='my-2 text-lg font-semibold'>Sub Total : $ {(items.price * items.count).toLocaleString()} /-</p>
                </div>
                </div>
            </div>
        )
      })}
      </div>
    </div>
  )
}

export default Cart
