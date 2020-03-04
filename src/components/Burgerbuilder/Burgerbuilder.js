import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'
import buildcontrol from './BuildControls/BuildContol/BuildControl'
class Burgerbuilder extends Component {
    state = {
        ingredients: [
            {
                label: 'salad',
                count: 0,
                price: 1
            },
            {
                label: 'meat',
                count: 0,
                price: 3

            },
            {
                label: 'cheese',
                count: 0,
                price: 2
            },
            {
                label: 'escalope',
                count: 0,
                price: 2
            }


        ],
        priceTotal: 4

    }

    ajouterUnIngredient = (label) => {
         let newINgredients = this.state.ingredients.map((item) => { if (item.label === label) { item.count++ } })
        console.log(newINgredients)
        this.setState({ ingredients: newINgredients })
      




    }

    supprimerUnIngredient = () => {
        if (this.state.count < 1)
            console.log("Impossible de supprimer cet ingredient !!")
        else
            this.setState(
                {
                    count: this.state.count - 1,

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
                    price={this.state.priceTotal}
                    ajouter={this.ajouterUnIngredient(label)}





                />
            </div>
        )
    }
}
export default Burgerbuilder