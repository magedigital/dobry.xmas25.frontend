import React from 'react';

import I from '../types.ts';

const renderBack: I['renderBack'] = function () {
    const { product } = this.props;

    return (
        <div className="product__back _FULL _COL _COL_H_CENTER">
            <p className="product__backText _main">{product.description.header.title}</p>
            <p
                className="product__backText"
                dangerouslySetInnerHTML={{ __html: product.description.header.description }}
            ></p>
            <div className="product__backButton">
                <div
                    className="product__button _CLICK"
                    onClick={() => {
                        this.rotateHandler(false);
                    }}
                >
                    Перевернуть
                </div>
            </div>
        </div>
    );
};

export default renderBack;
