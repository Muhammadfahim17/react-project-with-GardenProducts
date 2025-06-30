import React, { useEffect, useState } from 'react'
import image1 from '../../../public/filter (1).svg'
import { Link } from 'react-router-dom'

const Allproducts = () => {
let Api = "http://localhost:3000/data"
let [products,setProducts] = useState([])

async function get() {
    try {
        let response = await fetch(Api)
        let data = await response.json()
        setProducts(data)
    } catch (error) {
        console.error(error);
    }
}

useEffect(() => {
    get()
},[])

return (
    <div>
        <div className='w-[95%] m-auto flex flex-col items-start gap-[15px] mt-[100px]'>
        <h1 className='text-[#282828] text-[35px] font-[700]'>All products</h1>
        <img src={image1} alt="" />
        </div>

        <div className='w-[95%] m-auto mb-[100px]'>
        <div className=' mt-[50px] flex flex-col justify-between gap-[20px] sm:flex-row sm:flex-wrap'>
            {products.map((e) => {
                return (
                    <div className='shadow-2xl flex flex-col items-center gap-[10px] p-[10px]'>
            <img src={e.img} alt="" />
            <h1 className='text-[#282828] text-[20px] font-[500]'>{e.name}</h1>
            <div className='flex gap-[40px] items-center'>
            <h1 className='text-[#282828] text-[30px] font-bold'>{e.price}</h1>
            <h1 className='text-[#8B8B8B] font-[500]'>{e.price1}</h1>
            <Link to={`/info/${e.id}`}>
            <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg></button>
            </Link>
            </div>
        </div>
            )
            })}
        </div>
        </div>

    </div>
)
}

export default Allproducts