import React, { useEffect } from 'react'
import Header from './page/app/Header'
import HomePage from './page/app/HomePage'
import Feature from './page/app/Feature'
import Support from './page/app/Support'
import Testimonials from './page/app/Testimonials'
import QuickLinks from './page/app/QuickLinks'
import Footer from './page/app/Footer'
import { Route, Routes } from 'react-router-dom'
import PrivacyPolicy from './page/app/privacy-policy'
import DeleteAccount from './page/app/DeleteAccount'

const App = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Routes >
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        {/* <Route path="/*" element={
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
          />}></Route> */}
        <Route path="/delete-my-account" element={<DeleteAccount />}></Route>
        <Route path="/*" element={<div className='tw-select-none'>
          <Header />
          <HomePage />
          <Feature />
          <Support />
          <Testimonials />
          <QuickLinks />
          <Footer />
        </div>}></Route>
      </Routes>
    </>

  )
}

export default App