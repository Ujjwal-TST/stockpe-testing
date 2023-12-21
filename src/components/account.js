import React, { useState } from 'react'
import axios from 'axios';
import { Col, Form, Input, Row, notification } from 'antd'
import check from '../assets/images/check.png'


const Account = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(null)

    const onFinish = async (values) => {
        form.resetFields()
        // if (emailValue) {
        try {
            // Make a POST request to the API
            const response = await axios.post('https://apis.stockpe.app/api/v2/deleteAccountRequest', {
                email: values.email, // Assuming 'email' is the field in your form
            });

            // Handle the response
            setData(response);
            form.setFieldsValue({ email: '' });
            notification.success({ message: 'Delete Request Sent Successfully!!!' });
            // You can display a success message or perform additional actions based on the response

        } catch (error) {
            // Handle errors
            console.error('API error:', error);

            notification.error({ message: 'Something Went Wrong' });
        }

        // }
    };
    return (
        <>
            {/* Mobile View */}
            <div className='tw-block 320:tw-block tw-h-screen tw-bg-primaryBg md:tw-hidden'>
                <div className='tw-mx-5'>
                    <div className='tw-pt-6'>
                        <p className='tw-font-primaryFonts tw-text-primary_text tw-text-opacity-90 tw-text-[28px] tw-font-semibold tw-leading-[130%]'>Delete My Account</p>
                    </div>
                    <div className='tw-pt-5 tw-pb-10'>
                        <p className='tw-font-primaryFonts tw-text-secondary_text    tw-max-w-[330px] tw-text-desk-lg-1'>
                            Deleting your account will remove all of your information from our database. Please note that your account will not be recovered after you complete this step.
                        </p>
                    </div>
                    <div className='tw-pb-[22px]'>
                        <p className='tw-font-secondaryFonts tw-text-secondary_text tw-text-opacity-60 tw-text-desk-lg tw-font-semibold'>
                            Once you enter your email, we will go ahead and delete your account.
                        </p>
                    </div>
                    <div>
                        <Form form={form} onFinish={onFinish}>
                            <Form.Item name="email"
                                className=''
                                // getValueProps={() => emailValue}
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'Please enter a valid email address!',
                                    },
                                    {
                                        required: true,
                                        message: 'Email is required!',
                                    },
                                ]} >
                                <Input

                                    className='tw-px-4 tw-py-[12px] !tw-border-[#333]  tw-bg-transparent tw-text-secondary_text tw-font-secondaryFonts  tw-text-opacity-60 tw-text-desk-lg -tw-tracking-[0.4px]' placeholder='Enter your registered email' />
                            </Form.Item>
                            <button className='tw-bg-button tw-w-full tw-text-primaryBg  tw-text-desk-lg-2 -tw-tracking-[0.4px]  tw-rounded-[6px] tw-px-4 tw-py-[12px]' type="submit">
                                Delete Account
                            </button>
                        </Form>
                        {data && <Row className='tw-flex tw-my-3  tw-justify-center ' gutter={[16, 16]} >
                            <Col className='' span={3}>
                                <div className='tw-flex tw-justify-center'>
                                    <img src={check} alt='check' />
                                </div>
                            </Col>
                            <Col className='' span={21}>

                                <p className='-tw-ml-4 tw-font-secondaryFonts tw-text-secondary_text tw-text-[11px] tw-leading-[130%]'>
                                    You will get notified when your account is deleted, please reach out to  <a href="mailto:support@stockpe.in" className='tw-text-[#8CBAE4] tw-font-medium hover:tw-text-[#8CBAE4]' > support@stockpe.in </a>if you don&rsquo;t hear back.
                                </p>

                            </Col>
                        </Row>}
                    </div>
                </div>
            </div>

            {/* Web & Tab View */}
            <div className='delete-bg tw-hidden md:tw-flex tw-justify-center tw-items-center'>
                <div className='tw-my-[145px] md:tw-max-w-[44rem] lg:tw-max-w-[46rem]'>
                    <div>
                        <p className='tw-font-primaryFonts tw-text-primary_text tw-text-center tw-text-[44px] tw-font-bold tw-leading-125'>Delete My Account</p>
                    </div>
                    <div className='tw-mt-7 tw-mb-10  tw-max-w-xl lg:tw-max-w-[46rem]'>
                        <p className='tw-font-primaryFonts tw-text-secondary_text tw-font-light tw-text-center md:tw-text-[16px] lg:tw-text-[20px]  tw-leading-[130%]'>
                            Deleting your account will remove all of your information from our database. Please note that your account will not be recovered after you complete this step.
                        </p>
                    </div>
                    <div className='tw-mb-[22px]'>
                        <p className='tw-font-secondaryFonts tw-text-center tw-text-secondary_text tw-text-opacity-60 tw-text-desk-lg-1 tw-font-semibold'>
                            Once you enter your email, we will go ahead and delete your account.
                        </p>
                    </div>
                    <div className='tw-mb-3'>
                        <Form form={form} className='' onFinish={onFinish}>
                            <Row className='!tw-mx-0  tw-flex  tw-justify-center' gutter={[24, 16]} >
                                <Col className='' span={12}  >
                                    <Form.Item
                                        name="email"
                                        className=''
                                        // getValueProps={() => emailValue}
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'Please enter a valid email address!',
                                            },
                                            {
                                                required: true,
                                                message: 'Email is required!',
                                            },
                                        ]} >
                                        <Input

                                            className='tw-px-4 tw-py-[18px] !tw-border-[#333]  tw-bg-transparent tw-text-secondary_text tw-font-secondaryFonts tw-text-opacity-60 tw-text-desk-lg-2 -tw-tracking-[0.4px]' placeholder='Enter your registered email' />
                                    </Form.Item>
                                </Col>
                                <Col span={6} md={10} lg={8} xl={6}>

                                    <button className='tw-bg-button tw-text-primaryBg tw-font-medium tw-text-desk-lg-2 -tw-tracking-[0.4px] tw-rounded-[6px] tw-p-[18px]' type='submit'>
                                        Delete Account
                                    </button>

                                </Col>
                            </Row>

                        </Form>
                        {data && <Row className='  tw-flex  tw-justify-center ' gutter={[16, 16]} >
                            <Col className=' -tw-ml-[72px]' span={2}>
                                <div className='tw-flex tw-justify-center'>
                                    <img src={check} alt='check' />
                                </div>
                            </Col>
                            <Col className=' ' span={14}>

                                <p className='tw-font-secondaryFonts -tw-ml-5 tw-text-secondary_text tw-text-[13px] tw-leading-[130%]'>
                                    You will get notified when your account is deleted, please reach out to  <a href="mailto:support@stockpe.in" className='tw-text-[#8CBAE4] hover:tw-text-[#8CBAE4]' > support@stockpe.in </a>if you don&rsquo;t hear back.
                                </p>

                            </Col>
                        </Row>}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Account