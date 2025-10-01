import React from 'react';

import I from '../types.ts';

const renderMain: I['renderMain'] = function () {
    const { product } = this.props;

    return (
        <div className="product__main _FULL_W _COL _COL_H_CENTER">
            {this.renderMainSlider()}
            <p className="product__name">{product.description.header.title}</p>
            <div
                className="product__button _main _CLICK"
                onClick={() => {
                    this.rotateHandler(true);
                }}
            >
                О продукте
            </div>
        </div>
    );
};

export default renderMain;
