import React, { Component } from 'react';


const SideNav = () => {

    return ( 
        <aside className="col-12 col-sm-3 p-0 bg-dark">
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark align-items-start flex-sm-column flex-row">
                    <a className="navbar-brand" href={""}><span className="header-brand"> Wesley  </span></a>
                        
                    <a href={""} className="navbar-toggler" data-toggle="collapse" data-target=".sidebar">
                      <span className="navbar-toggler-icon"></span>
                    </a>
                    <div className="collapse navbar-collapse sidebar">
                    
                        <ul className="flex-column navbar-nav w-100 justify-content-between">
                            <li className="nav-item" id="discover">
                                <a className="nav-link pl-0" href="#"> <span className="">Discover</span><img className="push-image-right" src={require("../resources/search-icon-white.png")}/></a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link head-link pl-0" href="#"> <span className="">Watched</span></a>
                                <hr className="hr-style"/>
                                <a className="nav-link small-link pl-0" href="#"> <span className="">Movies</span></a>
                                <a className="nav-link small-link pl-0" href="#"> <span className="">TV Shows</span></a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="#"> <span className="">Saved</span></a>
                                <hr className="hr-style"/>
                                <a className="nav-link small-link pl-0" href="#"> <span className="">Movies</span></a>
                                <a className="nav-link small-link pl-0" href="#"> <span className="">TV Shows</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>
    );
}
 
export default SideNav;