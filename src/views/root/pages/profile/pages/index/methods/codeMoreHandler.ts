import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const codeMoreHandler: I['codeMoreHandler'] = async function () {
    await setAsyncState.call(this, { currentCodesCount: this.state.currentCodesCount + 10 });
};

export default codeMoreHandler;
