import React from 'react'
import classes from './Navigationitems.module.css'
import Navigationitem from './Navigationitem/Navigationitem'

const navigationitems = () => {
    return (
        <div>
            <ul className={classes.NavigationItems}>
                <Navigationitem name='burger builder' active />
                <Navigationitem name='checkout' />
            </ul>
        </div>
    )
}
export default navigationitems