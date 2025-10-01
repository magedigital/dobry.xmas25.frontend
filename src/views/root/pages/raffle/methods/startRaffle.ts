import AxiosInst from '@functions/initAxios.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const startRaffle: I['startRaffle'] = async function (force) {
    const { inProcess, isComplete } = this.state;

    if ((inProcess || isComplete) && force !== true) {
        return;
    }

    this.tryCounter = 0;
    this.allCounter = 0;

    await setAsyncState.call(this, { inProcess: true, isError: false, isComplete: false });

    try {
        const response = await AxiosInst.post<{}, ResponseT<{ prize: I['state']['resultPrize'] }>>(
            '/PlayGame',
            { play: true },
        );

        const resultPrize = response.data!.prize;

        await setAsyncState.call(this, { resultPrize });

        this.startTrying();
    } catch (e) {
        const error = e as ResponseErrorT;

        await setAsyncState.call(this, { error: error?.errorText });
    }
};

export default startRaffle;
