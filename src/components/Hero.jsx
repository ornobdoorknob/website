import React from 'react'

const Hero = () => {
    return (
        <div name="top" class="w-full flex items-center h-screen place-content-center">
            <div class="text-white py-20 px-10 drop-shadow-4xl md:text-left text-center">
                <img src="instahd.png" className='border-8 border-gray-500 border-double hover:border-white rounded-full my-5 object-center mx-auto md:mx-0 transition-all duration-300 h-60 md:h-40'/>
                <div class="font-oswald text-2xl lg:text-4xl md:text-3xl text-gray-400">Hi, my name is</div>
                <div class="font-oswald text-4xl md:text-8xl font-extrabold md:pb-5 pb-2 whitespace-nowrap text-white">Tahmid Khan Arnab</div>
                <div class="font-poppins mt-1 text-sm max-w-xl md:text-md text-gray-400">I'm a CS student at Algonquin College. I'm always broadening my skills, whether it be as a programmer or as a communicator. I have experience with object-oriented and procedural languages, as well as web development languages. The full list of my skills can be found down below. I look forward to putting my skills to use in the industry!</div>
            </div>  
        </div>
    )
}
export default Hero