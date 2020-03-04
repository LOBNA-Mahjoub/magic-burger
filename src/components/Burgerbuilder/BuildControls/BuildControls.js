import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildContol/BuildControl'


const buildcontrols = (props) => {
    let buildcontrolsList = props.ingredientsProps.map((ingredient) => {
        return <BuildControl label={ingredient.label}
            added={() => { props.addOrRemoveIngredient(ingredient.id, "add") }}
            removed={() => { props.addOrRemoveIngredient(ingredient.id, "remove") }}
            key={ingredient.id}
            disableRemoving={ingredient.count === 0}
        // ajouter={props.ajouter(label)} 
        />
    })

    return (
        < div className={classes.BuildControls} >
            <p  >the price is  {props.price.toFixed(2)}  DT</p>

            {buildcontrolsList}

            <button className={classes.OrderButton}>order now </button>
        </div >
    )

}
export default buildcontrols