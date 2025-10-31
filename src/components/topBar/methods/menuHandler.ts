import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const menuHandler: I['menuHandler'] = async function (
    this: I,
    isShowMenu = !this.state.isShowMenu,
) {
    await setAsyncState.call(this, { isShowMenu });

    this.props.cb(isShowMenu);
};

export default menuHandler;
