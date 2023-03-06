import React from 'react'

const Hero = () => {
    return (
        <div class="bg-gradient-to-r to-cyan-400 from-blue-500 w-full bg-center flex items-center md:px-96 h-screen">
            <div class="text-white py-20 px-20 drop-shadow-4xl">
           <img src="instahd.png" className='md:h-40' />
                <div class = "font-oswald text-2xl lg:text-4xl md:text-3xl">Hi, my name is</div>
                <div class = "font-oswald text-4xl md:text-8xl font-extrabold md:pb-5 pb-2">Tahmid Khan Arnab</div>
                <div class = "font-poppins mt-1 text-sm max-w-xl md:text-md">I'm a CS student at Algonquin College. I'm always broadening my skills, whether it be as a programmer or as a communicator. I have experience with object-oriented and procedural languages, as well as web development languages. The full list of my skills can be found down below. I look forward to putting my skills to use in the industry!</div>
            </div>
        </div>
    )
}

export default Hero