import React from 'react'
import { RoadmapDot } from './Icon'

const EduCard = () => {
    return (
        <div>
            <h1 className="text-[32px] font-semibold text-white mb-5 ">My Education</h1>
            <p className="text-base font-normal text-white/80 lg:w-[534px] tracking-[3px] pb-5 lg:pb-11 ">After completing my 10th and 12th with a focus on Computer Applications, I pursued a Diploma in Frontend Development, gaining the skills to create responsive and interactive web applications.
            </p>

            <div className='max-lg:h-[250px] h-[350px] overflow-y-scroll'>
                {/* 10th Grade */}
                <div className='flex  '>
                    <div className='sm:w-6/12 ps-7 sm:px-[15px] relative roadmap_line sm:text-right '>
                        <div className='absolute top-0 max-sm:left-[0px] -right-[10px] max-sm:pt-7 '><RoadmapDot /> </div>
                        <p className='text-[#15FFEA] font-normal tracking-[2px] text-xl mb-[10px] max-sm:pt-7 '>2018</p>
                        <div className='border-[2px] border-[#15FFEA] rounded-[20px] p-[10px_15px] bg-[#313131]'>
                            <p className='font-medium text-white text-xl mb-[10px]'>10th Grade</p>
                            <p className='text-sm text-white/80 tracking-[1px] font-normal'>Completed high school with a focus on Science and Mathematics.</p>
                        </div>
                    </div>
                    <div className='hidden sm:block sm:w-6/12 px-[15px]'></div>
                </div>

                {/* 12th Grade */}
                <div className='flex'>
                    <div className='sm:w-6/12 px-[15px] relative roadmap_line'>
                        <div className='absolute top-0 max-sm:left-[0px] -right-[10px] max-sm:pt-7'><RoadmapDot /> </div>
                    </div>
                    <div className='sm:w-6/12 px-[15px] text-left'>
                        <p className='text-[#15FFEA] font-normal tracking-[2px] text-xl mb-[10px] max-sm:pt-7 '>2020</p>
                        <div className='border-[2px] border-[#15FFEA] rounded-[20px] p-[10px_15px] bg-[#313131]'>
                            <p className='font-medium text-white text-xl mb-[10px]'>12th Grade</p>
                            <p className='text-sm text-white/80 tracking-[1px] font-normal'>Completed with a specialization in Science and Computer Applications.</p>
                        </div>
                    </div>
                </div>

                {/* Frontend Development Diploma */}
                <div className='flex  '>
                    <div className='sm:w-6/12 ps-7 sm:px-[15px] relative roadmap_line sm:text-right '>
                        <div className='absolute top-0 max-sm:left-[0px] -right-[10px] max-sm:pt-7 '><RoadmapDot /> </div>
                        <p className='text-[#15FFEA] font-normal tracking-[2px] text-xl mb-[10px] max-sm:pt-7 '>2023</p>
                        <div className='border-[2px] border-[#15FFEA] rounded-[20px] p-[10px_15px] bg-[#313131]'>
                            <p className='font-medium text-white text-xl mb-[10px]'>Frontend Development Diploma</p>
                            <p className='text-sm text-white/80 tracking-[1px] font-normal'>Specialized in  React.js/Next.js, JavaScript,  HTML, CSS, and modern web design principles.</p>
                        </div>
                    </div>
                    <div className='hidden sm:block sm:w-6/12 px-[15px]'></div>
                </div>
            </div>
        </div>
    )
}

export default EduCard
