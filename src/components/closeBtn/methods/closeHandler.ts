import changePage from '@functions/changePage.ts';
import { store } from '@redux/redux.ts';

import I from '../types.ts';

const closeHandler: I['closeHandler'] = function () {
    const { onClick } = this.props;

    if (onClick) {
        onClick();

        return;
    }

    const pages = store.getState().pages;
    const user = store.getState().user;

    if (pages.merch.isShow && user) {
        changePage({ pageName: 'profile' });

        return;
    }

    if (pages.prizes.isShow || pages['game-inner'].isShow) {
        changePage({ pageName: user ? 'profile' : 'index' });

        return;
    }

    if (pages.profile.isShow) {
        changePage({ pageName: 'index' });

        return;
    }

    if (window.history.length <= 1) {
        changePage({ pageName: 'index' });

        return;
    }

    window.history.back();

    // if (
    //     (
    //         ['balls', 'invite', 'regCode', 'cheque', 'anket', 'merch', 'raffle', 'game'] as const
    //     ).find((name) => pages[name].isShow) &&
    //     user
    // ) {
    //     pageName = 'profile';
    // }

    // changePage({ pageName });
};

export default closeHandler;
