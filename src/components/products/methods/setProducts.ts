import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const setProducts: I['setProducts'] = async function (products) {
    await setAsyncState.call(this, { products });
};

export default setProducts;
