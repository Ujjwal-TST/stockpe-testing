import React from 'react'
import { Card } from 'antd'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion';
import quotes from '../../assets/images/quotes.png'
import person1 from '../../assets/images/person1.png'
import person2 from '../../assets/images/person2.png'
import person3 from '../../assets/images/person3.png'
import person4 from '../../assets/images/person4.png'
import person5 from '../../assets/images/person5.png'
import star_rating from '../../assets/images/star_rating.png'
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    const testimonial = [
        {
            id: 1,
            person: person1,
            name: 'Abby Gonda',
            feedback: `This app is an absolute gem for those who want to have fun and learn about the stock market. I've already made some decent money from playing this game, and I'm hooked!"`
        },
        {
            id: 2,
            person: person2,
            name: 'Wade Warren',
            feedback: `I was skeptical at first, but this game has actually helped me understand the stock market better. I'm learning about different companies and industries, and I'm even making some money in the process.`
        },
        {
            id: 3,
            person: person3,
            name: 'Robert Fox',
            feedback: `"Great graphics and smooth gameplay in this rewarding fantasy stock market game."`
        },
        {
            id: 4,
            person: person4,
            name: 'Krishna Sahay',
            feedback: `"Fantasy element makes this stock market game super fun and engaging."`
        },
        {
            id: 5,
            person: person5,
            name: 'Lorrenz Simmons',
            feedback: `"I'm a beginner when it comes to the stock market, but this game is making it so much easier to learn. I can practice my investing skills without risking any real money`
        },

    ];
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.35, // Percentage of element visibility to trigger the animation


    });

    const AnimationVariants = {
        hidden: { opacity: 0, y: 100, },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            {/* Mobile View */}
            <section className='tw-bg-primaryBg tw-block md:tw-hidden '>
                <div className='tw-mx-5 tw-pb-10'>
                    <div>
                        <div className=''>
                            <p className='tw-font-primaryFonts  tw-text-secondary_text tw-text-[34px]  320:tw-text-[30px]  tw-leading-[125%] tw-font-bold'>
                                User  <span className='tw-text-primary_text'> Testimonials </span>
                            </p>
                        </div>
                        <div className='tw-mb-[46px] tw-mt-3'>
                            <p className='tw-font-secondaryFonts tw-font-light tw-text-secondary_text 320:tw-text-xs tw-text-[14px] tw-leading-125'>Beyond Words: Stories of Satisfaction from Our <br /> Valued Clients.</p>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={1.25}
                        spaceBetween={16}
                        centeredSlides
                        loop
                        grabCursor={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: true,
                            reverseDirection: false,
                        }}

                        pagination={{
                            clickable: true,
                        }}
                        freeMode
                        modules={[FreeMode, Pagination, Autoplay]}
                        className="mySwiper "
                    >
                        {testimonial.map(ele => <SwiperSlide key={ele?.id}>
                            <div >
                                <Card className='tw-bg-secondBg !tw-p-3 tw-h-[190px]  tw-border-secondBg'>
                                    <div className='tw-flex tw-justify-center'>
                                        <img src={quotes} alt='double quotes' />
                                    </div>
                                    <div className='tw-mt-5 '>
                                        <p className='tw-font-secondaryFonts tw-font-light tw-text-center tw-text-secondary_text tw-text-opacity-70 tw-text-[11px] tw-leading-[130%] '>
                                            {ele?.feedback}
                                        </p>
                                    </div>


                                </Card>
                                <div className='tw-relative -tw-top-10  '>
                                    <div className='tw-flex  tw-justify-center tw-items-center '>
                                        <div className='tw-flex tw-flex-col tw-items-center'>
                                            <div >
                                                <img className='tw-w-[60px] tw-h-[60px]' src={ele?.person} alt={ele?.name} />
                                            </div>
                                            <div className='tw-mt-2 tw-flex tw-flex-col tw-items-center tw-justify-center'>
                                                <div>
                                                    <p className='tw-font-primaryFonts tw-text-secondary_text tw-text-desk-lg tw-font-medium -tw-tracking-[0.3px]'>
                                                        {ele?.name}
                                                    </p>
                                                </div>
                                                <div className='tw-mt-2'>
                                                    <img className='tw-w-[95px]' src={star_rating} alt='star_rating' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>)}

                        <div className="swiper-gradient swiper-gradient-left"></div>
                        <div className="swiper-gradient swiper-gradient-right"></div>
                    </Swiper>
                </div>
            </section>


            {/* Tab & Desktop View */}
            <section className='tw-bg-primaryBg tw-hidden md:tw-block ' >
                <motion.div className="box"
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }} // Initial position and opacity
                    animate={inView ? "visible" : "hidden"} // Target position and opacity
                    variants={AnimationVariants}
                    transition={{
                        duration: 1.3,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}>
                    <div className='tw-pt-24   tw-max-w-screen-3xl 3xl:tw-mx-auto  tw-mx-20'>
                        <div className="">

                            <div>
                                <div className='md:tw-mb-3 lg:tw-mb-4  xl:tw-mb-5'>
                                    <p className='tw-font-primaryFonts tw-text-center tw-text-secondary_text tw-text-[35px]  lg:tw-text-[45px] xl:tw-text-[62px] tw-leading-[125%] tw-font-bold'>
                                        User  <span className='tw-text-primary_text'> Testimonials </span>
                                    </p>
                                </div>
                                <div className='tw-mb-20 '>
                                    <p className='tw-font-secondaryFonts tw-text-center tw-text-secondary_text md:tw-text-sm lg:tw-text-desk-lg-1 xl:tw-text-desk-lg-2 '>Beyond Words: Stories of Satisfaction from Our Valued Clients.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='tw-pb-24   tw-max-w-screen-3xl 3xl:tw-mx-auto  '>
                        <Swiper
                            slidesPerView={2.5}
                            spaceBetween={30}
                            loop
                            // initialSlide={3.5}
                            grabCursor={true}
                            centeredSlides
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: true,
                                reverseDirection: false,
                            }}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 2.65 },
                                // 1024,
                            }}

                            freeMode
                            modules={[FreeMode, Autoplay]}
                            className="mySwiper"
                        >
                            {testimonial.map(ele => <SwiperSlide key={ele?.id}>
                                <div >
                                    <Card style={{
                                        background: 'lineargradient(270deg, #121212 0 %, rgba(18, 18, 18, 0.00) 104.17 %)'
                                    }} className='tw-bg-secondBg tw-p-4 tw-h-[236px]   tw-border-secondBg'>
                                        <div className='tw-flex tw-justify-center'>
                                            <img src={quotes} alt='double quotes' />
                                        </div>
                                        <div className='tw-mt-5 '>
                                            <p className='tw-font-secondaryFonts tw-text-center tw-text-secondary_text tw-text-opacity-70 md:tw-text-xs lg:tw-text-xs xl:tw-text-[13px] tw-leading-125 2xl:tw-text-desk-lg-2'>
                                                {ele?.feedback}
                                            </p>
                                        </div>


                                    </Card>
                                    <div className='tw-relative -tw-top-10 '>
                                        <div className='tw-flex  tw-justify-center '>
                                            <div className='tw-flex tw-flex-col tw-items-center'>
                                                <div >
                                                    <img src={ele?.person} alt={ele?.name} />
                                                </div>
                                                <div className='tw-mt-6 tw-flex tw-flex-col tw-justify-center tw-items-center '>
                                                    <div>
                                                        <p className='tw-font-primaryFonts  tw-text-secondary_text tw-text-[20px] tw-leading-[130%] tw-font-semibold'>
                                                            {ele?.name}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <img src={star_rating} alt='star_rating' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>)}
                            <div className="swiper-gradient swiper-gradient-left"></div>
                            <div className="swiper-gradient swiper-gradient-right"></div>

                        </Swiper>
                    </div>
                </motion.div>
            </section>
        </>
    )
}

export default Testimonials