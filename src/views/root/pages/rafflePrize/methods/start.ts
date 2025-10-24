import setAsyncState from '@functions/setAsyncState.ts';

import { setError } from '../../../components/errors/utils/errorHandler.ts';

import I from '../types.ts';

const start: I['start'] = async function () {
    const { isConfirm } = this.state;

    if (this.isStart) {
        return;
    }

    if (!isConfirm) {
        setError({ text: 'Необходимо отметить согласие', type: 'error' });

        return;
    }

    this.isStart = true;
    await setAsyncState.call(this, { loadingKey: 'start' });

    try {
        await this.gameRequest();
        await setAsyncState.call(this, { isStart: true, loadingKey: undefined });

        this.startCarusel();

        this.sliderIntervalId = setInterval(() => {
            this.slider!.handlerButton({ dir: 'next' });
        }, 300);
    } catch (error) {
        await setAsyncState.call(this, { loadingKey: undefined });
    }
};

export default start;
