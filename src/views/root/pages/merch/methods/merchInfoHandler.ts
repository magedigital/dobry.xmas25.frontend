import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const merchInfoHandler: I['merchInfoHandler'] = async function (merchInfoActive) {
    await setAsyncState.call(this, { merchInfoActive });
};

export default merchInfoHandler;
