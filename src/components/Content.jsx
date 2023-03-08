import React from 'react'

const Content = () => {
    return (
        <div>
            <div class = "border-fuchsia-400 border-t-4">
                <a name ="skills"></a>
             <div name="skill" class="pt-10 font-oswald text-4xl bg-clip-text bg-gradient-to-t from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent text-4xl font-extrabold text-center">
                    Skills
            </div>
            <div class="flex items-center justify-center min-h-auto container mx-auto w-full">
                <div class="font-poppins grid grid cols-4 md:grid-cols-4 sm: grid-cols-2">
                    <div class="my-5 rounded-xl text-white mx-5">
                        <div class="p-5 flex flex-col">
                            <div class="font-oswald text-lg">Programming Languages</div>
                            <ul class="list-disc list-inside">
                                <li>Java</li>
                                <li>C</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                    </div>
                    <div class="my-5 rounded-xl text-white mx-5">
                        <div class="p-5 flex flex-col">
                            <div class="font-oswald text-lg">Scripting Languages</div>
                            <ul class="list-disc list-inside">
                                <li>JavaScript</li>
                                <li>Bash</li>
                            </ul>
                        </div>
                    </div>
                    <div class="my-5 rounded-xl text-white mx-5">
                        <div class="p-5 flex flex-col">
                            <div class="font-oswald text-lg">Web Development</div>
                            <ul class="list-disc list-inside">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>XML</li>
                                <li>JavaScript</li>
                                <li>PHP</li>
                            </ul>
                        </div>
                    </div>
                    <div class="my-5 rounded-xl text-white mx-5">
                        <div class="p-5 flex flex-col">
                            <div class="font-oswald text-lg">Database Management Systems</div>
                            <ul class="list-disc list-inside">
                                <li>MySQL</li>
                                <li>Microsoft Access</li>
                            </ul>
                        </div>
                    </div>
                    <div class="my-5 rounded-xl text-white mx-5">
                        <div class="p-5 flex flex-col">
                            <div class="font-oswald text-lg">Network Programming</div>
                            <ul class="list-disc list-inside">
                                <li>TCP/IP Protocols</li>
                            </ul>
                        </div>
                    </div>
                    <div class="my-5 rounded-xl text-white mx-5">
                        <div class="p-5 flex flex-col">
                            <div class="font-oswald text-lg">Software Tools</div>
                            <ul class="list-disc list-inside">
                                <li>Virtual Machines</li>
                                <li>IntelliJ IDEA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class = "align-center border-t-4 border-fuchsia-400">
            <a name ="projects"></a>
            <div class="pt-10 font-oswald text-4xl bg-clip-text bg-gradient-to-t from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent text-4xl font-extrabold text-center">
                Projects
            </div>
            <div class="py-10 flex items-center justify-center min-h-auto container mx-auto w-full text-center">
                <div class="font-poppins grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div class="my-5 rounded-xl text-white bg-secondary mx-5">
                        <div class="p-5 flex flex-col">
                            <div class="rounded-xl overflow-hidden">
                                <img src="javasearch.png"></img>
                            </div>
                            <div class="font-oswald text-lg">Sort and Search Algorithms</div>
                            <div>
                                <span class="bg-red-600 text-white text-xs mr-2 px-2.5 py-0.5 rounded-full">Java</span>
                            </div>
                            <div class="font-poppins text-xs">A program capable of initializing an Array and populating itm utilizing data structures and algorithms to sort and search through the Array and then printing the time taken.</div>
                            <a target="_blank" href="https://github.com/ornobdoorknob/resume-projects/tree/main/SearchAndSort" class="mt-5 transition-all duration-300 text-center py-2 rounded-lg bg-primary hover:bg-white hover:text-black">View code</a>
                        </div>
                    </div>
                    <div class="my-5 rounded-xl text-white bg-secondary mx-5">
                        <div class="p-5 flex flex-col">
                            <div class="rounded-xl overflow-hidden">
                                <img src="c.png"></img>
                            </div>
                            <div class="font-oswald text-lg">Phone Number Formatter</div>
                            <div>
                                <span class="bg-blue-600 text-white text-xs mr-2 px-2.5 py-0.5 rounded-full">C</span>
                            </div>
                            <div class="font-poppins text-xs">A program capable of prompting user to input their phone number, and based on the input, adds generic formatting to the number and outputs a report to the user.</div>
                            <a target="_blank" href="https://github.com/ornobdoorknob/resume-projects/tree/main/PhoneNumberFormatter" class="mt-5 transition-all duration-300 text-center py-2 rounded-lg bg-primary hover:bg-white hover:text-black">View code</a>
                        </div>
                    </div>
                    <div class="my-5 rounded-xl text-white bg-secondary mx-5 border-white">
                        <div class="p-5 flex flex-col">
                            <div class="rounded-xl overflow-hidden">
                                <img src="website.png"></img>
                            </div>
                            <div class="font-oswald text-lg">Portfolio Website</div>
                            <div>
                                <span class="bg-cyan-900 text-white text-xs mr-2 px-2.5 py-0.5 rounded-full">ReactJS</span>
                                <span class="bg-cyan-500 text-white text-xs mr-2 px-2.5 py-0.5 rounded-full">TailwindCSS</span>
                                <span class="bg-amber-400 text-white text-xs mr-2 px-2.5 py-0.5 rounded-full">ViteJS</span>
                            </div>
                            <div class="font-poppins text-xs">Responsive website built using a mobile-first approach utilizing TailwindCSS as framework for utilies, ReactJS for dynamic components and ViteJS for production optimization.</div>
                            <a target="_blank" href="https://github.com/ornobdoorknob/website" class="mt-5 transition-all duration-300 text-center py-2 rounded-lg bg-primary hover:bg-white hover:text-black">View code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Content