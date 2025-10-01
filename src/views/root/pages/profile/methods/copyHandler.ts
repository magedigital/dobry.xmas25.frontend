import copyInBuffer from '@functions/copyInBuffer.ts';
import sendGoal from '@functions/sendGoal.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const copyHandler: I['copyHandler'] = async function () {
    const { user } = this.props;

    if (this.copyTimerId) {
        clearTimeout(this.copyTimerId);
    }

    try {
        await copyInBuffer(user!.userId);

        await setAsyncState.call(this, { isCopy: true });

        sendGoal('inviteFriendCopyBtn');

        this.copyTimerId = setTimeout(async () => {
            await setAsyncState.call(this, { isCopy: false });
        }, 3_000);
    } catch (error) {}
};

export default copyHandler;
