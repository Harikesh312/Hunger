import React, { useContext, useState } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

function FoodDisplay({category}) {
    const {food_list} = useContext(StoreContext)
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase())
    }

    const filteredFoodList = food_list.filter(item => {
        const matchesCategory = category === "All" || category === item.category
        const matchesSearch = item.name.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm)
        return matchesCategory && matchesSearch
    })

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes Near You</h2>
            <input 
                type="text" 
                className="food-search-input" 
                placeholder="Search for dishes..." 
                value={searchTerm} 
                onChange={handleSearchChange} 
            />
            <div className="food-display-list">
                {filteredFoodList.map((item, index) => (
                    <FoodItem 
                        key={index} 
                        id={item._id} 
                        name={item.name} 
                        description={item.description} 
                        price={item.price} 
                        image={item.image} 
                    />
                ))}
            </div>
        </div>
    )
}

export default FoodDisplay
