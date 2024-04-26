import React from 'react';
import s from './GoodsItem.module.css';

function GoodsItem(props) {
    const { 
        offerId, 
        displayName, 
        finalPrice, 
        displayAssets,
        displayDescription, 
        addToBasket = Function.prototype,
    } = props;


    return (
        
        <div key={offerId} className={s.card} id={offerId}>
            <img src={displayAssets[0]?.background} className={s.card_img_top} alt={displayName}/>
            <div className={s.card_body}>
                <h5 className="card-title">{displayName}</h5>
                <p className={s.card_text}>{displayDescription}</p>
                
                <span className={s.right}>{finalPrice}</span>
                <button 
                    className="btn btn-outline-danger col-6"
                    onClick={() => 
                        addToBasket({
                            offerId,
                            displayName,
                            finalPrice,
                        })
                    }
                >
                    Buy
                </button>
                
            </div>
        </div>
    );
}

export { GoodsItem };
