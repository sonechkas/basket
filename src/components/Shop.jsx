import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./cart";
import BasketList from "./BasketList";
import { Alert } from "./alert";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState("");

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };
    const getTotalPrice = () => {
        return order.reduce((total, item) => {
            return total + (item.finalPrice || 0) * item.quantity;
        }, 0);
    };

    const closeAlert = () => {
        setAlertName("");
    };

    const addToBasket = (item) => {
        const existingItemIndex = order.findIndex((orderItem) => orderItem.offerId === item.offerId);
        if (existingItemIndex !== -1) {
            const newOrder = [...order];
            newOrder[existingItemIndex].quantity += 1;
            setOrder(newOrder);
        } else {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);  
        }
        alert(`Товар "${item.displayName}" добавлен в корзину`);
    };

    const removeFromBasket = (offerId) => {
        const removedItem = order.find((item) => item.offerId === offerId);
        const newOrder = order.filter((item) => item.offerId !== offerId);
        setOrder(newOrder);
        setAlertName(`Товар "${removedItem.displayName}" удален из корзины`);
    };

    const incQuantity = (offerId) => {
        const newOrder = order.map((item) => {
            if (item.offerId === offerId) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            }
            return item;
        });
        setOrder(newOrder);
    };

    const decQuantity = (offerId) => {
        const newOrder = order.map((item) => {
            if (item.offerId === offerId && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1,
                };
            }
            return item;
        });
        setOrder(newOrder);
    };

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            setGoods(data.shop || []);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error:', error);
            setLoading(false);
        });
    }, []);

    return <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {loading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket}/>}
            {isBasketShow && <BasketList order={order} 
            handleBasketShow={handleBasketShow}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
            getTotalPrice={getTotalPrice}
            />}
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
            
        </main>;
}

export {Shop};