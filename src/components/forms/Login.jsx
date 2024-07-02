import React from "react";
import logo1 from "../../assets/logo.png"
import styles from '../styles/Forms.module.css'
import {NavLink} from "react-router-dom"

function Login() {
    return(
        <div className={styles.Formbody}>
            <div className={styles.back}>
            </div>
            <div className={styles.formPart}>
                <div className={styles.formTitle}>Login</div>
                <div className={styles.imgPart}>
                    <img src={logo1} alt="" />
                </div>
                <form action="">
                    <div className={styles.dataForm}>
                        <label className="label">Email</label>
                        <input type="email" name="email" id="email" required/>
                    </div>
                    <div className={styles.dataForm}>
                        <label className="label">Mot de passe</label>
                        <input type="password" name="password" id="password" required/>
                    </div>

                    <div className={styles.submitBtn}>
                        <button type=""><b> Valider </b><span className="fi fi-rr-arrow-right"></span></button>
                    </div>

                    <p className={styles.text}>haven't create an account ? <NavLink to={"/Signup"}>Signup</NavLink></p>
                </form>
            </div>

        </div>
    );
}
export default Login;