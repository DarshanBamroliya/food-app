import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='food-display' id='food-display'>
      <div className="food-display-header">
        <h2>Top dishes near you</h2>
        <button onClick={() => navigate(`/menu/${category}`)} className="view-all-btn">View all</button>
      </div>
      <div className='food-display-list'>
        {food_list
          .filter(item => category === "All" || category === item.category)
          .slice(0, 4)
          .map((item) => {
            return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id} />
          })
        }
      </div>
    </div>
  )
}

export default FoodDisplay
