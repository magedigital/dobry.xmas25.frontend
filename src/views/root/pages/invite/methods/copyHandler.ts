import copyInBuffer from '@functions/copyInBuffer.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const copyHandler: I['copyHandler'] = async function () {
    if (this.timerId) {
        clearTimeout(this.timerId);
    }

    try {
        await copyInBuffer(this.getLink());

        await setAsyncState.call(this, { isCopy: true });

        this.timerId = setTimeout(async () => {
            await setAsyncState.call(this, { isCopy: false });
        }, 3_000);
    } catch (error) {}
};

export default copyHandler;
