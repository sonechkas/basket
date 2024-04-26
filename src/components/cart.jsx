function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;
    return (
        <div className="cart" onClick={handleBasketShow}> 
            <span class="material-icons">local_mall</span>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    );
}

export {Cart};