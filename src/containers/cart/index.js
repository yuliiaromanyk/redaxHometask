
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCartItems, addToCart, deleteFromCart} from '../../actions/cart.actions';

import './cart.css';

export class Cart extends Component {
    constructor(props) {
        super(props);
    }


    deleteFromCart = id => {
        let deleted = this.props.inCart[id];
        this.props.inCart.splice(id, 1);
        let newProducts = this.props.products.reduce((array, item) => {
            if (item.name === deleted.name) {
            }
            array.push(item);
            alert(item + "was deleted");
            return array;
        }, [])

        this.props.dispatch(deleteFromCart(newProducts));
        if
        (this.props.inCart.length === 0) {
            alert('Cart is empty');

        }
    }


    totalAmount = () => {
        return this.props.inCart.reduce( (array, val) => {
            return array + val.price;
        }, 0);
    }


    render() {
        return (
<div>
            <ul>
                {this.props.inCart.length
                    ? this.props.inCart.map( (item, id) => (
                        <li key = {id}>
                            <span> { item.name }</span>
                            <span> price is  { item.price }</span>
                            <input type = "number" max={`${this.props.inCart[id].available}`} min="1" />
                            <button  onClick={ () => this.deleteFromCart(id) }> Delete me </button>
                        </li>
                    ))
                    : ''

                }
            </ul>
</div>
        );
    }
}




const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(Cart);