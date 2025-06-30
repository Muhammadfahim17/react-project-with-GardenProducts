import React from 'react'
import image1 from '../../../public/list.svg'
import image2 from '../../../public/form.svg'


const Busket = () => {
  return (
    <div>

<h1 className='text-[#282828] w-[95%] m-auto mt-[80px] text-[35px] font-[700]'>Shopping cart</h1>

    <div className='w-[95%] m-auto mt-[80px] mb-[100px] flex flex-col items-center gap-[25px] sm:flex-row'>
        <img src={image1} alt="" />
        <div className='bg-[#F1F3F4] rounded-xl p-[15px] flex flex-col items-start gap-[15px] sm:w-[500px] sm:p-[25px]'>
        <h1 className='text-[#282828] text-[30px] font-bold sm:text-[40px]'>Order details</h1>
        <div className='flex items-center gap-[25px]'>
            <p className='text-[#8B8B8B] text-[25px]'>4 items  Total</p>
            <h2 className='text-[#282828] text-[25px] font-bold sm:text-[40px]'>$541,00</h2>
        </div>
        <div className='flex items-center flex-col gap-[10px] sm:mt-[25px] sm:gap-[30px]'>
        <input className='border font-bold rounded-[7px] bg-[#FFFFFF] px-[50px] py-[7px] sm:px-[120px] sm:py-[10px]' type="text" placeholder='Name' />
        <input className='border font-bold rounded-[7px] bg-[#FFFFFF] px-[50px] py-[7px] sm:px-[120px] sm:py-[10px]' type="text" placeholder='Phone number' />
        <input className='border font-bold rounded-[7px] bg-[#FFFFFF] px-[50px] py-[7px] sm:px-[120px] sm:py-[10px]' type="text" placeholder='Email' />
        <button className='bg-[#339933] text-white font-bold px-[130px] py-[7px] rounded-xl sm:px-[200px] sm:py-[10px]'>Order</button>
        </div>
        </div>
    </div>

    </div>
  )
}

export default Busket