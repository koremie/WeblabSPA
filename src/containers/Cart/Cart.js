import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem.js";
import { CartItemsWrapper, EmptyCartWrapper, CartPageContainer, CartPageWrapper, ButtonsWrapper } from './Cart.styled.js';

const Cart = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);

    return (
        <CartPageWrapper>
            <CartPageContainer>
                <h2>Shopping Cart</h2>
                {cart.cartItems == 0 ?
                    <EmptyCartWrapper>
                        <h3>Your cart is currently empty TwT</h3>
                        <button onClick={() => navigate(`/catalog`)}>Start Shopping</button>
                    </EmptyCartWrapper>
                    :
                    <>
                        <CartItemsWrapper>
                            {cart.cartItems.map(({ item, count }) => (
                                <CartItem
                                    id={item.id}
                                    name={item.name}
                                    image={item.image}
                                    price={item.price}
                                    key={item.id}
                                />
                            ))}
                        </CartItemsWrapper>
                        <h3>Total price: {cart.cartTotalPrice}$</h3>
                        <ButtonsWrapper>
                            <button onClick={() => navigate(`/catalog`)}>
                                Go to catalog
                            </button>
                            <button>Confirm</button>
                        </ButtonsWrapper>
                    </>
                }
            </CartPageContainer>
        </CartPageWrapper>
    )
};

export default Cart;