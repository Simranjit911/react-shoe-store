import React, { useEffect } from 'react'
import userContext from '../../userContext'
import { useContext } from 'react'
import Prod from "../Db/Db"
import Card from './Card'
const Products = () => {
    const {val,cat,com,col}=useContext(userContext)  
  
  return (
    <div className='my-8 grid sm:grid-cols-2 md:grid-cols-3 mx-auto gap-10 grid-cols-1 '>
        { Prod.filter((i)=>{
            {return val.toLowerCase()===""?i:(i.title.toLowerCase().includes(val))|| (i.color.toLowerCase().includes(val)) || (i.category.toLowerCase().includes(val)) || (i.company.toLowerCase().includes(val))}
        }).filter((i)=>{
          return cat===""?i:i.category.toLowerCase().includes(cat)
        }).filter((i)=>{
          return com===""?i:i.company.toLowerCase().includes(com)
        }).filter((i)=>{
          return col===""?i:i.color.toLowerCase().includes(col)
        }).map((prod,idx)=>{
            return <Card key={idx} prod={prod}/>
        })            
        }
    </div>
  )
}

export default Products