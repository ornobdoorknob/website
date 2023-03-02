import React from 'react'

const ContactCard = () => {
    return (
        <body class="bg-primary pb-10">
            <div class="flex w-full min-h-fit justify-center items-center">
                <div class="flex flex-col space-y-5 w-full bg-secondary text-white max-w-4xl p-8 rounded-xl shadow-lg">
                    <div class="flex flex-col space-y-8 justify-between">
                        <div class="font-oswald text-2xl tracking-wide pt-1"><h1>Contact Me</h1></div>
                        <div class="font-poppins">
                            <div class="py-2">
                                <div class="inline-flex space-x-2 items-center">
                                    <img class="h-7" src="phone.svg" /><span><a href = "tel:6132225346">+1 (613) 222 5346</a></span>
                                </div>
                            </div>
                            <div class="py-2">
                                <div class="inline-flex space-x-2 items-center">
                                    <img class="h-7" src="email.svg" /><span><a href = "mailto:arna0016@algonquinlive.com">arna0016@algonquinlive.com</a></span>
                                </div>
                            </div>
                            <div class="py-2">
                                <div class="inline-flex space-x-2 items-center">
                                    <img class="h-7" src="linkedin.png" /><span><a href="https://www.linkedin.com/in/tahmid-khan-arnab/">Linkedin</a></span>
                                </div>
                            </div>
                            <div class="py-2">
                                <div class="inline-flex space-x-2 items-center">
                                    <img class="h-7" src="github.png" /><span><a href="https://github.com/ornobdoorknob">Github</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default ContactCard