import React from 'react';

import Icon from '@components/icon/Icon.tsx';

import I from '../types.ts';

const renderMainSlider: I['renderMainSlider'] = function () {
    const { product, is5ka } = this.props;
    const items = product.sku.filter(
        (item) => !item.promo || item.promo === 'all' || item.promo === (is5ka ? '5ka' : 'ncp'),
    );

    return (
        <div className="product__slider _FULL_W">
            {(['prev', 'next'] as const).map((key) => (
                <div className={`product__sliderButton _CLICK _COL _COL_CENTER _${key}`} key={key}>
                    <i className="product__sliderButtonIcon">
                        <Icon name={key === 'prev' ? 'arrow-prev-short' : 'arrow-next-short'} />
                    </i>
                </div>
            ))}
            <div className="product__sliderInner _FULL_W">
                <div className="product__sliderItems">
                    {items.map((item, key) => (
                        <div className="product__sliderItem _COL _COL_H_CENTER" key={key}>
                            <img src={item.thumb} alt="" className="product__sliderItemImage" />
                            <div className="product__sliderItemTabs _ROW">
                                <div className="product__sliderItemTab">{item.title}</div>
                                {item.new && (
                                    <div className="product__sliderItemTab _new">Новинка</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default renderMainSlider;
