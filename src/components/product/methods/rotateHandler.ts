import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const rotateHandler: I['rotateHandler'] = async function (isRotate) {
    if (this.timerId) {
        clearTimeout(this.timerId);
    }

    await setAsyncState.call(this, { isRotate });

    this.timerId = setTimeout(async () => {
        await setAsyncState.call(this, { isRotateComplete: isRotate });
    }, 150);
};

export default rotateHandler;
