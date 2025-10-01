import AxiosInst from '@functions/initAxios.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I, { PrizeItemT } from '../types.ts';

const getGame: I['getGame'] = async function () {
    try {
        const response = await AxiosInst.post<{}, ResponseT<{ prizeList: PrizeItemT[] }>>(
            '/PlayGame',
            {},
        );

        const prizes = response.data?.prizeList;

        await setAsyncState.call(this, { prizes });
    } catch (e) {
        const error = e as ResponseErrorT;

        await setAsyncState.call(this, { error: error?.errorText });
    }
};

export default getGame;
