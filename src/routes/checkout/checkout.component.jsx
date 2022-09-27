import './checkout.styles.scss'

import { useContext } from 'react';

import { CartDropdownContext } from '../../contexts/cart-dropdown.context';




const Checkout = () => {

    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartDropdownContext);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
                {
                    cartItems.map((cartItem) => {
                        const { id, name, quantity}  = cartItem;
                        return (
                            <div>
                                <h2>{name}</h2>
                                <span>{quantity}</span>
                                <br/>
                                <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
                                <span onClick={() => addItemToCart(cartItem)}>increment</span>
                            </div>
                        )
                    })
                }
                <span className='Total'>Total: 0</span>
        </div>
    )
}

export default Checkout;