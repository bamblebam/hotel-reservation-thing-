import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail></FaCocktail>,
                title: 'Free cocktails',
                info: 'Deserunt ipsum culpa aute veniam Lorem ad eu voluptate laborum culpa non nisi elit.'
            },
            {
                icon: <FaHiking></FaHiking>,
                title: 'Free Hiking',
                info: 'Deserunt ipsum culpa aute veniam Lorem ad eu voluptate laborum culpa non nisi elit.'
            },
            {
                icon: <FaShuttleVan></FaShuttleVan>,
                title: 'Free Van',
                info: 'Deserunt ipsum culpa aute veniam Lorem ad eu voluptate laborum culpa non nisi elit.'
            },
            {
                icon: <FaBeer></FaBeer>,
                title: 'Free Beer',
                info: 'Deserunt ipsum culpa aute veniam Lorem ad eu voluptate laborum culpa non nisi elit.'
            },
        ]
    }

    render() {
        return (
            <section className='services'>
                <Title title='Services'></Title>
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className='service'>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>

            </section>
        )
    }
}
