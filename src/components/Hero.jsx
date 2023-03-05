import React from 'react'

const Hero = () => {
    return (
        <div class="bg-gradient-to-r to-cyan-400 from-blue-500 w-full bg-center flex items-center">
            <div class="text-white min-h-fit py-60 px-20 drop-shadow-4xl">
                <div class = "font-oswald text-3xl">Hi, my name is</div>
                <div class = "font-oswald text-8xl">Tahmid Khan Arnab</div>
                <div class = "font-poppins mt-1 text-base max-w-xl">I'm a CS student at Algonquin College. I'm always broadening my skills, whether it be as a programmer or as a communicator. I have experience with object-oriented and procedural languages, as well as web development languages. The full list of my skills can be found on my <a class="underline font-bold" href="https://github.com/ornobdoorknob/website/raw/main/Resume.pdf">resume</a>. I look forward to putting my skills to use in the industry!</div>
            </div>
        </div>
    )
}

export default Hero