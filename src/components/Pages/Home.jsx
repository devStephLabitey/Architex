import React from "react";
import NavLink from "react-router-dom"
import style from "../styles/Pages.module.css"
import Navbar from "../fixeComponents/Navbar";
export default function Home() {
    return(
        <div className={style.Home}>
            <div className={style.Head}>
            <Navbar />

            <div className={style.HeadText}>
                <div className={style.HLeft}>
                    <p className={style.BgText}>
                        <span className={style.TextTitle}>La Meilleur Plateforme <br />
                        de Visite De  
                        <b> Plans 3D</b> <br /></span>
                        Qui vous satisfait
                    </p>
                    <p className={style.lightText}>
                        Imprimez et personnalisez vos 
                        modèles 3d et 2D gratuits <br /> Achetez et Devenez des Vendeurs.
                    </p>
                </div>
                <div className={style.HRight}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia cupiditate dolor officiis consectetur libero possimus id eaque error amet incidunt, blanditiis molestiae eveniet obcaecati veniam, ea soluta repudiandae laudantium!
                </div>
            </div>
           </div>
        </div>
        
    );
}