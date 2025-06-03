import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    // ✅ Calculate total cart cost
    const calculateTotalAmount = () => {
        let total = 0;
        cart.forEach((item) => {
            const cost = typeof item.cost === 'string' ? parseFloat(item.cost.substring(1)) : item.cost;
            total += cost * item.quantity;
        });
        return total.toFixed(2);
    };

    // ✅ Calculate item subtotal
    const calculateTotalCost = (item) => {
        const cost = typeof item.cost === 'string' ? parseFloat(item.cost.substring(1)) : item.cost;
        return (cost * item.quantity).toFixed(2);
    };

    // ✅ Increment quantity
    const handleIncrement = (item) => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    // ✅ Decrement quantity or remove if 0
    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeItem({ name: item.name }));
        }
    };

    // ✅ Remove item from cart
    const handleRemove = (item) => {
        dispatch(removeItem({ name: item.name }));
    };

    // ✅ Continue shopping
    const handleContinueShopping = (e) => {
        e.preventDefault();
        onContinueShopping(e);
    };

    // ✅ Placeholder for future checkout logic
    const handleCheckoutShopping = () => {
        alert('Functionality to be added for future reference');
    };

    return (
        <div className="cart-container">
            <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
            <div>
                {cart.map((item) => (
                    <div className="cart-item" key={item.name}>
                        <img className="cart-item-image" src={item.image} alt={item.name} />
                        <div className="cart-item-details">
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item-cost">
                                ${typeof item.cost === 'string' ? item.cost.substring(1) : item.cost}
                            </div>
                            <div className="cart-item-quantity">
                                <button
                                    className="cart-item-button cart-item-button-dec"
                                    onClick={() => handleDecrement(item)}
                                >
                                    -
                                </button>
                                <span className="cart-item-quantity-value">{item.quantity}</span>
                                <button
                                    className="cart-item-button cart-item-button-inc"
                                    onClick={() => handleIncrement(item)}
                                >
                                    +
                                </button>
                            </div>
                            <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                            <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="continue_shopping_btn">
                <button className="get-started-button" onClick={handleContinueShopping}>
                    Continue Shopping
                </button>
                <br />
                <button className="get-started-button1" onClick={handleCheckoutShopping}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default CartItem;
