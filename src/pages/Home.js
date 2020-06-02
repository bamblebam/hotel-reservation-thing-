import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Hero>
                <Banner title='Luxurious Rooms' subtitle='Rooms start at $599'>
                    <Link to='/rooms' className='btn-primary'>Our Rooms</Link>
                </Banner>
            </Hero>
            <Services></Services>
            <FeaturedRooms></FeaturedRooms>
        </>
    )
}

export default Home