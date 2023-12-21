import React from 'react'
import rating from '../../assets/images/ratings.png'
import f1 from '../../assets/images/f1.png'
import f2 from '../../assets/images/f2.png'
import f3 from '../../assets/images/f3.png'
import f4 from '../../assets/images/f4.png'
import { useInView } from 'react-intersection-observer'
import { motion } from "framer-motion"



const Feature = () => {
    const featureImages = [
        {
            name: 'business-standard',
            icon: f1,
            className: 'md:tw-w-[100px] lg:tw-w-[135px] xl:tw-w-[200px]',
        },
        {
            name: 'inc42',
            icon: f2,
            className: 'md:tw-w-[60px] lg:tw-w-[75px] xl:tw-w-[100px]',
        },
        {
            name: 'ncb-capital',
            icon: f3,
            className: 'md:tw-w-[90px] lg:tw-w-[140px] xl:tw-w-[180px]',
        },
        {
            name: 'Daily Hunt',
            icon: f4,
            className: 'md:tw-w-[60px] lg:tw-w-[100px] xl:tw-w-[125px]',
        },
    ]
    const featureImgMobile1 = [
        {
            name: 'business-standard',
            icon: f1,
            className: 'tw-w-[160px]',
        },
        {
            name: 'inc42',
            icon: f2,
            className: 'tw-w-[90px]',
        },


    ];
    const featureImgMobile2 = [
        {
            name: 'ncb-capital',
            icon: f3,
            className: 'tw-w-[160px]',
        },
        {
            name: 'Daily Hunt',
            icon: f4,
            className: 'tw-w-[90px]',
        },
    ];
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.25, // Percentage of element visibility to trigger the animation
    });
    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <>
            {/* Mobile View */}
            <section className='tw-bg-secondBg tw-block md:tw-hidden'>
                <div className='tw-mx-5 tw-py-6'>
                    <div className='tw-mb-5'>
                        <div>
                            <div>
                                <p className={`tw-font-secondaryFonts  tw-text-center tw-text-secondary_text tw-text-opacity-50  tw-text-desk-lg`}>Trusted and Used by</p>
                            </div>
                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, y: 50 }} // Initial position and opacity
                                animate={inView ? "visible" : "hidden"} // Target position and opacity
                                variants={animationVariants}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.15,
                                    type: "tween",
                                    ease: "easeOut",
                                }}
                            >
                                <div className={` tw-my-3`}>
                                    <p className='tw-font-primaryFonts tw-text-center tw-text-[34px]  tw-leading-125 tw-font-bold tw-text-secondary_text'><span className='tw-text-[#FFD600]'>300k +</span> users</p>
                                </div>
                            </motion.div>
                        </div>
                        <div className='tw-flex tw-justify-center'>
                            <img src={rating} className='tw-w-[265px]' alt='app ratings' />
                        </div>
                    </div>
                    <div className='tw-grid tw-grid-rows-1  '>
                        <div className='tw-border-t tw-border-[rgba(255,255,255,0.2)]'>
                            <div className=' tw-mt-5'>
                                <div>
                                    <p className='tw-font-secondaryFonts tw-text-center tw-text-secondary_text tw-text-opacity-50  tw-text-desk-lg'>Featured in</p>
                                </div>
                                <div className='tw-mt-4 tw-mb-6'>
                                    <div className='tw-flex  tw-justify-around tw-items-center'>
                                        {featureImgMobile1?.map(ele => <div key={ele?.name} className=''>
                                            <img src={ele?.icon} className={`tw-grayscale ${ele?.className}`} alt={ele?.name} />
                                        </div>)}
                                    </div>
                                </div>
                                <div className='tw-flex  tw-justify-around tw-items-center'>
                                    {featureImgMobile2?.map(ele => <div key={ele?.name} className=''>
                                        <img src={ele?.icon} className={`tw-grayscale  ${ele?.className}`} alt={ele?.name} />
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Desktop & Tab View */}
            <section section className='tw-bg-secondBg tw-hidden md:tw-block' >

                <div className='tw-mx-20 tw-py-8 tw-max-w-screen-3xl 3xl:tw-mx-auto'>
                    <div className="tw-grid tw-grid-cols-3  tw-gap-8">
                        <div className=' tw-border-r tw-border-[rgba(255,255,255,0.3)] '>
                            <div className='tw-mx-3'>
                                <div>
                                    <p className='tw-font-secondaryFonts tw-text-secondary_text tw-text-opacity-50 tw-font-medium tw-text-sm lg:tw-text-desk-lg-2'>Trusted and Used by</p>
                                </div>
                                <div className='tw-my-3'>
                                    <p className='tw-font-primaryFonts md:tw-text-[20px] lg:tw-text-[35px] 1280:!tw-text-[40px] tw-leading-125 tw-font-bold tw-text-secondary_text'><span className='tw-text-[#FFD600]'>300k +</span> users</p>
                                </div>
                            </div>
                            <div>
                                <img src={rating} alt='ratings' />
                            </div>
                        </div>
                        <div className=' tw-col-span-2'>
                            <div className='tw-ml-4'>
                                <div>
                                    <p className='tw-font-secondaryFonts tw-text-secondary_text tw-text-opacity-60 tw-font-medium tw-text-sm  lg:tw-text-desk-lg-2 -tw-tracking-[0.4px]'>Featured in</p>
                                </div>
                                <div className='tw-mt-3 tw-flex tw-justify-between tw-items-center'>
                                    {featureImages?.map(ele => <div key={ele?.name}>
                                        <img src={ele?.icon} className={`tw-grayscale 2xl:tw-w-full ${ele?.className}`} alt={ele?.name} />
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section >

        </>
    )
}

export default Feature