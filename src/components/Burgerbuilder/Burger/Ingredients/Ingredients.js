import React from 'react'
import classes from './Ingredients.module.css'

const ingredients = (props) => {

    let ingredient = null

    switch (props.type) {
        case 'Salad':
            ingredient = <div className={classes.Salad}></div>
            break;
        case 'Meat':
            ingredient = <div className={classes.Meat}></div>
            break;
        case 'Cheese':
            ingredient = <div className={classes.Cheese}></div>
            break;
        case 'Escalope':
            ingredient = <div className={classes.Escalope}></div>
            break;
        case 'bread-top':
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>

            )

            break;
        case 'bread-bottom':
            ingredient = <div className={classes.BreadBottom}></div>
            break;




        default:
            break;
    }
    return ingredient

}
export default ingredients