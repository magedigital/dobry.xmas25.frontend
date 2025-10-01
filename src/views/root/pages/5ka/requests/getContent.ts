import AxiosInst from '@functions/initAxios.ts';
import { setLocalContent } from '@functions/localContent.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I, { PyterkaContentT } from '../types.ts';

const getContent: I['getContent'] = async function () {
    try {
        const response = await AxiosInst.get<{}, ResponseT<PyterkaContentT>>('/content/5ka/');

        setLocalContent('5kaContent', response.data!);

        await setAsyncState.call(this, { content: response.data });
    } catch (error) {}
};

export default getContent;
