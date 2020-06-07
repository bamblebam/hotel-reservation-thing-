import React from 'react'
import { useContext } from 'react'
import { RoomContext } from './context'
import Title from './Title'

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext)
    const { handleChange, price, maxPrice, minPrice, minSize, maxSize, type, capacity, breakfast, pets } = context

    let types = getUnique(rooms, 'type')
    types = ['all', ...types]
    types = types.map((type, index) => {
        return (
            <option value={type} key={index}>{type}</option>
        )
    })

    let people = getUnique(rooms, 'capacity')
    people = people.map((person, index) => {
        return (
            <option value={person} key={index}>{person}</option>
        )
    })

    return (
        <>
            <section className='filter-container'>
                <Title title="Search Rooms"></Title>
                <form className='filter-form'>
                    <div className='form-group'>
                        <label htmlFor='type'>Room Type</label>
                        <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
                            {types}
                        </select>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='capacity'>Room Capacity</label>
                        <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange}>
                            {people}
                        </select>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='price'>Room Price ${price}</label>
                        <input type='range' className='form-control' min={minPrice} max={maxPrice} name='price' id='price' value={price} onChange={handleChange}></input>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='size'>Room Size </label>
                        <input type='number' className='size-input' name='minSize' id='size' value={minSize} onChange={handleChange} ></input>
                        <input type='number' className='size-input' name='maxSize' id='size' value={maxSize} onChange={handleChange} ></input>
                    </div>

                    <div className='form-group'>
                        <div className='single-extra'>
                            <input type='checkbox' name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange}></input>
                            <label htmlFor='breakfast'>Breakfast</label>
                        </div>
                        <div className='single-extra'>
                            <input type='checkbox' name='pets' id='pets' checked={pets} onChange={handleChange}></input>
                            <label htmlFor='pets'>Pets</label>
                        </div>
                    </div>

                </form>
            </section>
        </>
    )
}
