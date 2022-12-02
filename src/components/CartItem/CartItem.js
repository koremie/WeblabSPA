import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseCount, decreaseCount } from '../../containers/Redux/CartSlice';
import { CardTileWrapper, ChangeButton, CountWrapper, } from "./CartItem.styled";


const CartItem = ({ id, name, image, price}) => {
    const items = useSelector((state) => state.cart.cartItems);
    const item = items[items.findIndex((anyItem) => anyItem.item.id == id)]
    const [itemCount, setItemCount] = useState(item.count);
    const priceXCount = price * itemCount;
    const dispatch = useDispatch();

    const handleIncreaseCount = () => {
        dispatch(increaseCount(item));
        setItemCount(itemCount + 1)
    }

    const handleDecreaseCount = () => {
        if (itemCount > 1) {
            dispatch(decreaseCount(item));
            setItemCount(itemCount - 1)
        }
        else {
            alert("Item count can't be less than one TT");
        }
    }

  return (
    <CardTileWrapper>
      <img src={image} alt="img" />
      <h2>{name}</h2>
      <CountWrapper>
        <ChangeButton onClick={() => handleDecreaseCount()}>-</ChangeButton>
        <h3>{itemCount}</h3>
        <ChangeButton onClick={() => handleIncreaseCount()}>+</ChangeButton>
        <p>{price}$</p>
      </CountWrapper>
      <h3>Total: {priceXCount}$</h3>
      <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
    </CardTileWrapper>
  )
};

export default CartItem;