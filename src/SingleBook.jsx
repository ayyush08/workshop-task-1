import React from 'react'

const handleClick = (name,author,price) => {
    console.log(`Book Name: ${name}`);
    console.log(`Author: ${author}`);
    console.log(`Price: ${price}`);
}


const SingleBook = ({id,img,name,author,price}) => {
    // console.log(id);
    return (
    <div className='h-[400px] w-[300px] bg-yellow-600 flex flex-col justify-center rounded-md mb-4' >
    <div className="img-container flex items-center justify-center">
        <img className='w-[250px]' src={img} alt={name} />
    </div>
    <div className="details flex flex-col items-start ml-4">

    <h2 className='font-bold text-xl mt-2 italic hover:underline hover:text-blue-200 cursor-pointer transition-all text-center' >{name}</h2>
    <h4 className='text-sm font-semibold hover:underline hover:text-red-700 cursor-pointer transition-all'> &gt; {author}</h4>
    <h3 className='ml-2 text-base font-mono font-bold'>Rs. {price}</h3>
    </div>
    <button className='bg-blue-400 p-1 w-1/2 ml-16 rounded-md transition-all duration-100 hover:bg-orange-200 ' onClick={()=>handleClick(name,author,price)}>Click and console :)</button>
    </div>
    )
}

export default SingleBook
