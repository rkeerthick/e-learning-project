import React from 'react'
import Header from '../container/Header'
import Sliders from '../container/Sliders'
import Partners from '../components/Partners/Partners'
import CourseSection from '../container/CourseSection'

const Home = () => {
    return (
        <>
            <Header />
            <Sliders />
            <Partners />
            <CourseSection />
        </>
  )
}

export default Home