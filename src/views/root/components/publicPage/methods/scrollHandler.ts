import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const scrollHandler: I['scrollHandler'] = async function () {
    if (!this.scrollNode.current) {
        return;
    }

    const scrollTop = this.scrollNode.current.scrollTop;

    if (!this.isFixTopBar && scrollTop > 20) {
        this.isFixTopBar = true;
        await setAsyncState.call(this, { isFixTopBar: true });
    }

    if (this.isFixTopBar && scrollTop <= 20) {
        this.isFixTopBar = false;
        await setAsyncState.call(this, { isFixTopBar: false });
    }

    const localName = this.getLocalScrollName();

    localStorage.setItem(localName, scrollTop.toString());
};

export default scrollHandler;
