import React from 'react';

import Products from '@components/products/Products.tsx';

import I from '../types.ts';

const renderCards: I['renderCards'] = function () {
    const { content } = this.state;
    const products = content?.components.products || [];

    return <Products products={products} />;
};

export default renderCards;
