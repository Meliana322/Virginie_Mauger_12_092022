import React from "react";
import User from "./Pages/User/User";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";

function App() {
    return (
        <>
            <div className={styles.App}>
                <div className="container">
                    <Routes>
                        <Route path="/" exact element={<Home />}></Route>
                        <Route path="/User/:id" element={<User />}></Route>
                        <Route path="*" element={<Error />}></Route>
                    </Routes>
                </div>
            </div>
        </>
    );
}
export default App;
