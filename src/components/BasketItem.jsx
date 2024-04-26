import React from 'react';

function BasketItem({ item, removeFromBasket, incQuantity, decQuantity, updateTotalPrice }) {
    const { displayName, finalPrice, quantity } = item;

    return (
        <div className="basket-item">
            <div><strong>{displayName}</strong></div>
            <div className='d-flex flex-row justify-content-between align-self-center'>
                <div>Цена: {finalPrice}</div>
                <div className='d-flex flex-row align-self-center'>
                    <button className='btn btn-secondary' onClick={() => decQuantity(item.offerId)}>-</button>
                    <div className='Col'><nobr> Количество: {quantity} </nobr></div>
                    <button className='btn btn-secondary' onClick={() => incQuantity(item.offerId)}>+</button>
                </div>
                <button className='btn btn-danger' onClick={() => removeFromBasket(item.offerId)}>Удалить</button>
            </div>
        </div>
    );
}

export default BasketItem;
