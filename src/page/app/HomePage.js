import React from 'react'
import { motion } from 'framer-motion'
import stocks from '../../assets/images/stocks.png'
import arrow from '../../assets/images/arrow.png'

const HomePage = () => {
    const awsAPKLink = 'https://stockpe-global.s3.ap-south-1.amazonaws.com/stockpe.apk';

    const downloadApplication = () => {
        // Create an invisible anchor element
        const link = document.createElement('a');
        link.href = awsAPKLink;

        // Set the download attribute with the desired filename
        link.download = 'Stockpe.apk';  // Replace with the actual filename

        // Append the anchor to the body
        document.body.appendChild(link);

        // Trigger a click on the anchor to start the download
        link.click();

        // Remove the anchor from the body
        document.body.removeChild(link);
    };
    return (
        <>
            {/* Mobile  View */}
            <section className='tw-bg-primaryBg tw-block md:tw-hidden '>
                <div className='tw-mx-5 tw-py-10'>
                    {/* Text Div */}

                    <motion.div
                        className="box homepage-animation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.4,
                            delay: 0.35,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}

                    >
                        <div>
                            <p className='tw-font-secondaryFonts tw-text-[15px] tw-leading-[125%]  tw-text-secondary_text'> Introducing</p>
                        </div>
                        <div className='tw-mt-3 tw-mb-4'>
                            <p className='tw-font-primaryFonts tw-text-secondary_text tw-text-[34px] tw-leading-[125%] tw-font-bold'>
                                Fantasy <span className='tw-text-primary_text'> Stock <br /> Market </span> that let <br /> you win big.
                            </p>

                        </div>
                        <div className='tw-mb-4'>
                            <p className='tw-font-secondaryFonts tw-text-secondary_text tw-text-desk-lg '>Compete with friends, Build portfolio and <br className='tw-hidden xs:tw-block' /> earn rewards. </p>
                        </div>
                        <div className='tw-mt-4 tw-mb-10'>
                            <button onClick={downloadApplication} className='tw-bg-primary_text mobile-button-animation tw-w-full tw-font-secondaryFonts tw-px-5 tw-py-3 tw-rounded-md'>
                                <div className='tw-flex tw-justify-center tw-items-center'>
                                    <span className='tw-text-desk-lg -tw-tracking-[0.3px] tw-font-semibold tw-mr-3'>Try For Free</span>
                                    <img className='tw-inline-block' src={arrow} alt='arrow' />
                                </div>
                            </button>
                        </div>
                        <div className=' tw-flex tw-justify-center '>
                            <img src={stocks} alt='stocks' />
                        </div>

                    </motion.div>
                </div>
            </section>


            {/* Desktop and Tab Viwe */}
            <section className='tw-bg-primaryBg tw-hidden md:tw-block ' >
                <div className='tw-pt-[52px]  tw-pb-[40px] tw-max-w-screen-3xl 3xl:tw-mx-auto  tw-mx-20'>

                    <motion.div
                        className="box"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.7,
                            delay: 0.35,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}

                    >
                        <div className="tw-grid tw-grid-cols-2  lg:tw-gap-20">
                            {/* Text Col */}
                            <div className='homepage-animation'>
                                <div>
                                    <p className='tw-font-primaryFonts md:tw-text-[15px] lg:tw-text-[20px] tw-leading-[130%] tw-font-medium tw-text-secondary_text'> Introducing</p>
                                </div>
                                <div className='tw-mt-4 tw-mb-6'>
                                    <p className='tw-font-primaryFonts tw-text-secondary_text tw-text-[30px]  lg:tw-text-[45px] xl:tw-text-[62px] tw-leading-[125%] tw-font-bold'>
                                        Fantasy <span className='tw-text-primary_text'> Stock <br /> Market </span> that let <br /> you win big.
                                    </p>

                                </div>
                                <div className='tw-mb-6'>
                                    <p className='tw-font-secondaryFonts tw-text-secondary_text md:tw-text-sm lg:tw-text-base xl:tw-text-desk-lg-2 -tw-tracking-[0.4px]'>Compete with friends, Build portfolio and earn rewards. </p>

                                </div>
                                <div className='tw-mt-4 '>

                                    <button onClick={downloadApplication} className='tw-bg-primary_text hover:tw-bg-btn_gradiant click-arrow   tw-font-secondaryFonts tw-px-5 md:tw-py-2 lg:tw-py-3 tw-rounded-md'>
                                        <div className='tw-flex  tw-justify-between tw-items-center '>
                                            <span className='lg:tw-text-desk-lg-1 tw-text-[15px]  tw-font-bold tw-mr-3'>Try For Free</span>
                                            <img className='tw-inline-block  mv-arrow click-arrow' src={arrow} alt='arrow' />
                                        </div>
                                    </button>
                                </div>



                            </div>



                            {/* Image Col */}
                            <div className='tw-flex tw-justify-center homepage-img-animation'>
                                <img src={stocks} alt='stocks' />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>




        </>
    )
}

export default HomePage