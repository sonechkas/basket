import React from 'react';
import {GoodsItem} from "./GoodsItem";
import s from "./GoodsList.module.css";

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Not found</h3>;
    }

    return (
        <div className={s.goods_list}>
            {goods.map((item) => (
                <GoodsItem key={item.imdbID} 
                addToBasket={addToBasket}
                finalPrice={item.price.finalPrice}
                {...item} 
                />
            ))}
        </div>
    );
}

export {GoodsList};