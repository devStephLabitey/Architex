import React from "react";
import logo1 from "../../assets/logo.png"
import style from "../styles/Navbar.module.css"
import { NavLink } from "react-router-dom";
export default function Navbar (){
    return(
        <div className={style.Navbar}>
            <div className={style.navContent}>
                <div className={style.logo}>
                    <img src={logo1} alt="" />
                    <p>ARCHITEX3D</p>
                </div>
                <div className={style.Navlinks}>
                   <div className={style.explore}>
                        <div className={style.NavDev}><span>Explore</span><i className="fi fi-tr-dropdown-select"></i></div>
                            <div className={style.hoverD}>
                                <div> <NavLink>Villa</NavLink></div>
                                <div> <NavLink>Bungalow</NavLink></div>
                                <div> <NavLink>Appartement</NavLink></div>
                                <div> <NavLink>Interne</NavLink></div>
                                <div> <NavLink>Externe</NavLink></div>
                            </div>
                    </div>
                    <div className={style.Plans}>
                        <div className={style.NavPlans}><span>Plans<i className="fi fi-tr-dropdown-select"></i></span></div>
                        <div className={style.hoverP}>
                                <div> <NavLink>Villa</NavLink></div>
                                <div> <NavLink>Bungalow</NavLink></div>
                                <div> <NavLink>Appartement</NavLink></div>
                                <div> <NavLink>Interne</NavLink></div>
                                <div> <NavLink>Externe</NavLink></div>
                            </div>
                    </div>
                    <div href="">Nous Contacter</div>
                </div>
              <NavLink to={"/SearchPage"} className={style.NavLink}>
              <div className={style.search}>
                    <i className="fi fi-rr-search"></i>
                    <p className={style.searchTap}>Search Here...</p>
                </div>
              </NavLink>
              <div className={style.Panier}>
              <i class="fi fi-rr-shopping-cart"></i>
                <div className={style.cartCount}>0</div>

              </div>
                <div className={style.Auth}>
                    <NavLink to="/Login"><button className={style.In}>Sign In</button></NavLink>
                    <NavLink to="/Signup"><button className={style.Up}>Sign Up</button></NavLink>
                </div>
            </div>
        </div>
    );

}
