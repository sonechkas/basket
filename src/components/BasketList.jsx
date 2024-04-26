import React from 'react';
import BasketItem from './BasketItem.jsx';
import './BasketList.css';

function BasketList({ order, removeFromBasket, incQuantity, decQuantity, handlePayment, getTotalPrice }) {
    return (
        <div className="basket-list-container">
            <div className="basket-list" style={{ backgroundColor: 'white' }}>
                <h2 className="text-center">Корзина</h2>
                {order.map(item => (
                    <BasketItem
                        key={item.offerId}
                        item={item}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        getTotalPrice={getTotalPrice}
                    />
                ))}
                <div className='opl d-flex justify-content-between align-items-center'>
                    <div className="total-price text-center"><strong>Общая сумма: {getTotalPrice()} ₽</strong></div> { }
                    <button className="pay-button btn btn-success col-8" onClick={handlePayment}>Оплатить</button>
                </div>
            </div>
        </div>
    );
}

export default BasketList;
