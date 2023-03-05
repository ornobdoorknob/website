import React from 'react'

const Header = () => {
    return (
        <header class="h-10 p-4 md:px-6 md:py-8 bg-primary mb-8">
            <div class="font-oswald flex items-center">
                    <img src="insta.png" class="h-12 mr-3" />
                    <a href="#" class="group text-xl self-center whitespace-nowrap transition duration-300 text-white">
                        Tahmid Khan
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-cyan-500"></span>
                    </a>
            </div>
        </header>
    )
}

export default Header