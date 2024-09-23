import React from 'react'
import TextWriter from './TextWriter'
import PortfolioImage from './PortfolioImage'

const Layout1 = () => {
    return (


        <div className=' flex    flex-col    justify-center items-center lg:flex-row   flex-wrap  p-5  bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400  '>
            {/* Left Side */}
            <div className="left w-[50%]    flex justify-center items-center  ">

                <TextWriter className='w-screen h-auto' />

            </div>
            {/* END */}
            {/* Right Side */}
            <div className="right w-[50%]    flex justify-center items-center">

                <PortfolioImage />

            </div>
            {/* END */}
        </div>
    )
}

export default Layout1