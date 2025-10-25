import React from 'react';

import Products from '@components/products/Products.tsx';

import I from '../types.ts';

const renderCards: I['renderCards'] = function () {
    const { content } = this.state;
    const { inPage } = this.props;
    const products = content?.components.products || [];

    return <Products is5ka={inPage} products={products} />;
};

export default renderCards;
