import React from 'react'
import myWork_img1 from '../../../public/assets/images/png/myWork_img1.png'
import myWork_img2 from '../../../public/assets/images/png/myWork_img2.png'
import myWork_img3 from '../../../public/assets/images/png/myWork_img3.png'
import Image from 'next/image'
import { MyWorkElp } from './Icon'

const MyWork = () => {
    return (

        <div id='work' className='relative max-lg:py-12 pb-[209px] '>
            <div className='container max-w-[1140px] 2xl:max-w-[1550px] mx-auto px-5  '>
                <h1 className='max-[400px]:text-[50px] text-[60px] lg:text-[70px] font-normal text-white sm:mb-5 lg:mb-0 text-center '>My Work</h1>
                <div className='absolute bottom-0 left-0 '> <MyWorkElp /> </div>
                <div className='mt-[150px] '>
                    <div >
                        <Image src={myWork_img1} alt='img' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyWork
