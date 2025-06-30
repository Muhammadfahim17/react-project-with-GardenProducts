import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import image1 from '../../../public/logo (9).svg'
import image2 from '../../../public/icon.svg'
import image3 from '../../../public/Frame 3318.svg'
import image4 from '../../../public/map (3).svg'
// import { dealias } from './../../../node_modules/tar/dist/esm/options';



const Layout = () => {
  return (
    <div>
        <header>
            <div className='w-[98%] m-auto flex items-center justify-between p-[25px]'>
                <img className='w-[12%] sm:w-[65px]' src={image1} alt="" />
                <div className='flex items-center'>
                    <details className='flex flex-col sm:hidden'>
                    <summary className="text-[#282828] font-[600] text-[18px] cursor-pointer">Menu</summary>
                    <ul className='flex flex-col gap-[10px] sm:flex  items-center sm:gap-[25px] text-[#282828] font-[500]'>
                        <Link to={'/'}>
                        <li>Main Page</li>
                        </Link>
                        <Link to={'/categories'}>
                        <li>Categories</li>
                        </Link>
                        <Link to={'/allproducts'}>
                        <li>All products</li>
                        </Link>
                        <li>All sales</li>
                    </ul>
                    </details>
                    <ul className='hidden    sm:flex  items-center sm:gap-[40px] text-[#282828] font-[500]'>
                        <Link>
                        <li>Main Page</li>
                        </Link>
                        <Link to={'./categories'}>
                        <li>Categories</li>
                        </Link>
                        <Link to={'/allproducts'}>
                        <li>All products</li>
                        </Link>
                        <li>All sales</li>
                    </ul>
                </div>
                <Link to={'/busket'}>
                <img className='w-[55%] sm:w-[45px]' src={image2} alt="" />
                </Link>
            </div>
            {/* <Link to={'/'}>
            <h2>Home</h2>
            </Link>
            <Link to={'/about'}>
            <h2>About</h2>
            </Link>
            <h2>Home</h2> */}
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <div className='w-[95%] m-auto'>
                <h1 className='text-[#282828] text-[50px] font-[600]'>Contact</h1>
                <div className='flex flex-col items-center gap-[20px] sm:flex-row sm:flex-wrap sm:justify-between sm:gap-[35px] sm:my-[50px]'>
                <div className='bg-[#F1F3F4] flex flex-col items-start gap-[10px] p-[20px] w-[90%] rounded-xl sm:w-[650px]'>
                <p className='text-[#8B8B8B] text-[17px] font-[500]'>Phone</p>
                <h1 className='text-[#282828] text-[25px] font-[600]'>+7 (499) 350-66-04</h1>
                </div>
                <div className='bg-[#F1F3F4] flex flex-col items-start gap-[10px] p-[20px] w-[90%] rounded-xl sm:w-[650px]'>
                <p className='text-[#8B8B8B] text-[17px] font-[500]'>Socials</p>
                <img className='w-[30%] sm:w-[15%]' src={image3} alt="" />
                </div>
                <div className='bg-[#F1F3F4] flex flex-col items-start gap-[10px] p-[20px] w-[90%] rounded-xl sm:w-[650px]'>
                <p className='text-[#8B8B8B] text-[17px] font-[500]'>Address</p>
                <h1 className='text-[#282828] text-[25px] font-[600]'>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</h1>
                </div>
                <div className='bg-[#F1F3F4] flex flex-col items-start gap-[10px] p-[20px] w-[90%] rounded-xl sm:w-[650px]'>
                <p className='text-[#8B8B8B] text-[17px] font-[500]'>Working Hours</p>
                <h1 className='text-[#282828] text-[25px] font-[600]'>24 hours a day</h1>
                </div>
                </div>
            </div>
            <img className='w-[95%] m-auto my-[20px]' src={image4} alt="" />
        </footer>
    </div>
  )
}

export default Layout