import React from 'react'
import classes from './Burger.module.css'
import Ingredients from './Ingredients/Ingredients'
import ingredients from './Ingredients/Ingredients'


const burger = (props) => {
    let IngredientsComponents = []
    for (let ingredient of props.ingredientsProps)
        for (let i = 0; i < ingredient.count; i++)
            IngredientsComponents.push(<Ingredients type={ingredient.label}
                key={ingredient.id + "-" + i}



            />)
    let message = null
    if (IngredientsComponents.length === 0)
        message = <p> Please start adding ingredients !!</p>


    return (
        <div className={classes.Burger}>
            <Ingredients type='bread-top' />
            {message}
            {IngredientsComponents}
            <Ingredients type='bread-bottom' />
        </div>

    )
}
export default burger