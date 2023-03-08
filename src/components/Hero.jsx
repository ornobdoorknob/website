import React from 'react'

const Hero = () => {
    return (
        <div name="top" class="bg-primary w-full bg-center flex items-center h-screen place-content-center">
            <div class="text-white py-20 px-10 drop-shadow-4xl md:text-left text-center">
                <img src="instahd.png" className='object-center mx-auto md:mx-0 border-4 border-black hover:border-white transition-all duration-300 rounded-full h-60 md:h-40' />
                <div class="font-oswald text-2xl lg:text-4xl md:text-3xl">Hi, my name is</div>
                <div class="font-oswald text-4xl md:text-8xl font-extrabold md:pb-5 pb-2 whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">Tahmid Khan Arnab</div>
                <div class="font-poppins mt-1 text-sm max-w-xl md:text-md">I'm a CS student at Algonquin College. I'm always broadening my skills, whether it be as a programmer or as a communicator. I have experience with object-oriented and procedural languages, as well as web development languages. The full list of my skills can be found down below. I look forward to putting my skills to use in the industry!</div>
                <div class="py-5 float-left w-full align-center">
                    <a href='#skills'>
                        <button class="relative inline-flex items-center justify-center mb-2 mr-2 overflow-hidden text-lg font-medium text-white group bg-black">
                            <span class="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 relative px-1 py-1 transition-all ease-in duration-300 bg-black"><div class="bg-primary transition-all duration-300 h-full p-1 hover:px-2 hover:bg-transparent">
                                Skills</div>
                            </span>
                        </button>
                    </a>
                </div><div class="float-left w-full align-center">
                    <a href='#projects'>
                        <button class="relative inline-flex items-center justify-center mb-2 mr-2 overflow-hidden text-lg font-medium text-white group bg-black">
                            <span class="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 relative px-1 py-1 transition-all ease-in duration-300 bg-black"><div class="bg-primary transition-all duration-300 h-full p-1 hover:px-2 hover:bg-transparent">
                                Projects</div>
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Hero