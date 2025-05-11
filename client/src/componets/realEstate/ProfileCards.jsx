import { useEffect, useState } from "react";
import "./ProfileCards.css"
import { Link } from "react-router-dom"

function ProfileCards({name, icon}){
    const [winSize, setWinsize] = useState(window.innerWidth)

    useEffect( () => {
        function handleResize(){
                setWinsize(window.innerWidth)
        }
    
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    if (winSize > 800){
    return <>
        <div className="container-profile-card">
            <div className="card">
                <h2>{name} RealEstate</h2>
                <i class="fas fa-arrow-right"></i>
                <p>properties</p>
                <div className="pic" style={{backgroundImage: `url(${icon})`}}></div>

                <div className="social">
                <i className="fab fa-facebook-f">s</i>
                <i className="fab fa-twitter">s</i>
                <i className="fab fa-instagram">s</i>
                <i className="fab fa-github">so</i>
                </div>
                <Link to={name}>
                    <button>
                        more
                    </button>
                </Link>
            </div>

        </div>
    </>
    } else{
        return <>
        <div className="container-profile-card">
            <Link to={name}>
                <div className="card">
                    <h2>{name} RealEstate</h2>
                    <i className="fas fa-arrow-right"></i>
                    <p>properties</p>
                    <div className="pic" style={{backgroundImage: `url(${icon})`}}></div>

                    <div className="social">
                    <i className="fab fa-facebook-f">s</i>
                    <i className="fab fa-twitter">s</i>
                    <i className="fab fa-instagram">s</i>
                    <i className="fab fa-github">so</i>
                    </div>
                        <button>
                            see
                        </button>
                </div> 
            </Link>
        </div>   
    </>
    }

}

export default ProfileCards