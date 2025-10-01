import I from '../types.ts';

const getProducts: I['getProducts'] = function () {
    const { is5ka } = this.props;
    const resultProducts = this.props.products.filter((product) =>
        product.sku.some(
            (item) => !item.promo || item.promo === 'all' || item.promo === (is5ka ? '5ka' : 'ncp'),
        ),
    );

    return resultProducts;
};

export default getProducts;
