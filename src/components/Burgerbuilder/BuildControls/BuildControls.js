import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildContol/BuildControl'


const buildcontrols = (props) => {
    let buildcontrolsList = props.ingredientsProps.map((ingredient) => {
        return <BuildControl label={ingredient.label}
            ajouter={props.ajouter(label)} />
    })

    return (
        < div className={classes.BuildControls} >
            <p  >the price is  {props.price}  DT</p>

            {buildcontrolsList}

            <button className={classes.OrderButton}>order now </button>
        </div >
    )

}
export default buildcontrols