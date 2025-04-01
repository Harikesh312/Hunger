import React, { useContext, useState } from 'react'
import './CanteenFood.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

function CanteenFood({category}) {
    const {food_list} = useContext(StoreContext);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredFoodList = food_list.filter(item => 
        (category === "All" || category === item.category) &&
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='food-display' id='food-display'>
            <input 
                type="text" 
                className="search-bar" 
                placeholder="Search for food..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
            />
            {!searchQuery && <h2>Top Dishes From Canteen</h2>}
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

export default CanteenFood
