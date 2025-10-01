import AxiosInst from '@functions/initAxios.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I, { WaitContentT } from '../types.ts';

const getContent: I['getContent'] = async function () {
    try {
        const response = await AxiosInst.get<{}, ResponseT<WaitContentT>>('/content/soon/');

        // setLocalContent('indexContent', response.data!);

        await setAsyncState.call(this, { content: response.data });
    } catch (error) {}
};

export default getContent;
