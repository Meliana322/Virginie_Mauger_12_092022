import React from "react";
import style from "./Button.module.css";

export default function Button() {
    return (
        <>
            <div className={style.container}>
                <a href="../../App.js" name="user/12">
                    Utilisateur 12
                </a>
                <a href="../../App.js" name="user/18">
                    Utilisateur 18
                </a>
            </div>
        </>
    );
}
