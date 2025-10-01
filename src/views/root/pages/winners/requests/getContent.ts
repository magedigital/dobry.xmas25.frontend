import AxiosInst from '@functions/initAxios.ts';
import { setLocalContent } from '@functions/localContent.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I, { WinnersDataT } from '../types.ts';

const getContent: I['getContent'] = async function () {
    const response = await AxiosInst.get<WinnersDataT>('/GetWinnerList');

    setLocalContent('winnersData', response.data);

    await setAsyncState.call(this, { winnersData: response.data });
};

export default getContent;
