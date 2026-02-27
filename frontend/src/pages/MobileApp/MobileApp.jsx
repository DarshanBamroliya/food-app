
import React from 'react'
import './MobileApp.css'
import { assets, menu_list, food_list } from '../../assets/assets'

const MobileApp = () => {
    // Using artifact images for a premium look
    const saladImg = "/salad_mockup.png";
    const rollsImg = "/rolls_mockup.png";
    const desertsImg = "/deserts_mockup.png";

    return (
        <div className='mobile-app-page'>
            <div className="mobile-app-hero">
                <h1>The Future of Food <br /><span>In Your Pocket</span></h1>
                <p>We are building a revolution in food delivery. Experience the fastest, most reliable way to get your favorite meals delivered right to your doorstep.</p>
            </div>

            <div className='mobile-app-download'>
                <div className="coming-soon-badge">Coming Soon</div>
                <h2>Experience Tomato on Mobile</h2>

                <div className="app-mockups">
                    {/* Left: Menu Page Design */}
                    <div className="phone-frame">
                        <div className="phone-screen">
                            <div className="mock-header">Menu & Categories</div>
                            <div className="mock-content" style={{ padding: '10px' }}>
                                <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
                                    {[saladImg, rollsImg, desertsImg, saladImg].map((img, i) => (
                                        <div key={i} style={{ width: '35px', height: '35px', borderRadius: '50%', background: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid #eee' }}></div>
                                    ))}
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                    {food_list.slice(0, 6).map((food, i) => (
                                        <div key={i} style={{ background: 'white', padding: '5px', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
                                            <div style={{ height: '50px', background: `url(${food.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '5px', marginBottom: '4px' }}></div>
                                            <p style={{ fontSize: '7px', fontWeight: '600', color: '#262626', marginBottom: '2px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{food.name}</p>
                                            <p style={{ fontSize: '7px', color: '#FF4C24', fontWeight: '700' }}>${food.price}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center: Home Page (Hero Design) */}
                    <div className="phone-frame">
                        <div className="phone-screen">
                            <div className="mock-header">Tomato Home</div>
                            <div className="mock-content">
                                <div className="mock-promo" style={{
                                    background: `linear-gradient(rgba(255, 76, 36, 0.7), rgba(0, 0, 0, 0.4)), url(${saladImg})`,
                                    backgroundSize: 'cover',
                                    height: '100px',
                                    fontSize: '14px',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                }}>
                                    Craving Something Fresh? <br />
                                    <span style={{ fontSize: '18px', fontWeight: '800' }}>GET 50% OFF</span>
                                </div>
                                <div className="mock-categories">
                                    {menu_list.slice(0, 5).map((cat, i) => (
                                        <div key={i} className="mock-cat-item" title={cat.menu_name} style={{
                                            backgroundImage: `url(${cat.menu_image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-end',
                                            padding: '2px',
                                            position: 'relative',
                                        }}>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '8px' }}>
                                    {menu_list.slice(0, 5).map((cat, i) => (
                                        <span key={i} style={{ fontSize: '6px', color: '#555', textAlign: 'center', width: '35px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{cat.menu_name}</span>
                                    ))}
                                </div>
                                <h4 style={{ fontSize: '12px', marginBottom: '10px' }}>Recommended</h4>
                                <div className="mock-food-card">
                                    <div className="mock-food-img" style={{ background: `url(${food_list[4].image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '70px' }}></div>
                                    <div style={{ padding: '6px 8px' }}>
                                        <p style={{ fontSize: '9px', fontWeight: '600', color: '#262626', marginBottom: '4px' }}>{food_list[4].name}</p>
                                        <p style={{ fontSize: '8px', color: '#FF4C24', fontWeight: '700' }}>${food_list[4].price}</p>
                                    </div>
                                </div>
                                <div className="mock-food-card">
                                    <div className="mock-food-img" style={{ background: `url(${food_list[8].image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '70px' }}></div>
                                    <div style={{ padding: '6px 8px' }}>
                                        <p style={{ fontSize: '9px', fontWeight: '600', color: '#262626', marginBottom: '4px' }}>{food_list[8].name}</p>
                                        <p style={{ fontSize: '8px', color: '#FF4C24', fontWeight: '700' }}>${food_list[8].price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Map Tracker Design */}
                    <div className="phone-frame">
                        <div className="phone-screen">
                            <div className="mock-header">Track Order</div>
                            <div className="mock-content" style={{ padding: '0' }}>
                                <div className="mock-map" style={{ background: '#e8f0e8', backgroundImage: 'none' }}>
                                    {/* Surat-inspired SVG map */}
                                    <svg width="100%" height="100%" viewBox="0 0 204 310" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0 }}>
                                        {/* Map background */}
                                        <rect width="204" height="310" fill="#e8efe8" />
                                        {/* Water body (Tapi River) */}
                                        <path d="M0,160 Q40,148 80,155 Q120,162 160,150 Q180,145 204,152" fill="none" stroke="#a8d5f5" strokeWidth="12" opacity="0.7" />
                                        <path d="M0,160 Q40,148 80,155 Q120,162 160,150 Q180,145 204,152" fill="none" stroke="#c5e8ff" strokeWidth="8" opacity="0.5" />
                                        {/* Green park areas */}
                                        <rect x="10" y="30" width="35" height="25" rx="4" fill="#b8ddb8" opacity="0.7" />
                                        <rect x="155" y="200" width="40" height="30" rx="4" fill="#b8ddb8" opacity="0.7" />
                                        <rect x="60" y="220" width="28" height="20" rx="3" fill="#c5e4c5" opacity="0.6" />
                                        {/* City blocks */}
                                        <rect x="8" y="65" width="40" height="22" rx="2" fill="#f5f0e8" stroke="#ddd" strokeWidth="0.5" />
                                        <rect x="55" y="65" width="38" height="22" rx="2" fill="#f5f0e8" stroke="#ddd" strokeWidth="0.5" />
                                        <rect x="100" y="65" width="42" height="22" rx="2" fill="#f5f0e8" stroke="#ddd" strokeWidth="0.5" />
                                        <rect x="8" y="95" width="50" height="15" rx="2" fill="#f0ede5" stroke="#ddd" strokeWidth="0.5" />
                                        <rect x="65" y="95" width="35" height="15" rx="2" fill="#f0ede5" stroke="#ddd" strokeWidth="0.5" />
                                        <rect x="108" y="95" width="40" height="15" rx="2" fill="#f0ede5" stroke="#ddd" strokeWidth="0.5" />
                                        <rect x="8" y="178" width="42" height="18" rx="2" fill="#f5f0e8" stroke="#ddd" strokeWidth="0.5" />
                                        <rect x="58" y="178" width="38" height="18" rx="2" fill="#f5f0e8" stroke="#ddd" strokeWidth="0.5" />
                                        <rect x="104" y="178" width="36" height="18" rx="2" fill="#f5f0e8" stroke="#ddd" strokeWidth="0.5" />
                                        <rect x="148" y="178" width="40" height="18" rx="2" fill="#f5f0e8" stroke="#ddd" strokeWidth="0.5" />
                                        <rect x="8" y="204" width="42" height="18" rx="2" fill="#f0ede5" stroke="#ddd" strokeWidth="0.5" />
                                        <rect x="58" y="204" width="38" height="18" rx="2" fill="#f0ede5" stroke="#ddd" strokeWidth="0.5" />
                                        <rect x="104" y="204" width="82" height="18" rx="2" fill="#f0ede5" stroke="#ddd" strokeWidth="0.5" />
                                        <rect x="8" y="240" width="55" height="20" rx="2" fill="#f5f0e8" stroke="#ddd" strokeWidth="0.5" />
                                        <rect x="70" y="240" width="60" height="20" rx="2" fill="#f5f0e8" stroke="#ddd" strokeWidth="0.5" />
                                        <rect x="138" y="240" width="52" height="20" rx="2" fill="#f5f0e8" stroke="#ddd" strokeWidth="0.5" />
                                        {/* Main Roads - horizontal */}
                                        <rect x="0" y="58" width="204" height="5" fill="#ffffff" stroke="#ccc" strokeWidth="0.5" />
                                        <rect x="0" y="112" width="204" height="4" fill="#ffffff" stroke="#ccc" strokeWidth="0.5" />
                                        <rect x="0" y="170" width="204" height="4" fill="#ffffff" stroke="#ccc" strokeWidth="0.5" />
                                        <rect x="0" y="225" width="204" height="4" fill="#ffffff" stroke="#ccc" strokeWidth="0.5" />
                                        <rect x="0" y="268" width="204" height="3" fill="#fff" stroke="#ccc" strokeWidth="0.5" />
                                        {/* Ring Road arc */}
                                        <path d="M5,10 Q100,-8 200,10 Q215,100 200,300 Q100,315 5,300 Q-10,200 5,10" fill="none" stroke="#ffffff" strokeWidth="5" opacity="0.6" />
                                        {/* Main Roads - vertical */}
                                        <rect x="0" y="0" width="5" height="310" fill="#fff" stroke="#ccc" strokeWidth="0.5" />
                                        <rect x="50" y="0" width="4" height="310" fill="#fff" stroke="#ccc" strokeWidth="0.5" />
                                        <rect x="100" y="0" width="5" height="310" fill="#fff" stroke="#ccc" strokeWidth="0.5" />
                                        <rect x="150" y="0" width="4" height="310" fill="#fff" stroke="#ccc" strokeWidth="0.5" />
                                        <rect x="199" y="0" width="5" height="310" fill="#fff" stroke="#ccc" strokeWidth="0.5" />
                                        {/* Secondary roads */}
                                        <line x1="25" y1="58" x2="25" y2="112" stroke="#fff" strokeWidth="2.5" />
                                        <line x1="75" y1="58" x2="75" y2="112" stroke="#fff" strokeWidth="2.5" />
                                        <line x1="125" y1="58" x2="125" y2="112" stroke="#fff" strokeWidth="2.5" />
                                        <line x1="175" y1="58" x2="175" y2="112" stroke="#fff" strokeWidth="2.5" />
                                        <line x1="25" y1="170" x2="25" y2="225" stroke="#fff" strokeWidth="2.5" />
                                        <line x1="75" y1="170" x2="75" y2="225" stroke="#fff" strokeWidth="2.5" />
                                        <line x1="125" y1="170" x2="125" y2="225" stroke="#fff" strokeWidth="2.5" />
                                        <line x1="175" y1="170" x2="175" y2="225" stroke="#fff" strokeWidth="2.5" />
                                        <line x1="0" y1="85" x2="204" y2="85" stroke="#fff" strokeWidth="2" />
                                        <line x1="0" y1="200" x2="204" y2="200" stroke="#fff" strokeWidth="2" />
                                        <line x1="0" y1="248" x2="204" y2="248" stroke="#fff" strokeWidth="2" />
                                        {/* Delivery route - dashed orange line */}
                                        <path d="M165,42 L165,58 L150,58 L150,112 L102,112 L102,130 Q102,145 90,148 Q78,151 80,155 Q82,158 102,160 L102,170 L75,170 L75,225 L60,225 L60,260" fill="none" stroke="#FF4C24" strokeWidth="3" strokeDasharray="6,4" strokeLinecap="round" />
                                        {/* Origin pin (restaurant) */}
                                        <circle cx="165" cy="38" r="6" fill="#FF4C24" />
                                        <circle cx="165" cy="38" r="3" fill="white" />
                                        <line x1="165" y1="44" x2="165" y2="52" stroke="#FF4C24" strokeWidth="2" />
                                        {/* Destination pin (home) */}
                                        <path d="M55,268 L60,260 L65,268 Z" fill="#2ecc71" />
                                        <circle cx="60" cy="256" r="7" fill="#2ecc71" />
                                        <circle cx="60" cy="256" r="3" fill="white" />
                                        {/* Scooter on route */}
                                        <text x="88" y="108" fontSize="14" textAnchor="middle">🛵</text>
                                        {/* Small label: Surat */}
                                        <text x="8" y="20" fontSize="7" fill="#888" fontWeight="600">SURAT</text>
                                        <text x="8" y="28" fontSize="5" fill="#aaa">Gujarat, India</text>
                                    </svg>
                                    <div className="mock-tracking-card">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <b style={{ fontSize: '12px' }}>Courier is Arriving</b>
                                            <span style={{ color: '#FF4C24', fontSize: '10px' }}>3 mins</span>
                                        </div>
                                        <div className="mock-status-line"></div>
                                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                            <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: `url(${saladImg})`, backgroundSize: 'cover' }}></div>
                                            <div>
                                                <div className="line-1" style={{ width: '50px' }}></div>
                                                <div className="line-2" style={{ width: '80px' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="app-download-platforms" style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
                    <img src={assets.play_store} alt="" style={{ width: '160px' }} />
                    <img src={assets.app_store} alt="" style={{ width: '160px' }} />
                </div>
            </div>

            <div className="features-grid">
                <div className="feature-card">
                    <span className="feature-icon">🚀</span>
                    <h3>Lightning Fast</h3>
                    <p>Our optimized routing ensures your food arrives hot and fresh every single time.</p>
                </div>
                <div className="feature-card">
                    <span className="feature-icon">🛡️</span>
                    <h3>Secure Payments</h3>
                    <p>Multiple payment options with end-to-end encryption for your peace of mind.</p>
                </div>
                <div className="feature-card">
                    <span className="feature-icon">📍</span>
                    <h3>Live Tracking</h3>
                    <p>Watch your meal travel from the restaurant kitchen to your front door in real-time.</p>
                </div>
            </div>
        </div>
    )
}

export default MobileApp
