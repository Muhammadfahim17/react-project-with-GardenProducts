import React, { useEffect, useState } from 'react'
import '../../App.css'
import image1 from '../../../public/img (16).png'
import image2 from '../../../public/img (17).png'
import image3 from '../../../public/img (18).png'
import image4 from '../../../public/img (19).png'
import image5 from '../../../public/image (32).png'
import image6 from '../../../public/form.svg'
import { Link } from 'react-router-dom'

const Home = () => {
  let api = "http://localhost:3000/data"
  let [data,setData] = useState([])

  async function get() {
    try {
      let response = await fetch(api)
      let data = await response.json()
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get()
  },[])
    
  return (
    <div>

    <div className='main mb-[100px]'>
    <div className='w-[95%] m-auto flex flex-col items-start gap-[20px] py-[80px]'>
      <h1 className='text-white text-[40px] font-[700] sm:text-[70px] sm:w-[700px]'>Amazing Discounts on Garden Products!</h1>
      <button className='bg-[#339933] text-white text-[18px] font-[500] px-[35px] py-[8px] rounded-xl'>Check out</button>
    </div>
    </div>

    <div className='w-[95%] m-auto mb-[120px]'>
      <h1 className='text-[#282828] text-[35px] font-[700]'>Categories</h1>
      <div className='mt-[50px] flex flex-wrap justify-between gap-[20px] sm:flex sm:flex-nowrap'>
      <div className='w-[47%] flex flex-col items-center gap-[10px]'>
        <img src={image1} alt="" />
        <h2 className='text-[#282828] font-[500] text-[18px]'>Fertilizer</h2>
      </div>
      <div className='w-[47%] flex flex-col items-center text-center gap-[10px]'>
        <img src={image2} alt="" />
        <h2 className='text-[#282828] font-[500] text-[18px]'>Protective products and septic tanks</h2>
      </div>
      <div className='w-[47%] flex flex-col items-center text-center gap-[10px]'>
        <img src={image3} alt="" />
        <h2 className='text-[#282828] font-[500] text-[18px]'>Planting material	</h2>
      </div>
      <div className='w-[47%] flex flex-col items-center text-center gap-[10px]'>
        <img src={image4} alt="" />
        <h2 className='text-[#282828] font-[500] text-[18px]'>Tools and equipment</h2>
      </div>
      </div>
    </div>

    <div className='bg-gradient-to-r from-[#339933] to-[#0B710B]  w-[95%] p-[5px] m-auto flex flex-col items-center rounded-xl mb-[100px] gap-[25px] py-[30px]'>
      <h1 className='text-white text-[30px] font-[500] text-center sm:text-[55px]'>5% off on the first order</h1>
      <div className='w-[95%] m-auto flex items-center sm:justify-around'>
        <img className='hidden sm:block' src={image5} alt="" />
        <img src={image6} alt="" />
      </div>
    </div>

    <div className='w-[95%] m-auto mb-[120px]'>
      <h1 className='text-[#282828] text-[35px] font-[700]'>Sale</h1>
      <div className='mt-[50px] flex flex-col justify-between gap-[20px] sm:flex-row sm:flex-nowrap'>
      {data.slice(0,4).map((e) => {
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

export default Home