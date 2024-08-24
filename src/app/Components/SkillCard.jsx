import React from 'react'
import { SkillCardArr } from './Helper'

const SkillCard = () => {
    return (
        <div className='flex flex-wrap  '>
            {SkillCardArr.map((items, i) => {
                return (
                    <div key={i} className='w-3/12 rounded-[10px] bg-[#313131] p-[45px_50px_20px_50px]  '>
                       <span>
                        {items.courseImg}
                       </span>
                        <p className='font-normal text-base tracking-[3px] text-white text-center '>{items.courseName}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SkillCard
