import React from 'react'
import './Home.scss'
import Navbar from '../../components/navbar/Navbar'
import Carousel from '../../components/carousel/Carousel'

function Home() {
    return (
        <div className="Home">
            {/* Now in here we first need the navigation bar */}
            <Navbar />
            {/* Then we will need a body section that contains the heading and the carousel */}
            <Carousel/>
      </div>
  )
}

export default Home