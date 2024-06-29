import '../componentCss/Header.css'
import logo from '../images/logo.png'
import logout from '../images/login.png'
import { useState } from 'react'
const HeaderComponent=()=>{
            const [sideBar,setSideBar]=useState(false);

            return(
                <header className="header">
                    <div className='logodiv'>
                      <img src={logo} alt="logo image"/>
                
                    </div>
                   
                    <nav className="navbar">
                        <ul>
                            <li><a>Explore</a></li>
                            <li><a>Add Place</a></li>
                            <li><a>User Account</a></li>
                            <li><a>View favorite</a></li>
                            <li className='logoutClass'><a><img src={logout} alt="logout"/><span>Login in</span></a></li>
                            <li className='signin'><a>Sign in</a></li> 
                        </ul>
                        <img className="menuBar" src="https://www.pinclipart.com/picdir/middle/532-5328945_menu-bar-icon-white-clipart-png-download-menu.png" alt="menubar"
                            onClick={()=>{
                                setSideBar(true);
                            }}
                        />
                    </nav>

                   
                    <nav className="sideNavBar" style={{
                                right:`${sideBar ? "109px":"-200px"}`
                    }} >
                            <img className="imageList" src="https://www.pinclipart.com/picdir/middle/35-356107_close-button-icon-png-clipart.png" alt="close image"
                                onClick={()=>{
                                    setSideBar(false);
                                }}
                            />
                            <ul>
                            <li><a>Explore</a></li>
                            <li><a>Add Place</a></li>
                            <li><a>User Account</a></li>
                            <li><a>View favorite</a></li>
                            <li className='logoutClass'><a><img src={logout} alt="logout"/><span>Login in</span></a></li>
                            <li className='signin'><a>Sign in</a></li>
                        </ul>

                        </nav>
                        

                                    </header>
            )
}

export default HeaderComponent;