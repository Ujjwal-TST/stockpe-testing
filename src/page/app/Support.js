import React from 'react'
import support from '../../assets/images/support.png'
import yellow_arr from '../../assets/images/yellow_arr.png'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Support = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.35, // Percentage of element visibility to trigger the animation
    });
    const [mobileRef, mobileInView] = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.35, // Percentage of element visibility to trigger the animation


    });
    const AnimationVariants = {
        hidden: { opacity: 0, },
        visible: { opacity: 1, },
    };
    ;
    return (
        <>

            {/* Mobile View */}
            <section className='tw-bg-primaryBg tw-block md:tw-hidden '>

                <motion.div
                    className={`box ${mobileInView ? 'support-animation' : ''}`}
                    ref={mobileRef}
                    initial={{ opacity: 0, }} // Initial position and opacity
                    animate={mobileInView ? "visible" : "hidden"} // Target position and opacity
                    variants={AnimationVariants}
                    transition={{
                        duration: 1.4,
                        delay: 0.25,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}>
                    <div className='tw-mx-5 tw-pt-10 tw-pb-0.5'>
                        {/* Text Div */}
                        <div className=''>

                            <div className='tw-my-3 '>
                                <p className='tw-font-primaryFonts tw-text-secondary_text  tw-text-[34px] 320:tw-text-[30px] tw-leading-[125%] tw-font-bold'>
                                    <span className='tw-text-primary_text'>  24 Hours</span> Support
                                </p>

                            </div>
                            <div className='tw-mb-4'>
                                <p className='tw-font-secondaryFonts tw-text-secondary_text tw-text-[14px] tw-font-light  tw-leading-125'>Fell free to chat with our support team whenever <br className='tw-hidden xs:tw-block' /> you need clarity or assistance</p>
                            </div>

                            <div className=' tw-flex tw-justify-center '>
                                <img src={support} alt='stocks' />
                            </div>
                            <div className='tw-mt-4 tw-mb-10'>
                                <button className='tw-text-primary_text contact-button-animation tw-border tw-border-primary_text tw-bg-transparent tw-w-full  tw-px-5 tw-py-3 tw-rounded-md'>
                                    <div className='tw-flex tw-justify-center tw-items-center'>
                                        <span className='tw-text-desk-lg tw-font-secondaryFonts -tw-tracking-[0.3px] tw-font-medium tw-mr-3'>Connect With Us</span>
                                        <img className='tw-inline-block' src={yellow_arr} alt='arrow' />
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </section>


            {/* Tab & Desktop View */}
            <section className='tw-bg-primaryBg tw-hidden md:tw-block ' >
                <motion.div
                    className="box"
                    ref={ref}
                    initial={{ opacity: 0, }} // Initial position and opacity
                    animate={inView ? "visible" : "hidden"} // Target position and opacity
                    variants={AnimationVariants}
                    transition={{
                        duration: 1.2,
                        delay: 0.40,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <div className='tw-pt-24   tw-max-w-screen-3xl 3xl:tw-mx-auto  tw-mx-20'>
                        <div className="tw-grid tw-grid-cols-2 tw-gap-5  lg:tw-gap-20">


                            {/* Image Col */}
                            <div className='tw-flex tw-justify-start '>
                                <img src={support} className='' alt='stocks' />
                            </div>

                            {/* Text Col */}
                            <div className='tw-flex tw-justify-between tw-items-center'>

                                <div className={`${inView ? 'support-animation' : ' '}`}>
                                    <div className='tw-mt-12 tw-mb-6'>
                                        <p className='tw-font-primaryFonts tw-text-secondary_text tw-text-[35px]  lg:tw-text-[45px] xl:tw-text-[62px] tw-leading-[125%] tw-font-bold'>
                                            <span className='tw-text-primary_text'> 24 Hours </span> <br />  Support
                                        </p>

                                    </div>
                                    <div className='tw-mb-10 '>
                                        <p className='tw-font-secondaryFonts tw-text-secondary_text md:tw-text-[13px] lg:tw-text-base xl:tw-text-desk-lg-3 '>Fell free to chat with our support team whenever <br className='tw-hidden lg:tw-block' /> you need clarity or assistance</p>

                                    </div>
                                    <div className=''>
                                        <button className='tw-text-primary_text click-arrow  tw-bg- tw-border tw-border-primary_text tw-font-secondaryFonts tw-pl-5 tw-pr-4 md:tw-py-2 lg:tw-py-3 tw-rounded-md hover:tw-bg-contact_btn'>
                                            <div className='tw-flex tw-justify-between tw-items-center'>
                                                <span className='lg:tw-text-desk-lg tw-text-[14px] tw-font-medium tw-mr-3'>Connect With Us</span>
                                                <img className='tw-inline-block mv-arrow click-arrow' src={yellow_arr} alt='arrow' />
                                            </div>
                                        </button>
                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>
                </motion.div>
            </section>

        </>
    )
}

export default Support