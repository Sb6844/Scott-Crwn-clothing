import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';
import { useContext } from 'react';

const CartIcon = () => {
    const { cartDropdownProps, setCartDropdownProps } = useContext(CartDropdownContext);

    const triggerCartDropdown = () => {
        setCartDropdownProps({
            viewable: !cartDropdownProps.viewable
        })
    }
    return (
        <div className='cart-icon-container' onClick={triggerCartDropdown}>
            <ShoppingIcon className='shopping-icon'></ShoppingIcon>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;