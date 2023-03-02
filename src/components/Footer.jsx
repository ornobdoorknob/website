import React from 'react'

const Footer = () => {
    return (
        <footer class="p-4 md:px-6 md:py-8 bg-secondary">
            <div class="sm:flex sm:items-center sm:justify-between font-oswald">
                <a href="https://tahmidkhan.com/" class="flex items-center mb-4 sm:mb-0">
                    <img src="logo.png" class="h-8 mr-3" />
                    <span class="self-center text-xl whitespace-nowrap text-white">Tahmid Khan</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-gray-500">
                    <li class="px-3 font-poppins">
                        <a href="https://www.linkedin.com/in/tahmid-khan-arnab/" class="mr-4 md:mr-6 hover:text-white"><img src="linkedin.png" className='h-6'></img>Linkedin</a>
                    </li>
                    <li class="px-3 font-poppins">
                        <a href="https://github.com/ornobdoorknob" class="mr-4 md:mr-6 hover:text-white"><img src="github.png" className='h-6'></img>Github</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 sm:mx-auto border-gray-500 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center">©<a href="https://tahmidkhan.com/" class="hover:text-white">Tahmid Khan Arnab</a>. All Rights Reserved.
            </span>
        </footer>

    )
}

export default Footer