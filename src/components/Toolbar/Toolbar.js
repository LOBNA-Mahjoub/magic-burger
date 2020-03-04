import React from 'react'
import classes from './Tolbar.module.css'
import logo from '../../assets/images/logo.png'
import Navigationitems from './Navigationitems/Navigationitems'

const toolbar = () => {

    return (
        <div className={classes.Toolbar}>
            <div>Menu</div>
            <div className={classes.Logo}>
                <img src={logo} alt="Magic Burger" />
            </div>
            <Navigationitems />
        </div>

    )
}

export default toolbar
