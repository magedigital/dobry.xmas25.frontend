import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const start: I['start'] = async function () {
    if (this.isStart) {
        return;
    }

    this.isStart = true;
    await setAsyncState.call(this, { isStart: true });

    this.startCarusel();

    this.sliderIntervalId = setInterval(() => {
        this.slider!.handlerButton({ dir: 'next' });
    }, 300);
};

export default start;
