import changePage from '@functions/changePage.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const checkChangeId: I['checkChangeId'] = async function () {
    const { levels, user } = this.props;
    const id = levels[1];

    if (!user && id === 'FIVE') {
        changePage({ pageName: 'auth-login' });

        return;
    }

    if (id && this.id !== id) {
        this.id = id;

        await setAsyncState.call(this, { id });
    }
};

export default checkChangeId;
