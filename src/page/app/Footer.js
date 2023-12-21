import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Footer = () => {
    const disclaimer = [
        {
            id: 1,
            value: 'This platform is solely meant for education purpose only',
        },
        {
            id: 2,
            value: 'We are not connected/affiliated to any government body for anything inside the platform.',
        },
        {
            id: 3,
            value: 'This game involves an element of financial risk and may be addictive. Please play responsibly at your own risk.',
        },
    ]
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.5, // Percentage of element visibility to trigger the animation


    });



    const AnimationVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    return (
        <>
            {/* Mobile View */}
            <footer className='tw-bg-thirdBg tw-block md:tw-hidden '>
                <div className='tw-mx-5 tw-py-4'>
                    <div>
                        <p className='tw-text-secondary_text tw-text-opacity-50 tw-font-secondaryFonts tw-text-desk-lg tw-font-medium -tw-tracking-[0.3px]'>Disclaimer</p>
                    </div>
                    <div className=' tw-mt-3 tw-ml-[18px]'>
                        <ul className="tw-list-decimal">
                            {disclaimer?.map(ele => <li key={ele?.id} className='tw-py-0.5 tw-font-secondaryFonts tw-font-light tw-text-secondary_text tw-text-opacity-60 tw-text-[12px] tw-leading-[130%]'>{ele?.value}</li>)}
                            {/* <li className='tw-font-secondaryFonts tw-text-secondary_text tw-text-opacity-60 tw-text-[13px] tw-leading-[130%]'>This game involves an element of financial risk and may be addictive. Please play responsibly at your own risk.</li> */}

                        </ul>
                    </div>
                </div>

            </footer>

            {/* Desktop View */}
            <footer className='tw-bg-thirdBg tw-hidden md:tw-block ' >
                <div className='tw-py-5  tw-max-w-screen-3xl 3xl:tw-mx-auto  tw-mx-20'>
                    <motion.div
                        className="box"
                        ref={ref}
                        initial={{ opacity: 0 }} // Initial position and opacity
                        animate={inView ? "visible" : "hidden"} // Target position and opacity
                        variants={AnimationVariants}
                        transition={{
                            duration: 1.3,
                            delay: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >

                        <div className={`${inView ? 'footer-animation' : ''}`}>
                            <div>
                                <p className='tw-text-secondary_text tw-font-secondaryFonts tw-text-desk-lg tw-font-medium -tw-tracking-[0.3px]'>Disclaimer</p>
                            </div>


                            <div className=' tw-mt-3 tw-ml-[18px]'>
                                <ul className="tw-list-disc ">
                                    {disclaimer?.map(ele => <li key={ele?.id} className='tw-font-secondaryFonts tw-text-secondary_text tw-text-opacity-60 tw-text-[13px] tw-font-light tw-leading-[130%]'>{ele?.value}</li>)}


                                </ul>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </footer>
        </>
    )
}

export default Footer