import React, { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import CanteenFood from '../../components/CanteenFood/CanteenFood'
import './Canteen.css' // Added import for CSS

function Canteen() {

    const[category,setCategory] = useState("All");

  return (
    <div>
      <h1 className="canteen-header">Order your food<br />from canteen</h1>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <CanteenFood category={category}/>
    </div>
  )
}

export default Canteen
