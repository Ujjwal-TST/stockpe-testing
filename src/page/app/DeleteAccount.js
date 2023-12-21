import React, { useEffect } from 'react'
import QuickLinks from './QuickLinks';
import Footer from './Footer';
import Header from './Header';
import Account from '../../components/account';

const DeleteAccount = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <>


            <div className="select-none ">
                <Header />
                <Account />
                <div className='tw-hidden lg:tw-block'>
                    <QuickLinks />
                    <Footer />
                </div>

            </div>

        </>
    )
}

export default DeleteAccount