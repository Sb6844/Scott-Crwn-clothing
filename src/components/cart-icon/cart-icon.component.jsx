import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';
import { useContext } from 'react';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartDropdownContext);

    const triggerCartDropdown = () => {
        setIsCartOpen(!isCartOpen);
    }


    return (
        <div className='cart-icon-container' onClick={triggerCartDropdown}>
            <ShoppingIcon className='shopping-icon'></ShoppingIcon>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;