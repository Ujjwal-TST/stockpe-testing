import React, { useState } from 'react'
import { Col, Modal, Row } from 'antd'
import { Link } from 'react-router-dom'
import pc_remove from '../../assets/images/pc_menu.png'
import logo from '../../assets/logo/LOGO.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'
import linkdin from '../../assets/images/linkdin.png'
import youtube from '../../assets/images/youtube.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const QuickLinks = () => {

    const year = new Date().getFullYear()
    const [isModal, setIsModal] = useState(false)
    const [mobileModal, setMobileModal] = useState(false)
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

    const { ref, inView } = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.3, // Percentage of element visibility to trigger the animation


    });

    const AnimationVariants = {
        hidden: { opacity: 0, y: 100, },
        visible: { opacity: 1, y: 0 },
    };
    const AnimationVariants2 = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <>

            {/* Mobile View */}
            <section className='tw-bg-primaryBg tw-block md:tw-hidden '>
                <div className='tw-mx-5 tw-pt-6 '>

                    <div>
                        <div>
                            <img src={logo} className='tw-w-[97px]' alt='stockpe logo' />
                        </div>
                        <div className='tw-mt-[11px]'>
                            <p className='tw-font-secondaryFonts tw-text-third_text tw-font-medium tw-text-[13px] tw-leading-[130%]'>Making Financial Assets Fun For Everyone ❤️</p>
                        </div>
                        <div className="tw-flex tw-items-center tw-gap-4 tw-justify-start tw-mt-5">
                            <a
                                href="https://twitter.com/stockpe"
                                target="_blank"
                                rel="noreferrer"

                            >
                                <img src={twitter} alt="stokcPe twitter" />
                            </a>
                            <a
                                href="https://www.instagram.com/stockpe.in/"
                                target="_blank"
                                rel="noreferrer"

                            >
                                <img src={instagram} alt="stokcPe instagram" />
                            </a>


                            <a
                                href="https://www.linkedin.com/company/stockpe/"
                                target="_blank"
                                rel="noreferrer"

                            >
                                <img src={linkdin} alt="stokcPe linkdin" />
                            </a>
                            <a
                                href="https://www.youtube.com/@StockPeofficial"
                                target="_blank"
                                rel="noreferrer"

                            >
                                <img src={youtube} alt="stokcPe youtube" />
                            </a>

                        </div>
                    </div>

                    <div className='tw-mt-12'>
                        <p className='tw-font-primaryFonts tw-text-secondary_text tw-text-desk-lg-3 tw-font-bold'>Quick Links</p>
                        <div className='tw-mt-5'>

                            <Link to='/'>
                                <p className='tw-mb-3 tw-cursor-pointer tw-font-light tw-font-secondaryFonts tw-text-secondary_text  tw-text-desk-lg'>Home</p>
                            </Link>
                            <p className='tw-mb-3 tw-cursor-pointer tw-font-light tw-font-secondaryFonts tw-text-secondary_text tw-text-desk-lg' onClick={() => setMobileModal(prev => !prev)}>Contact Us</p>
                            <p onClick={downloadApplication} className=' tw-cursor-pointer tw-font-light tw-font-secondaryFonts tw-text-primary_text tw-text-desk-lg'>Try the app out for free!</p>

                        </div>
                    </div>
                    <div className='tw-mt-12'>
                        <p className='tw-font-primaryFonts  tw-text-secondary_text tw-text-desk-lg-3 tw-font-bold'>Support</p>
                        <div className='tw-mt-5'>

                            <a href="mailto:support@stockpe.in" >

                                <p className='tw-mb-3 tw-cursor-pointer tw-font-secondaryFonts tw-text-secondary_text tw-font-light tw-text-desk-lg'>Email Us</p>
                            </a>
                            <Link to='/privacy-policy'>
                                <p className='tw-mb-3 tw-cursor-pointer tw-font-secondaryFonts tw-text-secondary_text tw-font-light tw-text-desk-lg'>Privacy Policy</p>
                            </Link>
                            <Link to='/delete-my-account'>
                                <p className=' tw-cursor-pointer tw-font-secondaryFonts tw-text-delete_text tw-font-light tw-text-desk-lg'>Delete My Account</p>
                            </Link>

                        </div>
                        <div className='tw-py-12'>
                            <p className='tw-font-primaryFonts tw-text-secondary_text tw-text-desk-lg-3 tw-font-bold'>Global Products</p>
                            <div className='tw-mt-5'>

                                <a href='https://stockpe.in/' target='_blank' rel='noreferrer' className=' tw-underline tw-font-light tw-cursor-pointer tw-font-secondaryFonts tw-text-primary_text hover:tw-text-primary_text hover:tw-underline tw-text-desk-lg'>StockPe.in</a>


                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <p className='tw-bg-secondBg tw-font-light tw-py-1 tw-font-secondaryFonts tw-text-secondary_text tw-text-opacity-50 tw-text-center tw-text-desk-lg'>
                        Copyright {year} StockPe All Rights Reserved
                    </p>
                </div>
            </section>

            <Modal
                centered
                closable={false}
                open={mobileModal}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}

            >
                <section className='tw-py-5 tw-px-4'>
                    <div className='tw-flex tw-justify-between tw-items-center'>
                        <p className='tw-text-primary_text tw-font-primaryFonts tw-font-semibold tw-text-[20px] tw-leading-[130%]'>Contact Us</p>
                        <div onClick={() => setMobileModal(prev => !prev)}>
                            <img src={pc_remove} alt='stockpe global contact close' />
                        </div>

                    </div>
                    <div className='tw-mt-8'>
                        <p className='tw-font-secondaryFonts tw-text-secondary_text tw-text-opacity-60 tw-text-[13px] tw-leading-[130%] tw-font-medium '> Email</p>
                        <a href='mailto:support@stockpe.in' className='tw-mt-2 tw-font-secondaryFonts hover:tw-text-secondary_text  tw-text-secondary_text tw-text-desk-lg tw-tracking-[0.15px] tw-underline'>
                            support@stockpe.in
                        </a>
                    </div>
                </section>
            </Modal>

            {/* Desktop View */}
            <section className='tw-bg-black tw-hidden md:tw-block '>
                <div className='tw-py-12 tw-max-w-screen-3xl 3xl:tw-mx-auto tw-mx-20'
                >
                    <Row gutter={[16, 16]}>
                        <Col className='' span={10}>
                            <motion.div
                                className="box"
                                ref={ref}
                                initial={{ opacity: 0, y: 100 }} // Initial position and opacity
                                animate={inView ? "visible" : "hidden"} // Target position and opacity
                                variants={AnimationVariants}
                                transition={{
                                    duration: 1.3,
                                    delay: 0.25,
                                    ease: [0, 0.71, 0.2, 1.01],
                                }}
                            >
                                <div>
                                    <img src={logo} className='tw-w-[160px]' alt='stockpe logo' />
                                </div>
                                <div className='tw-mt-[11px]'>
                                    <p className='tw-font-secondaryFonts tw-text-third_text tw-font-medium tw-text-[13px] tw-leading-[130%]'>Making Financial Assets Fun For Everyone ❤️</p>
                                </div>
                                <div className="tw-flex tw-items-center tw-justify-start tw-mt-5">
                                    <a
                                        href="https://twitter.com/stockpe"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="tw-mr-5"
                                    >
                                        <img src={twitter} alt="stokcPe twitter" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/stockpe.in/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="tw-mr-5"
                                    >
                                        <img src={instagram} alt="stokcPe instagram" />
                                    </a>


                                    <a
                                        href="https://www.linkedin.com/company/stockpe/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="tw-mr-5"
                                    >
                                        <img src={linkdin} alt="stokcPe linkdin" />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@StockPeofficial"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="tw-mr-5"
                                    >
                                        <img src={youtube} alt="stokcPe youtube" />
                                    </a>

                                </div>
                            </motion.div>
                        </Col>
                        <Col className='' span={14}>
                            <div className='tw-grid tw-grid-cols-3'>
                                <motion.div
                                    className="box"
                                    ref={ref}
                                    initial={{ opacity: 0, y: 100 }} // Initial position and opacity
                                    animate={inView ? "visible" : "hidden"} // Target position and opacity
                                    variants={AnimationVariants}
                                    transition={{
                                        duration: 1.3,
                                        delay: 0.25,
                                        ease: [0, 0.71, 0.2, 1.01],
                                    }}
                                >
                                    <div className='tw-border-r tw-border-[rgba(251,255,255,0.3)]'>
                                        <p className='tw-font-primaryFonts tw-text-secondary_text tw-text-desk-lg-3 tw-font-bold'>Quick Links</p>
                                        <div className='tw-mt-5'>

                                            <Link to='/'>
                                                <p className='tw-mb-3 tw-cursor-pointer tw-font-light tw-font-secondaryFonts tw-text-secondary_text  tw-text-desk-lg'>Home</p>
                                            </Link>
                                            <p className='tw-mb-3 tw-font-light tw-cursor-pointer tw-font-secondaryFonts tw-text-secondary_text tw-text-desk-lg' onClick={() => setIsModal(prev => !prev)}>Contact Us</p>
                                            <p onClick={downloadApplication} className=' tw-cursor-pointer tw-font-light tw-font-secondaryFonts tw-text-primary_text tw-text-desk-lg'>Try the app out for free!</p>

                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="box"
                                    ref={ref}
                                    initial={{ opacity: 0, y: 100 }} // Initial position and opacity
                                    animate={inView ? "visible" : "hidden"} // Target position and opacity
                                    variants={AnimationVariants}
                                    transition={{
                                        duration: 1.3,
                                        delay: 0.25,
                                        ease: [0, 0.71, 0.2, 1.01],
                                    }}
                                >
                                    <div className='tw-border-r tw-border-[rgba(251,255,255,0.3)] tw-ml-8'>
                                        <p className='tw-font-primaryFonts tw-text-secondary_text tw-text-desk-lg-3 tw-font-bold'>Support</p>
                                        <div className='tw-mt-5'>

                                            <a href="mailto:support@stockpe.in" >
                                                <p className='tw-mb-3 tw-cursor-pointer tw-font-secondaryFonts tw-text-secondary_text tw-font-light tw-text-desk-lg'>Email Us</p>
                                            </a>
                                            <Link to='/privacy-policy'>
                                                <p className='tw-mb-3 tw-cursor-pointer tw-font-secondaryFonts tw-text-secondary_text tw-font-light tw-text-desk-lg'>Privacy Policy</p>
                                            </Link>
                                            <Link to='/delete-my-account'>
                                                <p className=' tw-cursor-pointer tw-font-secondaryFonts tw-text-delete_text tw-font-light tw-text-desk-lg'>Delete My Account</p>
                                            </Link>


                                        </div>
                                    </div>
                                </motion.div>
                                <div className=' tw-ml-8'>
                                    <motion.div
                                        className="box"
                                        ref={ref}
                                        initial={{ opacity: 0, y: 100 }} // Initial position and opacity
                                        animate={inView ? "visible" : "hidden"} // Target position and opacity
                                        variants={AnimationVariants}
                                        transition={{
                                            duration: 1.3,
                                            delay: 0.25,
                                            ease: [0, 0.71, 0.2, 1.01],
                                        }}
                                    >
                                        <p className='tw-font-primaryFonts tw-text-secondary_text tw-text-desk-lg-3 tw-font-bold'>Global Products</p>
                                        <div className='tw-mt-5'>

                                            <a href='https://stockpe.in/' target='_blank' rel='noreferrer' className=' tw-underline tw-font-light tw-cursor-pointer tw-font-secondaryFonts tw-text-primary_text hover:tw-text-primary_text hover:tw-underline tw-text-desk-lg'>StockPe.in</a>


                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <motion.div
                    className="box"
                    ref={ref}
                    initial={{ opacity: 0 }} // Initial position and opacity
                    animate={inView ? "visible" : "hidden"} // Target position and opacity
                    variants={AnimationVariants2}
                    transition={{
                        duration: 1.3,
                        delay: 0.25,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <div>
                        <p className='tw-bg-secondBg tw-py-2 tw-font-light tw-font-secondaryFonts tw-text-secondary_text tw-text-opacity-50 tw-text-center tw-text-desk-lg'>
                            Copyright {year} StockPe All Rights Reserved
                        </p>
                    </div>
                </motion.div>
            </section>
            <Modal
                centered
                closable={false}
                open={isModal}
                className=''
                onOk={() => setIsModal(false)}
                onCancel={() => setIsModal(false)}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}

            >
                <section className='tw-p-10'>
                    <div className='tw-flex tw-justify-between '>
                        <p className='tw-text-primary_text tw-font-primaryFonts tw-font-semibold tw-text-[22px] tw-leading-[130%]'>Contact Us</p>
                        <div onClick={() => setIsModal(prev => !prev)}>
                            <img src={pc_remove} alt='stockpe global contact close' />
                        </div>

                    </div>
                    <div className='tw-mt-8'>
                        <p className='tw-font-secondaryFonts tw-text-secondary_text tw-text-opacity-60 tw-text-desk-lg tw-font-medium tw-tracking-[-0.3px]'> Email</p>
                        <a href='mailto:support@stockpe.in' className='tw-mt-2 tw-font-secondaryFonts hover:tw-text-secondary_text  tw-text-secondary_text tw-text-desk-lg-1'>
                            support@stockpe.in
                        </a>
                    </div>
                </section>
            </Modal>
        </>
    )
}

export default QuickLinks