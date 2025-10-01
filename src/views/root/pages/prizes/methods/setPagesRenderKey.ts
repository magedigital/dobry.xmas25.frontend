import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const setPagesRenderKey: I['setPagesRenderKey'] = async function () {
    await setAsyncState.call(this, { pagesRenderKey: new Date().getTime().toString() });
};

export default setPagesRenderKey;
