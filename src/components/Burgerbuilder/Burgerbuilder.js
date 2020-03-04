import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'
import buildcontrol from './BuildControls/BuildContol/BuildControl'
class Burgerbuilder extends Component {
    state = {
        ingredients: [
            {
                id: 1,
                label: 'salad',
                count: 0,
                price: 1
            },
            {
                id: 2,
                label: 'meat',
                count: 0,
                price: 3

            },
            {
                id: 3,
                label: 'cheese',
                count: 0,
                price: 2
            },
            {
                id: 4,
                label: 'escalope',
                count: 0,
                price: 2
            }


        ],
        totalPrice: 4

    }

    // ajouterUnIngredient = (label) => {
    //   let newINgredients = this.state.ingredients.map((item) => { if (item.label === label) { item.count++ } })
    // console.log(newINgredients)
    //this.setState({ ingredients: newINgredients })
    //}

    addOrRemoveIngredientHandler = (id, action) => {
        const newINgredients = [...this.state.ingredients]
        let  newTotalPrice = this.state.totalPrice
        const index = newINgredients.findIndex((ingredient) => {
            return ingredient.id === id
        })
        if (action === "add") {
            newINgredients[index].count++
            newTotalPrice += newINgredients[index].price


        } else if (action === "remove") {
            newINgredients[index].count--
            newTotalPrice -= newINgredients[index].price
        }

        this.setState(
            { ingredients: newINgredients,
                totalPrice: newTotalPrice
            
            }
        )

    }


    render() {


        return (
            <div>
                <Burger
                    ingredientsProps={this.state.ingredients}


                />
                <BuildControls
                    ingredientsProps={this.state.ingredients}
                    price={this.state.totalPrice}
                    // ajouter={this.ajouterUnIngredient(label)}
                    addOrRemoveIngredient={this.addOrRemoveIngredientHandler}
                  





                />
            </div>
        )
    }
}
export default Burgerbuilder