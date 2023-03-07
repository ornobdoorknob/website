import React from 'react'

const Hero = () => {
    return (
        <div name="top" class="bg-gradient-to-r to-cyan-400 from-blue-500 w-full bg-center flex items-center h-screen place-content-center">
            <div class="text-white py-20 px-10 drop-shadow-4xl md:text-left text-center">
                <img src="instahd.png" className='border-4 border-black hover:border-white transition-all duration-300 rounded-full h-40 md:h-40' />
                <div class="font-oswald text-2xl lg:text-4xl md:text-3xl">Hi, my name is</div>
                <div class="font-oswald text-4xl md:text-8xl font-extrabold md:pb-5 pb-2 md:whitespace-nowrap">Tahmid Khan Arnab</div>
                <div class="font-poppins mt-1 text-sm max-w-xl md:text-md">I'm a CS student at Algonquin College. I'm always broadening my skills, whether it be as a programmer or as a communicator. I have experience with object-oriented and procedural languages, as well as web development languages. The full list of my skills can be found down below. I look forward to putting my skills to use in the industry!</div>
                <div class="py-5">
                    <a href='#skills'>
                        <button class="relative inline-flex items-center justify-center mb-2 mr-2 overflow-hidden text-lg font-medium text-white rounded-lg group bg-black">
                            <span class="relative px-2 py-2 transition-all ease-in duration-300 hover:bg-white hover:text-black bg-black">
                                Skills
                            </span>
                        </button>
                    </a>
                    <a href='#projects'>
                        <button class="relative inline-flex items-center justify-center mb-2 mr-2 overflow-hidden text-lg font-medium text-white rounded-lg group bg-black">
                            <span class="relative px-2 py-2 transition-all ease-in duration-300 hover:bg-white hover:text-black bg-black">
                                Projects
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Hero