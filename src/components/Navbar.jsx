import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex px-8 py-2 justify-end'>
      <Link to="/cart" className='text-lg font-semibold hover:border-b-2 border-b-2 border-transparent hover:border-zinc-400 px-4'>Cart</Link>
    </div>
  )
}

export default Navbar
