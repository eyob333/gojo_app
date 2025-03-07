import './Home.css'


function Home(){

    return <>
        <main> 
            <div id="main"> 
                <div className="main-heading">
                    <h1>Gojo Homes</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                </div>
                <hr/>
                <div>
                    <button>Lorem ipsum</button>
                </div>
            </div>
            <div className="img">
                <img src="./sls2.png" alt=""/>
            </div>
        </main>

        <div className='intro-one'>
            <div className='home-elements'>
                <div className='element-heading'>
                    <h1 className='element-title' >We brought every real Estae in one place</h1>                    
                </div>
            <div className='home-cards'>
                <div className='home-png'>
                    <img src="https://picsum.photos/200/300?grayscale" alt="" />
                </div>                 
            </div>
             
            </div>

            <div className='search'>
                <div  className='search-heading'>
                    <h1>Discover</h1>
                    <p>
                    quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequa
                    </p>                     
                </div>
                <input type="text" />              
            </div>
            

            <section id="shows">
                <div className="shows">
                    <h2>best offers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. </p>
                    <div className="show-items">

                        <div className="show-item">
                            <img src="./stock.jpg" alt="" />
                            <div className="details">
                                <h3>dolor sit</h3>
                                <h4>$24</h4>
                                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>                        
                            </div>

                            
                        </div>
                        <div className="show-item">
                            <img src="./stock.jpg" alt="" />
                            <div className="details">
                                <h3>Lorem ipsum</h3>
                                <h4>$43</h4>
                                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>                        
                            </div>

                        </div>
                        <div className="show-item">
                            <img src="./stock.jpg" alt="" />
                            <div className="details">
                                <h3>consectetur</h3>
                                <h4>$52</h4>
                                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>
                            </div>

                        </div>                
                    </div>
                </div>
                <div className="shows">
                    <h2>Top real estates</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. </p>
                    <div className="show-items">

                        <div className="show-item">
                            <img src="./stock.jpg" alt="" />
                            <div className="details">                    
                                <h3>dolor sit</h3>
                                <h4>$24</h4>
                                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>                     
                            </div>

                        </div>
                        <div className="show-item">
                            <img src="./stock.jpg" alt="" />
                            <div className="details">
                                <h3>Lorem ipsum</h3>
                                <h4>$43</h4>
                                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>                        
                            </div>

                        </div>
                        <div className="show-item">
                            <img src="./stock.jpg" alt="" />
                                <div className="details">
                                <h3>consectetur</h3>
                                <h4>$52</h4>
                                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>                        
                            </div>
                        </div>                
                    </div>
                </div>
            </section>
            
        </div>
    </>  
}

export default Home