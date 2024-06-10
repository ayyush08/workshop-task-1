import React from 'react'
import { data } from './data'
import SingleBook from './SingleBook'
function App() {


  return (
    <div className='px-20 bg-black'>
    <h1 className='text-4xl text-center font-bold text-white mb-9'>Amazon BestSellers</h1>
      <main className='grid grid-cols-4'>
        {data.map((item,index)=>{
          // const {id,img,author,name,price} = item
          return <SingleBook  {...item} key={index+1}/>
        })}
      </main>
    </div>
  )
}

export default App
