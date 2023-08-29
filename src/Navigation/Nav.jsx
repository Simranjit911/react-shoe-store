import React, { useContext } from 'react'
import userContext from '../../userContext'

const Nav = () => {
    const {val,setval}=useContext(userContext)  
console.log(val)
  return (
    <nav className='w-[100%] mx-auto items-center flex flex-col md:flex-row shadow-xl justify-around py-2 px-1 bg-stone-300'>
        
            <p className='text-lg font-semibold'>Shoe Cart</p>
            <input type="search"
            placeholder='Name,Sneaker,Color,Category...'
            className='px-1 shadow-xl border-slate-700 outline-slate-600 w-[250px] rounded-md' 
            value={val}
            onChange={(e)=>setval(e.target.value.toLowerCase())}/>       
    </nav>
  )
}

export default Nav