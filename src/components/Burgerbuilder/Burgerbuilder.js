import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'
import buildcontrol from './BuildControls/BuildContol/BuildControl'
import axios from '../../utils/axios'
import Modal from './Modal/Modal'
import OrderSummary from './OrderSummary/OrderSummary'
class Burgerbuilder extends Component {
    constructor(props) {
        super(props)
        console.log('[constructor]')
    }
    state = {
        ingredients: [


        ],
        totalPrice: 0

    }
    componentDidMount() {
        this.getIngredientsFromServer()
        console.log('[componentDidMount]')


    }

    componentDidUpdate() {
        console.log('[componentDidUpdate]')
    }


    getIngredientsFromServer = () => {
        axios.get('ingredients')
            .then((response) => {

                console.log(response.data.ingredients)
                let newINgredients = response.data.ingredients.map((item) => {
                    item.price = item.price * 3
                    return item

                })



                this.setState({
                    ingredients: response.data.ingredients
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    getBasicPricesFromServer = () => {
        axios.get('basicPrice')
            .then((response) => {

                console.log(response.data.basicPrice)




                this.setState({
                    totalPrice: response.data.basicPrice
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    postMyOrderToServer = () => {
        axios.post('burger', { burger: this.state.ingredients })
            .then((response) => {

                console.log(response)





            })
            .catch((error) => {
                console.log(error)
            })
    }



    // ajouterUnIngredient = (label) => {
    //   let newINgredients = this.state.ingredients.map((item) => { if (item.label === label) { item.count++ } })
    //console.log(newINgredients)
    //this.setState({ ingredients: newINgredients })
    //}

    addOrRemoveIngredientHandler = (id, action) => {
        const newINgredients = [...this.state.ingredients]
        let newTotalPrice = this.state.totalPrice
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
            {
                ingredients: newINgredients,
                totalPrice: newTotalPrice

            }
        )

    }
    getLastBurgerFromServer = () => {
        axios.get('lastBurger')
            .then((response) => {


                let newINgredients = response.data.burger.map((item) => {
                    item.price = item.price * 3
                    return item

                })



                this.setState({
                    ingredients: newINgredients
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }


    render() {
        console.log(['render'])


        return (
            <div>
                <Burger
                    ingredientsProps={this.state.ingredients}


                />
                <BuildControls
                    ingredientsProps={this.state.ingredients}
                    price={this.state.totalPrice}
                    //ajouter={this.ajouterUnIngredient(label)}
                    addOrRemoveIngredient={this.addOrRemoveIngredientHandler}
                    postMyOrderToServer={this.postMyOrderToServer}
                />
                <Modal>
                    <OrderSummary />
                </Modal>
            </div>
        )
    }
}
export default Burgerbuilder