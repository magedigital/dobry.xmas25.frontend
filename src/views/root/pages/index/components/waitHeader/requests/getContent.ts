import AxiosInst from '@functions/initAxios.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I, { CounterComponentT } from '../types.ts';

const getContent: I['getContent'] = async function () {
    const response = await AxiosInst.get<
        {},
        ResponseT<{ components: { counter: CounterComponentT } }>
    >('/content/main/');

    await setAsyncState.call(this, {
        days: response.data?.components.counter.days,
        daysTitle: response.data?.components.counter.daysTitle,
    });
};

export default getContent;
