import React from 'react'

const AboutCard = () => {
    return (
        <div>
            <h1 className="text-[32px] font-semibold text-white mb-5 ">About Me</h1>
            <p className="text-base font-normal text-white/80 tracking-[3px] pb-5 lg:pb-11 ">
                Hey, I’m Manoj Saini, a passionate Frontend Developer skilled in React.js, Next.js, and Tailwind CSS. I love crafting responsive, user-friendly interfaces and turning ideas into clean, high-performing web apps. From UI design to smooth animations, I blend creativity with code to build impactful digital experiences.
            </p>

            <div className='flex gap-6 flex-col lg:flex-row xl:justify-between  lg:py-5 max-lg:h-[250px] max-lg:overflow-y-scroll'>
                <div className='flex gap-5 min-[400px]:gap-20 lg:gap-5 sm:w-11/12 lg:w-5/12'>
                    <div className=' flex flex-col gap-[30px] '>
                        <p className='text-white font-normal text-lg tracking-[2px]  '>Name</p>
                        <p className='text-white font-normal text-lg tracking-[2px]  '>Experience</p>
                        <p className='text-white font-normal text-lg tracking-[2px]  '>Nationality</p>
                        {/* <p className='text-white font-normal text-lg tracking-[2px]  '>Freelance</p> */}
                    </div>
                    <div className=' flex flex-col gap-[30px]'>
                        <p className='text-[#15FFEA] text-xl font-medium tracking-[2px]  '> Manoj Saini</p>
                        <p className='text-[#15FFEA] text-xl font-medium tracking-[2px]  '>2+ Years</p>
                        <p className='text-[#15FFEA] text-xl font-medium tracking-[2px]  '>Indian</p>
                        {/* <p className='text-[#15FFEA] text-xl font-medium tracking-[2px]  '>Available</p> */}
                    </div>
                </div>

                <div className='flex max-[400px]:gap-5 gap-20 lg:gap-5 sm:w-11/12 lg:w-6/12'>
                    <div className='flex flex-col gap-[30px] '>
                        <p className='text-white font-normal text-lg tracking-[2px]  '>Phone</p>
                        <p className='text-white font-normal text-lg tracking-[2px]  '>Email</p>
                        {/* <p className='text-white font-normal text-lg tracking-[2px]  '>Skype</p> */}
                        <p className='text-white font-normal text-lg tracking-[2px]  '>Language</p>
                    </div>
                    <div className='flex flex-col gap-[30px]'>
                        <p className='text-[#15FFEA] text-xl font-medium tracking-[2px]  '>+91 97285-60901</p>
                        <p className='text-[#15FFEA] text-xl font-medium tracking-[1px]  '>manojsaini97285@gmail.com</p>
                        {/* <p className='text-[#15FFEA] text-xl font-medium tracking-[2px]  '>Vikas.00</p> */}
                        <p className='text-[#15FFEA] text-xl font-medium tracking-[2px]  '>English, Hindi, Punjabi</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutCard
