import I from '../types.ts';

const updateProducts: I['updateProducts'] = async function (items) {
    const propsProducts = this.props.products;

    const resultProducts = items.map(({ key, id, isCurrent }) => {
        const product = propsProducts[key];

        return {
            ...product,
            key,
            id,
            isCurrent,
        };
    });

    await this.setProducts(resultProducts);
};

export default updateProducts;
