import React, { useEffect } from 'react'
import Policy from '../../components/policy';
import QuickLinks from './QuickLinks';
import Footer from './Footer';
import Header from './Header';
const PrivacyPolicy = () => {


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <>


            <div className="select-none ">
                <Header />
                <Policy />
                <QuickLinks />
                <Footer />

            </div>

        </>
    )
}

export default PrivacyPolicy