import React from 'react'
import image1 from '../../../public/img (16).png'
import image2 from '../../../public/img (17).png'
import image3 from '../../../public/img (18).png'
import image4 from '../../../public/img (19).png'


const Categories = () => {
return (
    <div>
        <div className='w-[95%] m-auto mb-[120px] mt-[100px]'>
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
    </div>
)
}

export default Categories