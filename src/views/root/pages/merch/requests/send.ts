import changePage from '@functions/changePage.ts';
import AxiosInst from '@functions/initAxios.ts';
import { deletePageScroll } from '@functions/savePageScroll.ts';
import sendGoal from '@functions/sendGoal.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const send: I['send'] = async function () {
    const { loadingKey, content, currentMerchIndex, currentCustomValue, isConfirm } = this.state;

    if (!content || loadingKey) {
        return;
    }

    if (!isConfirm) {
        await setAsyncState.call(this, { error: 'Необходимо подтвердить заказ' });

        return;
    }

    await setAsyncState.call(this, { error: undefined });

    const currentMerch = content.components.buy.merch.prizes[currentMerchIndex!];

    if (!currentMerch) {
        return;
    }

    await setAsyncState.call(this, { loadingKey: 'send' });

    const festTitle = currentCustomValue
        ? currentCustomValue.replace('<span>', '*').replace('</span>', '*')
        : undefined;

    try {
        const response = await AxiosInst.post<{}, ResponseT>('/AddUserPrize', {
            prize: currentMerch.code,
            festTitle,
        });

        if (response.result === 'OK') {
            deletePageScroll('profile');

            await this.getContent();

            if (window.Telegram) {
                window.Telegram.WebApp?.close();
            }

            changePage({ pageName: 'profile-prizes' });

            sendGoal('profileOrderPrizeSuccess');

            return;
        }
    } catch (e) {
        const error = e as ResponseErrorT;

        await setAsyncState.call(this, { error: error?.errorText });
    }

    await setAsyncState.call(this, { loadingKey: undefined });
};

export default send;
