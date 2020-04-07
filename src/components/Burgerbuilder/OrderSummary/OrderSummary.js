import React from 'react'
import classes from './OrderSummary/OrderSummary.module.css'

const orderSummary = () => {
    return (
        <div>

            <h4> your order</h4>
            <p> A delecious burger with the following ingredients : </p>
            <div> Ingredient list : </div> 
            <p>Total price : </p>
            <p> Continue to checkout ? </p>
            <button> Cancel </button>
            <button> Continue </button>
        </div>
    )
}
export default orderSummary