import React from 'react'
import Header from './Header'
import Hero_section from './Hero_section'
// import Marquee from './Marquee'
import About_section from './About_section'
import Contact_section from './Contact_section'
import OurServices from './OurServices'
import Footer_section from './Footer_section'
import GreenerFuture from './GreenerFuture'
import QuizComponent from './QuizComponent'
import GreenovationChatPot from './GreenovationChatPot'



const Home = () => {
  return (
    <>
    <Header/>
    <Hero_section/>
    {/* <Marquee /> */}
    <About_section/>
    <OurServices/>
    <GreenerFuture/>
    <QuizComponent/>
    <Contact_section/>
    <GreenovationChatPot />
    <Footer_section/>

    </>
)
}

export default Home