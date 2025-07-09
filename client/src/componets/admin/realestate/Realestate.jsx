import axios from 'axios';
import { useState, useEffect } from 'react';
import './css/realestate.css'
import ControlCards from '../ui/ControlCards'
import { Link } from 'react-router-dom'
import Error from '../../dynamics/Error';
import Loader from '../../dynamics/Loader';

function AdminRealestate(){
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const collection = 'realestates'

    useEffect( () => {
        const fetchData = async () => {
            try {
                if(error){
                   setError(undefined); 
                }
                setLoading(true)
                const URL = import.meta.env.VITE_SERVER_URL;
                const response = await axios.post( URL + "admin/database", {schema: collection, filter: {}});
                setData(response.data);
                console.log(response.data)
                setLoading(false)
            } catch (err) { 
                setLoading(false);
                setError(err);
            }
        };
        fetchData(); 
    }, [collection]);

    return <>
    <div className='admin-view-section-containter'>
        <div className="admin-view-section-header">
            <div></div>
            <div><h3>Realesates</h3></div>
            <div>

                {/* <div className={`database-icons}`}  >
                <svg className="database-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" strokeWidth="13.312000000000001">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path fill="#ffffff" d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"></path>
                    </g>
                </svg>
                </div> */}

                <div className={`database-icons`} >
                    <button className='admin-edit-btn'>
                        <Link to={'create'}>
                        <svg 
                            className="database-icons" 
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#fcfcfc"
                            strokeWidth="0.00024"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                            <path
                                opacity="0.5"
                                d="M22 13.75V11.5479C22 8.91554 22 7.59935 21.2305 6.74383C21.1598 6.66514 21.0849 6.59024 21.0062 6.51946C20.1506 5.75 18.8345 5.75 16.2021 5.75H15.8284C14.6747 5.75 14.0979 5.75 13.5604 5.59678C13.2651 5.5126 12.9804 5.39471 12.7121 5.24543C12.2237 4.97367 11.8158 4.56578 11 3.75L10.4497 3.19975C10.1763 2.92633 10.0396 2.78961 9.89594 2.67051C9.27652 2.15704 8.51665 1.84229 7.71557 1.76738C7.52976 1.75 7.33642 1.75 6.94975 1.75C6.06722 1.75 5.62595 1.75 5.25839 1.81935C3.64031 2.12464 2.37464 3.39031 2.06935 5.00839C2 5.37595 2 5.81722 2 6.69975V13.75C2 17.5212 2 19.4069 3.17157 20.5784C4.34315 21.75 6.22876 21.75 10 21.75H14C17.7712 21.75 19.6569 21.75 20.8284 20.5784C22 19.4069 22 17.5212 22 13.75Z"
                                fill="#ffffff"
                            />
                            <path
                                d="M12 11C12.4142 11 12.75 11.3358 12.75 11.75V13H14C14.4142 13 14.75 13.3358 14.75 13.75C14.75 14.1642 14.4142 14.5 14 14.5H12.75V15.75C12.75 16.1642 12.4142 16.5 12 16.5C11.5858 16.5 11.25 16.1642 11.25 15.75V14.5H10C9.58579 14.5 9.25 14.1642 9.25 13.75C9.25 13.3358 9.58579 13 10 13H11.25V11.75C11.25 11.3358 11.5858 11 12 11Z"
                                fill="#ffffff"
                            />
                            </g>
                        </svg>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
        <div className='admin-view-section-content'>
            {error && < Error message={error.message} />}
            {loading && <Loader className='admin-page' />}
            {data && <div  className='admin-view-section-content-data'>
                {data.map( d =>
                    <ControlCards 
                        key={d._id}
                        name={d.name}
                        img={d.image_url}
                        headOffice={d.head_office}
                    />
                )}
                </div>}
        </div>
    </div>
    </>
}



export default AdminRealestate