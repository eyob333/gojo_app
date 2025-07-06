import { useEffect, useState } from "react"
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import Button from "../ui/Button"
import './AdminHome.css'
import NotAvaliable from "../dynamics/NotAvailable"
import Database from "./Database"
import Loader from "../dynamics/Loader";

function AdminHome({admin = 'admin'}){
    const [render, setrender] = useState('analytics')
    // const [menuStatus, setMenustatus] = useEffect()

    function handleClick(id){
        setrender(id)
    }

    useEffect( () => {
        function handleResize(){
            setSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    useGSAP( () => {    
        const menuToggle = document.querySelector('.menu-toggle');
        let menuStatus = false;

        const menuTl = gsap.timeline({
            defaults: {
                duration: .3,
                ease: 'power4.inOut'
            }
        })

        menuTl
            .to( ['main.admin-svg', 'aside'], {
                x: 0,
                stagger: .1,
                zIndex: 1
            })
            .reverse()

        menuToggle.addEventListener('click', () => {
            if (!menuStatus){
                menuTl.play()
                menuStatus = true
            } else{
                menuTl.reverse()
                menuStatus = false
            }
        });
      
    }, {});

    return <>
        <div className="admin-nav-container">
            <aside className="admin-nav">
                <h3>menu.</h3>
                <nav>
                    <ul>
                        <li>
                            <div className="mask">
                                <Button className={`admin-option-btn ${render ==='dashboard' && 'active'}`} disabled={render ==='dashboard' && true} onClick={() => handleClick('dashboard')} >
                                    <h4>Dashboard</h4>
                                </Button>
                            </div>
                        </li>

                        <li>
                            <div className="mask">
                                <Button className={`admin-option-btn ${render ==='analytics' && 'active'}`} disabled={render ==='analytics' && true} onClick={() => handleClick('analytics')} >
                                    <h4>Analytics</h4>
                                </Button>
                            </div>
                        </li>

                        <li>
                            <div className="mask">
                                <Button className={`admin-option-btn ${render ==='properties' && 'active'}`} disabled={render ==='properties' && true} onClick={() => handleClick('properties')} >
                                    <h4>Properties</h4>
                                </Button>
                            </div>
                        </li>

                        <li>
                            <div className="mask">
                                <Button className={`admin-option-btn ${render ==='realestate' && 'active'}`} disabled={render ==='realestate' && true} onClick={() => handleClick('realestate')} >
                                    <h4>RealEstate</h4>
                                </Button>
                            </div>
                        </li>


                        <li>
                            <div className="mask">
                                <Button className={`admin-option-btn ${render ==='database' && 'active'}`} disabled={render ==='database' && true}  onClick={() => handleClick('database')} >
                                    <h4>Database</h4>
                                </Button>
                            </div>
                        </li>

                        <li>
                            <div className="mask">
                                <Button className={`admin-option-btn ${render ==='issues' && 'active'}`} disabled={render ==='issues' && true} onClick={() => handleClick('issues')} >
                                    <h4>Issues</h4>
                                </Button>
                            </div>
                        </li>

                        <li>
                            <div className="mask">
                                <Button className={`admin-option-btn ${render ==='announcement' && 'active'}`} disabled={render ==='announcement' && true} onClick={() => handleClick('announcement')} >
                                    <h4>Announcement</h4>
                                 </Button>
                            </div>
                        </li>

                        <li>
                            <div className="mask">
                                <Button className={`admin-option-btn ${render ==='clients' && 'active'}`} disabled={render ==='clients' && true} onClick={() => handleClick('clients')} >
                                    <h4>Clients</h4>
                                 </Button>
                            </div>
                        </li>
                        <li>
                            <div className="mask">
                                <Button className={`admin-option-btn ${render ==='users' && 'active'}`} disabled={render ==='users' && true} onClick={() => handleClick('users')} >
                                    <h4>Users</h4>
                                 </Button>
                            </div>
                        </li>
        
                    </ul>
                </nav>
            </aside>
            <main className="admin-svg">
                <a href="#" className="menu-toggle">
                    <svg className="open-menu" viewBox="0 0 50 50" fill="none">
                        <path d="M12.5003 14.5833H22.917C23.4695 14.5833 23.9994 14.8028 24.3901 15.1935C24.7808 15.5842 25.0003 16.1141 25.0003 16.6667C25.0003 17.2192 24.7808 17.7491 24.3901 18.1398C23.9994 18.5305 23.4695 18.75 22.917 18.75H12.5003C11.9478 18.75 11.4179 18.5305 11.0272 18.1398C10.6365 17.7491 10.417 17.2192 10.417 16.6667C10.417 16.1141 10.6365 15.5842 11.0272 15.1935C11.4179 14.8028 11.9478 14.5833 12.5003 14.5833ZM27.0837 31.25H37.5003C38.0529 31.25 38.5828 31.4695 38.9735 31.8602C39.3642 32.2509 39.5837 32.7808 39.5837 33.3333C39.5837 33.8859 39.3642 34.4158 38.9735 34.8065C38.5828 35.1972 38.0529 35.4167 37.5003 35.4167H27.0837C26.5311 35.4167 26.0012 35.1972 25.6105 34.8065C25.2198 34.4158 25.0003 33.8859 25.0003 33.3333C25.0003 32.7808 25.2198 32.2509 25.6105 31.8602C26.0012 31.4695 26.5311 31.25 27.0837 31.25ZM12.5003 22.9167H37.5003C38.0529 22.9167 38.5828 23.1362 38.9735 23.5269C39.3642 23.9176 39.5837 24.4475 39.5837 25C39.5837 25.5525 39.3642 26.0824 38.9735 26.4731C38.5828 26.8639 38.0529 27.0833 37.5003 27.0833H12.5003C11.9478 27.0833 11.4179 26.8639 11.0272 26.4731C10.6365 26.0824 10.417 25.5525 10.417 25C10.417 24.4475 10.6365 23.9176 11.0272 23.5269C11.4179 23.1362 11.9478 22.9167 12.5003 22.9167Z" fill="#fff"/>
                    </svg>
                </a>
            </main>
                <div className="admin-option-details">
                    <div className="admin-header">
                        <h5>welcome back</h5>
                        <img src="/images/gojo1.webp" alt="admin-image" />
                        <h5 className="admin-profile-heading">{admin}</h5>
                    </div>

                    <div>
                        { render === 'database' &&  <Database />}
                        { render === 'dashboard' && <NotAvaliable name='admin-loading' />}
                        { render === 'analytics' && <NotAvaliable name='admin-loading' />}
                        { render === 'clients' && <NotAvaliable name='admin-loading' />}
                        { render === 'issues' && <NotAvaliable name='admin-loading' />}
                        { render === 'properties' && <NotAvaliable name='admin-loading' />}
                        { render === 'realestate' && <NotAvaliable name='admin-loading' />}
                        { render === 'users' && <NotAvaliable name='admin-loading' />}
                        { render === 'announcement' && <Loader className='admin-page' />}
                    </div>
                   
                </div>
        </div>
        </>
}


export default AdminHome