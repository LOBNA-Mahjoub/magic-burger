import React from 'react'
import classes from './Burger.module.css'
import Ingredients from './Ingredients/Ingredients'
import ingredients from './Ingredients/Ingredients'


const burger = (props) => {
    let IngredientsComponents = []
    for (let ingredient of props.ingredientsProps)
        for (let i = 0; i < ingredient.count; i++)
            IngredientsComponents.push(<Ingredients type={ingredient.label}
                ajouter={props.ajouter(ingredient.label)} />)

    return (
        <div className={classes.Burger}>
            <Ingredients type='bread-top' />
            {IngredientsComponents}
            <Ingredients type='bread-bottom' />
        </div>

    )
}
export default burger