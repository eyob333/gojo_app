import './Header.css'
import { Link } from 'react-router-dom'

function Header(){ 
    
    return <header id="header">
                <div>
                    <div id='header-logo' className='logo'>
                        <img src="/gojo1.png" alt="" />
                    </div>
            </div>
            <div className="nav-btn">
                <button className='nav-item'><Link to={'realestate'}> <p>RealEstates</p> </Link></button>
                <button className='nav-item'><Link to={'properties'}> <p>Properties</p> </Link></button>
                <button className='nav-item'><Link to={'announcement'}> <p>Announcement</p> </Link></button>
                <button className='nav-item'><Link to={'help'}> <p>Help</p> </Link> </button>
                <button className='search-icon'>
                  <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path fill ="#FFFFFF"  d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"/></svg>
                </button>
            </div>
    </header>
}

export default Header