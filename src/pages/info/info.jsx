import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import image1 from '../../../public/Frame 3319.svg'

const Info = () => {
  let {id} = useParams()
  let api = "http://localhost:3000/data"
  let [info,setInfo] = useState({})

  async function getById() {
    try {
      let response = await fetch(`${api}/${id}`)
      let data = await response.json()
      setInfo(data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getById()
  },[])

  return (
    <div>


      <div className='w-[95%] m-auto my-[80px]'>
        <div className='flex flex-col items-center gap-[25px] sm:flex-row sm:justify-between'>
        <img className='sm:w-[35%]' src={info.img} alt="" />
        <div className='flex flex-col items-start gap-[20px] sm:w-[50%]'>
          <h1 className='text-[#282828] text-[23px] font-[700] sm:text-[40px]'>{info.name}</h1>
          <div className='flex items-center gap-[30px]'>
            <p className='text-[#282828] text-[25px] font-bold sm:text-[35px]'>{info.price}</p>
            <p className='text-[#8B8B8B] font-bold text-[18px] sm:text-[35px]'>{info.price1}</p>
          </div>
          <div className='flex items-center gap-[30px]'>
            <img className='w-[47%]' src={image1} alt="" />
            <button className='bg-[#339933] text-white font-bold px-[30px] py-[10px] rounded-xl sm:px-[50px] sm:py-[15px]'>Add to cart</button>
          </div>
          <p className='text-[#282828] text-[18px] font-[500]'>Description</p>
          <p className='text-[#8B8B8B] font-[500] text-[16px]'>This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.
This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.
Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs.</p>
<p className='text-[#282828] text-[18px] font-[500]'>Read more</p>
        </div>
        </div>
      </div>


    </div>
  )
}

export default Info