import React from 'react'

const Header = () => {
    return (
        <header class="h-10 p-4 md:px-6 md:py-8 bg-primary mb-8">
            <div class="font-oswald">
                <a href="https://tahmidkhan.com/" class="flex items-center">
                    <img src="images/logo.png" class="h-8 mr-3" />
                    <span class="self-center text-xl whitespace-nowrap text-white">Tahmid Khan</span>
                </a>
            </div>
        </header>
    )
}

export default Header