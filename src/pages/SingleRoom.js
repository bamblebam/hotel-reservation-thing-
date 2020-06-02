import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from "react-router-dom";
import defaultImg2 from '../images/room-1.jpeg'
import { RoomContext } from '../components/context'
import Room from '../components/Room'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultImg2
        }
    }

    static contextType = RoomContext

    render() {
        const { getRoom } = this.context
        const room = getRoom(this.state.slug)
        if (!room) {
            return (
                <div className='error'>
                    <h3>No such Room</h3>
                    <Link to='/rooms' className='btn-primary'>Back to Room</Link>
                </div>
            )
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
        const [mainImg, ...defaultImages] = images
        return (
            <>
                <StyledHero img={images[0] || this.state.defaultImg2}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className='btn-primary'>
                            Back to Rooms
                    </Link>
                    </Banner>
                </StyledHero>
                <section className='single-room'>
                    <div className='single-room-images'>
                        {defaultImages.map((image, index) => (
                            <img src={image} key={index} alt={name}></img>
                        ))}
                    </div>
                    <div className='single-room-info'>
                        <article className='desc'>
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className='info'>
                            <h3>info</h3>
                            <h6>Price:${price}</h6>
                            <h6>Size:{size} SQFT</h6>
                            <h6>Max Capacity:{capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
                            <h6>{pets ? "Pets allowed" : "Pets not allowed"}</h6>
                            <h6>{breakfast ? "free breakfast included" : ""}</h6>
                        </article>
                    </div>
                </section>
                <section className='room-extras'>
                    <h6>Extras</h6>
                    <ul className='extras'>
                        {extras.map((item, index) => (
                            <li key={index}>- {item}</li>
                        ))}
                    </ul>
                </section>
            </>
        )
    }
}
