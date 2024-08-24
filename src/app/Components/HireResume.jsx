import React from 'react'

const HireResume = () => {
    return (

        <div id='resume' className='relative py-12 lg:pt-[81px] lg:pb-[ 225px] '>
            <div className='container max-w-[1140px] 2xl:max-w-[1550px] mx-auto px-5  '>
                <h1 className='max-[400px]:text-[50px] text-[60px] lg:text-[70px] font-normal text-white sm:mb-5 xl:mb-[ 144px]  '>Resume...</h1>


                <div className='p-[30px] w-4/12 '>
                    <h1 className='text-[40px] font-semibold text-white  '>Why hire me?</h1>
                    <p className='text-base font-normal text-white/80 my-5 tracking-[2px] '>Lorem ipsum dolor sit amet consectetur. Aliquet elit dolor.</p>

                    <div className='flex flex-col gap-5 '>
                        <button className='text-base font-normal bg-[#313131] p-[10px] rounded-[10px] text-white hover:bg-[#15FFEA] hover:text-black text-center w-full duration-1000 hover:duration-1000 ' >Experience </button>
                        <button className='text-base font-normal bg-[#313131] p-[10px] rounded-[10px] text-white hover:bg-[#15FFEA] hover:text-black text-center w-full duration-1000 hover:duration-1000 ' >Education </button>
                        <button className='text-base font-normal bg-[#313131] p-[10px] rounded-[10px] text-white hover:bg-[#15FFEA] hover:text-black text-center w-full duration-1000 hover:duration-1000 ' >Skills </button>
                        <button className='text-base font-normal bg-[#313131] p-[10px] rounded-[10px] text-white hover:bg-[#15FFEA] hover:text-black text-center w-full duration-1000 hover:duration-1000 ' >About me </button>

                    </div>

                </div>

            </div>
        </div>

    )
}

export default HireResume
