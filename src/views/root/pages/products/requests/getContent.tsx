import AxiosInst from '@functions/initAxios.ts';
import { setLocalContent } from '@functions/localContent.ts';
import setAsyncState from '@functions/setAsyncState';

import I, { ProductsContentT } from '../types.ts';

const getContent: I['getContent'] = async function () {
    try {
        const response = await AxiosInst.get<ProductsContentT>('/content/about/');

        setLocalContent('productsContent', response.data);

        await setAsyncState.call(this, { content: response.data });
    } catch (error) {}
};

export default getContent;
