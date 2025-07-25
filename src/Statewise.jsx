import React, { useEffect, useState } from 'react';


const Statewise = () => {

    const [val, setval] = useState([]);

    const fetchData = async () => {
        const res = await fetch("https://data.covid19india.org/data.json");
        const data = await res.json();
        setval(data.statewise);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <div className='Background'>
         <nav>
            <div class="wrapper">
                <div class="logo"><a href="#">Covid-Tracker</a></div>
                <input type="radio" name="slide" id="menu-btn"/>
                <input type="radio" name="slide" id="cancel-btn"/>
                <ul class="nav-links">
                    <label for="cancel-btn" class="btn cancel-btn"><i class="fas fa-times"></i></label>
                    <li><a href="#">Home</a></li>
            
                    <li><a href="https://www.covid19treatmentguidelines.nih.gov/about-the-guidelines/whats-new/" class="desktop-item">Guidelines</a>
                        <input type="checkbox" id="showDrop"/>
                        <label for="showDrop" class="mobile-item">Guidelines</label>
                    {/* <ul class="drop-menu">
                        <li><a href="#">Men's Fashion</a></li>
                        <li><a href="#">Women's Fashion</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Yog Accessories</a></li>
                    </ul> */}
                    </li>
                    <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html" class="desktop-item">Covid Precautions</a>
                        <input type="checkbox" id="showMega"/>
                        <label for="showMega" class="mobile-item">Covid Precautions</label>
                  
                    </li>
                    
                    <li><a href="https://utkarsh742.github.io/My-Portfolio/">Contact</a></li>
                </ul>
                <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
            </div>
        </nav>
            <div className="cont mt-5">
                {/* <div className="main-heading">
                    <h1 className="mb-5 text-center"><span className="bold">INDIA</span> COVID-19 Dashboard</h1>
                </div> */}
                <br />
                <div className="table-responsive table-shadow">
                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Last Updated</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                val.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.state}</td>
                                            <td>{item.confirmed}</td>
                                            <td>{item.recovered}</td>
                                            <td>{item.deaths}</td>
                                            <td>{item.active}</td>
                                            <td>{item.lastupdatedtime}</td>
                                        </tr>
                                    )
                                }
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
           
            </div>
           
        </>
    );
}

export default Statewise;