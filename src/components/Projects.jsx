import React from 'react'

const Projects = () => {
  return (
    <div class = "py-10 flex items-center justify-center min-h-auto container mx-auto w-full">
<div class = "grid grid cols-3 md:grid-cols-3 sm: grid-cols-1">
    <div class = "rounded-xl text-white bg-secondary mx-5 border-white">
        <div class = "p-5 flex flex-col">
            <div class = "rounded-xl overflow-hidden">
                <img src = "website.png"></img>
            </div>
            <div class = "font-poppins text-lg">Portfolio Website</div>
            <div>
                <span class="bg-cyan-900 text-white text-base mr-2 px-2.5 py-0.5 rounded-full">ReactJS</span>
                <span class="bg-cyan-500 text-white text-base mr-2 px-2.5 py-0.5 rounded-full">TailwindCSS</span>
                <span class="bg-amber-400 text-white text-base mr-2 px-2.5 py-0.5 rounded-full">ViteJS</span>
            </div>
            <div class = "font-poppins">Responsive website built using a mobile-first approach utilizing TailwindCSS for utilies, ReactJS for dynamic components and ViteJS for production optimization.</div>
            <a href="https://github.com/ornobdoorknob/website" class = "text-center py-2 rounded-lg bg-primary hover:bg-white hover:text-black">View code</a>
        </div>
    </div>
    <div class = "rounded-xl text-white bg-secondary mx-5">
        <div class = "p-5 flex flex-col">
            <div class = "rounded-xl overflow-hidden">
            <img src = "javasearch.png"></img>
            </div>
            <div class = "font-poppins text-lg">Sort and Search Algorithms</div>
            <div>
                <span class="bg-red-600 text-white text-base mr-2 px-2.5 py-0.5 rounded-full">Java</span>
            </div>
            <div class = "font-poppins">A program capable of initializing an Array and populating it and then utilizing data structures and algorithms to sort and search through the Array and then printing the time taken.</div>
            <a href="https://github.com/ornobdoorknob/resume-projects/tree/main/SearchAndSort" class = "text-center py-2 rounded-lg bg-primary hover:bg-white hover:text-black">View code</a>
        </div>
    </div>
    <div class = "rounded-xl text-white bg-secondary mx-5">
        <div class = "p-5 flex flex-col">
            <div class = "rounded-xl overflow-hidden">
            <img src = "c.png"></img>
            </div>
            <div class = "font-poppins text-lg">Phone Number Formatter</div>
            <div>
                <span class="bg-blue-600 text-white text-base mr-2 px-2.5 py-0.5 rounded-full">C</span>
            </div>
            <div class = "font-poppins">A program capable of prompting user to input their phone number, and based on the input, adds generic formatting to the number and outputs a report to the user.</div>
            <a href="https://github.com/ornobdoorknob/resume-projects/tree/main/PhoneNumberFormatter" class = "text-center py-2 rounded-lg bg-primary hover:bg-white hover:text-black">View code</a>
        </div>
    </div>
</div>
    </div>
  )
}

export default Projects