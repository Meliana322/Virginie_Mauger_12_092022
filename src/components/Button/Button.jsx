import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button(props) {
    return (
        <>
            <Link to={props.pathname} className={styles.button}>
                {props.children}
            </Link>
        </>
    );
}
Button.propTypes = {
    pathname: PropTypes.string,
    children: PropTypes.string,
};
