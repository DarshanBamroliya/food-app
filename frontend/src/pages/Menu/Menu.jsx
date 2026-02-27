
import React, { useContext, useEffect, useState } from 'react'
import './Menu.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../../components/FoodItem/FoodItem'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

const Menu = () => {
    const { category: paramCategory } = useParams();
    const navigate = useNavigate();
    const { search } = useLocation();
    const { food_list, menu_list } = useContext(StoreContext);

    const [category, setCategory] = useState(paramCategory || "All");
    const [sortOrder, setSortOrder] = useState("default");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        setCategory(paramCategory || "All");
    }, [paramCategory]);

    useEffect(() => {
        const queryParams = new URLSearchParams(search);
        const searchParam = queryParams.get('search');
        if (searchParam) {
            setSearchQuery(searchParam);
        }
    }, [search]);

    useEffect(() => {
        let list = [...food_list];

        // Filter by Category
        if (category !== "All") {
            list = list.filter(item => item.category === category);
        }

        // Filter by Search
        if (searchQuery) {
            list = list.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        // Sort
        if (sortOrder === "low-high") {
            list.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "high-low") {
            list.sort((a, b) => b.price - a.price);
        } else if (sortOrder === "az") {
            list.sort((a, b) => a.name.localeCompare(b.name));
        }

        setFilteredList(list);
    }, [category, food_list, sortOrder, searchQuery]);

    return (
        <div className='menu-page'>
            <div className='menu-filters'>
                <div className="filter-section">
                    <h3>Categories</h3>
                    <div className="category-scroll">
                        <div
                            className={`category-item ${category === "All" ? "active" : ""}`}
                            onClick={() => navigate('/menu/All')}
                        >
                            All
                        </div>
                        {menu_list.map((item, index) => (
                            <div
                                key={index}
                                className={`category-item ${category === item.menu_name ? "active" : ""}`}
                                onClick={() => navigate(`/menu/${item.menu_name}`)}
                            >
                                {item.menu_name}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="filter-controls">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search for dish..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="sort-box">
                        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                            <option value="default">Sort by: Relevance</option>
                            <option value="low-high">Price: Low to High</option>
                            <option value="high-low">Price: High to Low</option>
                            <option value="az">Alphabetical: A-Z</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='menu-display'>
                <h2>{category} Dishes</h2>
                <div className='menu-list'>
                    {filteredList.length > 0 ? (
                        filteredList.map((item, index) => (
                            <FoodItem
                                key={index}
                                id={item._id}
                                name={item.name}
                                desc={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        ))
                    ) : (
                        <p className="no-results">No dishes found matching your criteria.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Menu
