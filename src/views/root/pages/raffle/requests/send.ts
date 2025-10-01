import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const send: I['send'] = async function () {
    const { inProcess } = this.state;

    if (inProcess) {
        return;
    }

    await setAsyncState.call(this, { loadingKey: 'send' });

    await this.startRaffle();

    await setAsyncState.call(this, { loadingKey: undefined });
};

export default send;
