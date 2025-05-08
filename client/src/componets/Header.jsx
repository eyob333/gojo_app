import './Header.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Header(){ 
    const [winSize, setWinsize] = useState(window.innerWidth);
    const [toogleState, setToggleState] = useState(false);
    const [dayState, setDayState] = useState(false);

    function handleToggler(){
        setToggleState( prevState => {
            const newState = !prevState;
            return newState;
        });
    }
    function handleToogleHide(){
        setToggleState(false)
    }

    function handleOnHover(){
        setHoverState(true)
    }
    function handleOffHover(){
        setHoverState(false)
    }

    useEffect( () => {
        function handleResize(){
            setWinsize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    
    return <header id="header">
                <div>
                    <Link to={'./'}  > 
                        <div id='header-logo' className='logo'>
                            <img width="90px" height="90px" src="/images/gojo1.webp" alt="gojo homes logo" />
                        </div>
                    </Link>
            </div>
            {winSize <= 650 &&
            <div className="nav-btn screan-small" >
              <button id='buttonTheme' title='Theme' className='day-icon' role=''>
                { !dayState &&  <svg
                            fill="#ffffff"
                            viewBox="0 0 240 240"
                            version="1.1"
                            stroke="#ffffff"
                            style={{ enableBackground: 'new 0 0 240 240' }}
                        >
                            <g strokeWidth="0" />
                            <g strokeLinecap="round" strokeLinejoin="round" />
                            <g>
                            <g>
                                <path d="M58.57,25.81c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8l9.88,17.1c2.13,3.67,0.87,8.38-2.8,10.51 
                                c-3.67,2.13-8.38,0.88-10.51-2.8L58.57,25.81z M120,51.17c19.01,0,36.21,7.7,48.67,20.16C181.12,83.79,188.83,101,188.83,120
                                c0,19.01-7.7,36.21-20.16,48.67c-12.46,12.46-29.66,20.16-48.67,20.16c-19.01,0-36.21-7.7-48.67-20.16
                                C58.88,156.21,51.17,139.01,51.17,120c0-19.01,7.7-36.21,20.16-48.67C83.79,58.88,101,51.17,120,51.17z M158.27,81.73
                                c-9.79-9.79-23.32-15.85-38.27-15.85c-14.95,0-28.48,6.06-38.27,15.85c-9.79,9.79-15.85,23.32-15.85,38.27
                                c0,14.95,6.06,28.48,15.85,38.27c9.79,9.79,23.32,15.85,38.27,15.85c14.95,0,28.48-6.06,38.27-15.85
                                c9.79-9.79,15.85-23.32,15.85-38.27C174.12,105.05,168.06,91.52,158.27,81.73z M113.88,7.71c0-4.26,3.45-7.71,7.71-7.71
                                c4.26,0,7.71,3.45,7.71,7.71v19.75c0,4.26-3.45,7.71-7.71,7.71c-4.26,0-7.71-3.45-7.71-7.71V7.71z M170.87,19.72
                                c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48l-9.88,17.1c-2.11,3.67-6.8,4.94-10.48,2.83
                                c-3.67-2.11-4.94-6.8-2.83-10.48L170.87,19.72z M214.19,58.57c3.67-2.13,8.38-0.87,10.51,2.8c2.13,3.67,0.88,8.38-2.8,10.51
                                l-17.1,9.88c-3.67,2.13-8.38,0.87-10.51-2.8c-2.13-3.67-0.88-8.38,2.8-10.51L214.19,58.57z M232.29,113.88
                                c4.26,0,7.71,3.45,7.71,7.71c0,4.26-3.45,7.71-7.71,7.71h-19.75c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71H232.29z 
                                M220.28,170.87c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83l-17.1-9.88c-3.67-2.11-4.94-6.8-2.83-10.48
                                c2.11-3.67,6.8-4.94,10.48-2.83L220.28,170.87z M181.43,214.19c2.13,3.67,0.87,8.38-2.8,10.51c-3.67,2.13-8.38,0.88-10.51-2.8
                                l-9.88-17.1c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8L181.43,214.19z M126.12,232.29
                                c0,4.26-3.45,7.71-7.71,7.71c-4.26,0-7.71-3.45-7.71-7.71v-19.75c0-4.26,3.45-7.71,7.71-7.71c4.26,0,7.71,3.45,7.71,7.71V232.29z 
                                M69.13,220.28c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48l9.88-17.1c2.11-3.67,6.8-4.94,10.48-2.83
                                c3.67,2.11,4.94,6.8,2.83,10.48L69.13,220.28z M25.81,181.43c-3.67,2.13-8.38,0.87-10.51-2.8c-2.13-3.67-0.88-8.38,2.8-10.51
                                l17.1-9.88c3.67-2.13,8.38-0.87,10.51,2.8c2.13,3.67,0.88,8.38-2.8,10.51L25.81,181.43z M7.71,126.12
                                c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71h19.75c4.26,0,7.71,3.45,7.71,7.71c0,4.26-3.45,7.71-7.71,7.71H7.71z 
                                M19.72,69.13c-3.67-2.11-4.94-6.8-2.83-10.48c2.11-3.67,6.8-4.94,10.48-2.83l17.1,9.88c3.67,2.11,4.94,6.8,2.83,10.48
                                c-2.11,3.67-6.8,4.94-10.48,2.83L19.72,69.13z" />
                            </g>
                            </g>
                        </svg> 
                    } { dayState && <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke="#CCCCCC"
                          strokeWidth="2.208"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                            stroke="#000000"
                            strokeWidth="0.96"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>

                    }
                </button>
                <div className='details' onClick={handleToggler}>
                    <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M2,4A1,1,0,0,1,3,3H21a1,1,0,0,1,0,2H3A1,1,0,0,1,2,4Zm1,9H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm18,6H12a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"></path>
                        </g>
                    </svg>
                </div>
            </div>
            }
            {winSize <= 650 && toogleState && <div className="toogle">
                        <Link to={'realestate'} onClick={handleToogleHide}> <button id="buttonRealEstates" title="RealEstates" className='nav-item' role='button'><p>RealEstates</p> </button></Link>
                        <Link to={'properties'} onClick={handleToogleHide}> <button id="buttonProperties" title="Properties" className='nav-item' role='button'>  <p>Properties</p> </button></Link>
                        <Link to={'announcement'} onClick={handleToogleHide}> <button id="buttonAnnouncement" title="Announcement" className='nav-item' role='button'> <p>Announcement</p> </button></Link>
                    </div>
                }

            {winSize > 650 && 
                <div className="nav-btn">
                   <Link to={'realestate'}> <button id="buttonTitle" title="RealEstates" className='nav-item'> <p>RealEstates</p> </button> </Link>
                   <Link to={'properties'}><button id="buttonTitle" title="RealEstates" className='nav-item'> <p>Properties</p> </button>  </Link>
                   <Link to={'announcement'}><button id="buttonAnnouncement" title="Announcement" className='nav-item'> <p>Announcement</p> </button></Link>

                    <button id="buttonTheme" title="theme icon" role='button' onClick={() => {}} className='day-icon' > 
                        { !dayState &&  <svg
                                fill="#ffffff"
                                viewBox="0 0 240 240"
                                version="1.1"
                                stroke="#ffffff"
                                style={{ enableBackground: 'new 0 0 240 240' }}
                            >
                                <g strokeWidth="0" />
                                <g strokeLinecap="round" strokeLinejoin="round" />
                                <g>
                                <g>
                                    <path d="M58.57,25.81c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8l9.88,17.1c2.13,3.67,0.87,8.38-2.8,10.51 
                                    c-3.67,2.13-8.38,0.88-10.51-2.8L58.57,25.81z M120,51.17c19.01,0,36.21,7.7,48.67,20.16C181.12,83.79,188.83,101,188.83,120
                                    c0,19.01-7.7,36.21-20.16,48.67c-12.46,12.46-29.66,20.16-48.67,20.16c-19.01,0-36.21-7.7-48.67-20.16
                                    C58.88,156.21,51.17,139.01,51.17,120c0-19.01,7.7-36.21,20.16-48.67C83.79,58.88,101,51.17,120,51.17z M158.27,81.73
                                    c-9.79-9.79-23.32-15.85-38.27-15.85c-14.95,0-28.48,6.06-38.27,15.85c-9.79,9.79-15.85,23.32-15.85,38.27
                                    c0,14.95,6.06,28.48,15.85,38.27c9.79,9.79,23.32,15.85,38.27,15.85c14.95,0,28.48-6.06,38.27-15.85
                                    c9.79-9.79,15.85-23.32,15.85-38.27C174.12,105.05,168.06,91.52,158.27,81.73z M113.88,7.71c0-4.26,3.45-7.71,7.71-7.71
                                    c4.26,0,7.71,3.45,7.71,7.71v19.75c0,4.26-3.45,7.71-7.71,7.71c-4.26,0-7.71-3.45-7.71-7.71V7.71z M170.87,19.72
                                    c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48l-9.88,17.1c-2.11,3.67-6.8,4.94-10.48,2.83
                                    c-3.67-2.11-4.94-6.8-2.83-10.48L170.87,19.72z M214.19,58.57c3.67-2.13,8.38-0.87,10.51,2.8c2.13,3.67,0.88,8.38-2.8,10.51
                                    l-17.1,9.88c-3.67,2.13-8.38,0.87-10.51-2.8c-2.13-3.67-0.88-8.38,2.8-10.51L214.19,58.57z M232.29,113.88
                                    c4.26,0,7.71,3.45,7.71,7.71c0,4.26-3.45,7.71-7.71,7.71h-19.75c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71H232.29z 
                                    M220.28,170.87c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83l-17.1-9.88c-3.67-2.11-4.94-6.8-2.83-10.48
                                    c2.11-3.67,6.8-4.94,10.48-2.83L220.28,170.87z M181.43,214.19c2.13,3.67,0.87,8.38-2.8,10.51c-3.67,2.13-8.38,0.88-10.51-2.8
                                    l-9.88-17.1c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8L181.43,214.19z M126.12,232.29
                                    c0,4.26-3.45,7.71-7.71,7.71c-4.26,0-7.71-3.45-7.71-7.71v-19.75c0-4.26,3.45-7.71,7.71-7.71c4.26,0,7.71,3.45,7.71,7.71V232.29z 
                                    M69.13,220.28c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48l9.88-17.1c2.11-3.67,6.8-4.94,10.48-2.83
                                    c3.67,2.11,4.94,6.8,2.83,10.48L69.13,220.28z M25.81,181.43c-3.67,2.13-8.38,0.87-10.51-2.8c-2.13-3.67-0.88-8.38,2.8-10.51
                                    l17.1-9.88c3.67-2.13,8.38-0.87,10.51,2.8c2.13,3.67,0.88,8.38-2.8,10.51L25.81,181.43z M7.71,126.12
                                    c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71h19.75c4.26,0,7.71,3.45,7.71,7.71c0,4.26-3.45,7.71-7.71,7.71H7.71z 
                                    M19.72,69.13c-3.67-2.11-4.94-6.8-2.83-10.48c2.11-3.67,6.8-4.94,10.48-2.83l17.1,9.88c3.67,2.11,4.94,6.8,2.83,10.48
                                    c-2.11,3.67-6.8,4.94-10.48,2.83L19.72,69.13z" />
                                </g>
                                </g>
                            </svg> 
                        } { dayState && <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              stroke="#CCCCCC"
                              strokeWidth="2.208"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                                stroke="#000000"
                                strokeWidth="0.96"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </svg>
                        }

                    </button>
                    
                </div>
            }
    </header>
}

export default Header