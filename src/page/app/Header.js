import React, { useState } from 'react'
import { Modal } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../../assets/logo/LOGO.png'
import share from '../../assets/images/share.png'
import menu from '../../assets/images/menu.png'
import mobile_menu_remove from '../../assets/images/mobile_menu_remove.png'
import white_arrow from '../../assets/images/white_arrow.png'
import pc_remove from '../../assets/images/pc_menu.png'

const Header = () => {
    const [mobileDrawer, setMobileDrawer] = useState(false)
    const [isModal, setIsModal] = useState(false)
    const [mobileModal, setMobileModal] = useState(false)
    const navigate = useNavigate();
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

    const mobileMenu = [
        {
            id: 1,
            label: 'Home',
            action: () => navigate('/'),
            duration: 0.4,
            delay: 0.1,
        },
        {
            id: 2,
            label: 'Try it out for free!',
            action: () => { downloadApplication() },
            duration: 0.5,
            delay: 0.2,
        },
        {
            id: 3,
            label: 'Contact Us',
            action: () => {
                setMobileDrawer(false)
                setMobileModal(true)
            },
            duration: 0.6,
            delay: 0.3,
        },

    ]
    const url = window.location.href;
    const path = url.split('/')[3]



    return (
        <>
            {/* Mobile  & Tab View */}

            <header className=' tw-bg-primaryBg tw-font-secondaryFonts tw-sticky tw-top-0  tw-z-40  lg:tw-hidden '>
                <nav className='tw-mx-5 tw-py-4 navbar-shadow ' >

                    <motion.div
                        className="box"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.25,
                            delay: 0.35,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        <div className='tw-flex  tw-justify-between  tw-items-center'>
                            <Link to='/'>
                                <div className='tw-w-[100px]'>
                                    <img src={logo} alt='stockpe logo' />
                                </div>
                            </Link>
                            <div onClick={() => setMobileDrawer(prev => !prev)}>
                                <img src={menu} alt='stockpe global menu' />
                            </div>
                        </div>
                    </motion.div>
                </nav>
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
                            <a href='mailto:support@stockpe.in' className='tw-mt-2 tw-font-secondaryFonts hover:tw-text-secondary_text tw-font-light tw-text-secondary_text tw-text-desk-lg tw-tracking-[0.15px] tw-underline'>
                                support@stockpe.in
                            </a>
                        </div>
                    </section>
                </Modal>


                {/* <Drawer

                    placement={'right'}
                    width={1280}

                    onClose={() => setMobileDrawer(prev => !prev)}
                    closable={false}
                    className='drawer-body navbar-shadow'
                    open={mobileDrawer}


                >

                    <div className=''>
                        <div className='  tw-flex tw-justify-between tw-items-center' >
                            <div className='tw-w-[100px]'>
                                <img src={logo} alt='stockpe logo' />
                            </div>
                            <div onClick={() => setMobileDrawer(prev => !prev)}>
                                <img src={mobile_menu_remove} alt='stockpe global menu close' />
                            </div>

                        </div>
                        <section className='tw-my-9'>



                            {mobileMenu?.map(ele =>
                                <motion.div
                                    key={ele?.id}
                                    initial={{ opacity: 0, x: 100 }} // Initial position and opacity
                                    animate={{ opacity: 1, x: 0 }} // Target position and opacity
                                    transition={{
                                        duration: ele?.duration,
                                        delay: ele?.delay,
                                        type: "tween",
                                        ease: "easeInOut",
                                    }}
                                >
                                    <div className='tw-pb-5 tw-mb-3 tw-flex tw-justify-between tw-items-start' style={{ borderBottom: '1px solid rgba(251, 255, 255, 0.20)' }} onClick={ele?.action}>
                                        <div>
                                            <p className='tw-text-secondary_text tw-font-primaryFonts tw-font-medium tw-text-desk-lg-3'> {ele?.label}</p>
                                        </div>
                                        <div>
                                            <img src={white_arrow} alt='Home' className='tw' />
                                        </div>
                                    </div>
                                </motion.div>)}
                            <motion.div
                                initial={{ opacity: 0, x: 100 }} // Initial position and opacity
                                animate={{ opacity: 1, x: 0 }} // Target position and opacity
                                transition={{
                                    duration: 0.7,
                                    delay: 0.4,
                                    type: "tween",
                                    ease: "easeInOut",
                                }}
                            >
                                <a href='https://stockpe.in/' target='_blank' rel='noreferrer' className='tw-pb-5 tw-mb-3 tw-flex tw-justify-between tw-items-start' style={{ borderBottom: '1px solid rgba(251, 255, 255, 0.20)' }}>
                                    <div>
                                        <p className='tw-text-secondary_text tw-font-primaryFonts tw-font-semibold tw-text-desk-lg-3'> StockPe.in</p>
                                    </div>
                                    <div>
                                        <img src={share} alt='Home' className='tw' />
                                    </div>
                                </a>
                            </motion.div>
                        </section>
                    </div>
                </Drawer> */}
                <AnimatePresence className=''>
                    {mobileDrawer && (
                        <motion.aside
                            initial={{ width: "0%" }}
                            className="tw-float-right "
                            animate={{
                                width: "100%",
                            }}
                            exit={{
                                width: 0,
                                transition: { delay: 0, duration: 0.3 },
                            }}
                        >
                            <div className='tw-px-6 tw-py-4 tw-w-full tw-fixed tw-top-0   tw-bg-primaryBg tw-z-50 tw-h-full'>
                                <div >
                                    <div className='tw-py-3 tw-flex navbar-shadow  tw-justify-between tw-items-center' >
                                        <div className='tw-w-[100px]'>
                                            <img src={logo} alt='stockpe logo' />
                                        </div>
                                        <div onClick={() => setMobileDrawer(prev => !prev)}>
                                            <img src={mobile_menu_remove} alt='stockpe global menu close' />
                                        </div>

                                    </div>
                                    <section className='tw-my-8'>


                                        <AnimatePresence>
                                            {mobileMenu?.map(ele =>
                                                <motion.div
                                                    key={ele?.id}
                                                    initial={{ opacity: 0, x: 100 }} // Initial position and opacity
                                                    animate={{ opacity: 1, x: 0 }} // Target position and opacity
                                                    transition={{
                                                        duration: ele?.duration,
                                                        delay: ele?.delay,
                                                        type: "tween",
                                                        ease: "easeInOut",
                                                    }}
                                                >
                                                    <div className='tw-pb-5 tw-mb-3 tw tw-flex  tw-justify-between tw-items-start menu-border' onClick={ele?.action}>
                                                        <div>
                                                            <p className='tw-text-secondary_text tw-font-primaryFonts tw-font-medium tw-text-desk-lg-3'> {ele?.label}</p>
                                                        </div>
                                                        <div>
                                                            <img src={white_arrow} alt='Home' className='tw' />
                                                        </div>
                                                    </div>
                                                </motion.div>)}
                                            <motion.div
                                                initial={{ opacity: 0, x: 100 }} // Initial position and opacity
                                                animate={{ opacity: 1, x: 0 }} // Target position and opacity
                                                transition={{
                                                    duration: 0.7,
                                                    delay: 0.4,
                                                    type: "tween",
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                <a href='https://stockpe.in/' target='_blank' rel='noreferrer' className='tw-pb-5 tw-mb-3 tw-flex tw-justify-between tw-items-start menu-border' >
                                                    <div>
                                                        <p className='tw-text-secondary_text tw-font-primaryFonts tw-font-semibold tw-text-desk-lg-3'> StockPe.in</p>
                                                    </div>
                                                    <div>
                                                        <img src={share} alt='Home' className='tw' />
                                                    </div>
                                                </a>
                                            </motion.div>
                                        </AnimatePresence>
                                    </section>
                                </div>
                            </div>
                        </motion.aside>
                    )}
                </AnimatePresence>

            </header>


            {/* Desktop View */}
            <header className=' tw-bg-primaryBg tw-font-secondaryFonts tw-sticky tw-top-0  tw-z-40  tw-hidden lg:tw-block'>
                <nav className='tw-mx-20 navbar-shadow  tw-pt-8 tw-pb-5 tw-max-w-screen-3xl 3xl:tw-mx-auto ' >
                    <motion.div
                        className="box"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.5,
                            delay: 0.35,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        <div className='tw-flex animation tw-justify-between '>
                            <Link to='/'>
                                <div >
                                    <img src={logo} alt='stockpe logo' className='tw-cursor-pointer' />
                                </div>
                            </Link>
                            <div className=' tw-gap-6 tw-flex tw-justify-between tw-items-center'>
                                <Link to='/'>
                                    <p className={`tw-text-secondary_text tw-cursor-pointer hover:tw-text-opacity-100 ${path === ""
                                        ? "tw-text-opacity-100"
                                        : "tw-text-opacity-50"
                                        } !tw-font-secondaryFonts tw-text-desk-lg-2 -tw-tracking-[0.4px] tw-font-medium`}>
                                        Home
                                    </p>
                                </Link>
                                <p className='tw-text-secondary_text hover:tw-text-opacity-100 tw-cursor-pointer tw-text-opacity-50 tw-text-desk-lg-2 !tw-font-secondaryFonts -tw-tracking-[0.4px] tw-font-medium' onClick={() => setIsModal(true)}>
                                    Contact Us
                                </p>

                                <a href='https://stockpe.in/' target='_blank' rel='noreferrer' className='tw-text-secondary_text tw-cursor-pointer !tw-font-secondaryFonts tw-opacity-50 hover:tw-text-opacity-100 hover:tw-opacity-100 tw-text-desk-lg-2 -tw-tracking-[0.4px] tw-font-medium'>
                                    <span className='tw-mr-2'>StockPe.in</span> <img src={share} className='tw-inline-block  -tw-mt-1' alt='goto stockpe.in' />
                                </a>

                            </div>
                            <div>
                                <button onClick={downloadApplication} className='tw-bg-primary_text light tw-px-8 tw-py-3 tw-font-secondaryFonts tw-rounded-md'>
                                    <span className='tw-text-desk-lg-1 tw-font-bold'>Try For Free</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>


                </nav>
            </header>
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

export default Header