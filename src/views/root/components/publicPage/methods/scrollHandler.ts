import sendGoal from '@functions/sendGoal.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const scrollHandler: I['scrollHandler'] = async function () {
    if (!this.scrollNode.current) {
        return;
    }

    const scrollTop = this.scrollNode.current.scrollTop;

    if (!this.isFixTopBar && scrollTop > 0) {
        this.isFixTopBar = true;
        await setAsyncState.call(this, { isFixTopBar: true });
    }

    if (this.isFixTopBar && scrollTop <= 0) {
        this.isFixTopBar = false;
        await setAsyncState.call(this, { isFixTopBar: false });
    }

    const localName = this.getLocalScrollName();

    localStorage.setItem(localName, scrollTop.toString());

    const scrollHeight =
        this.scrollNode.current.scrollHeight - this.scrollNode.current.offsetHeight;

    if (this.name === 'index') {
        if (!this.scrollGoals[1] && scrollTop / scrollHeight > 3 / 10) {
            sendGoal('homeScroll30');

            this.scrollGoals[1] = true;
        }

        if (!this.scrollGoals[2] && scrollTop / scrollHeight > 6 / 10) {
            sendGoal('homeScroll60');

            this.scrollGoals[2] = true;
        }

        if (!this.scrollGoals[3] && scrollTop / scrollHeight > 9 / 10) {
            sendGoal('homeScroll90');

            this.scrollGoals[3] = true;
        }
    }

    if (this.name === '5ka') {
        if (!this.scrollGoals[1] && scrollTop / scrollHeight > 3 / 10) {
            sendGoal('5kaScroll30');

            this.scrollGoals[1] = true;
        }

        if (!this.scrollGoals[2] && scrollTop / scrollHeight > 6 / 10) {
            sendGoal('5kaScroll60');

            this.scrollGoals[2] = true;
        }

        if (!this.scrollGoals[3] && scrollTop / scrollHeight > 9 / 10) {
            sendGoal('5kaScroll90');

            this.scrollGoals[3] = true;
        }
    }
};

export default scrollHandler;
