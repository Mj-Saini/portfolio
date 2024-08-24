import React from 'react'
import CardExp from './CardExp'
import SkillCard from './SkillCard'


const ExperienceResume = () => {
    return (
        <div className='w-8/12'>
            <div className='p-[30px]  '>
                <h1 className='text-[32px] font-semibold text-white mb-5 '>My Experience</h1>
                <p className='text-base font-normal text-white/80 lg:w-[534px] tracking-[3px] pb-11 '>Lorem ipsum dolor sit amet consectetur. Aliquet elit dolorLorem ipsum dolor sit amet consectetur. Aliquet elit dolor..</p>
                {/* <CardExp /> */}
                <SkillCard />
            </div>
        </div>
    )
}

export default ExperienceResume
