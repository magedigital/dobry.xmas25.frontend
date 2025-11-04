import changePage from '@functions/changePage.ts';
import AxiosInst from '@functions/initAxios.ts';
import { deletePageScroll } from '@functions/savePageScroll.ts';
import sendGoal from '@functions/sendGoal.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import { setError } from '../../../components/errors/utils/errorHandler.ts';

import I from '../types.ts';

const send: I['send'] = async function () {
    const { loadingKey, content, currentMerchIndex, currentCustomValue, isConfirm } = this.state;

    sendGoal('profileOrderPrizeFinalBtn');

    if (!content || loadingKey) {
        return;
    }

    if (!isConfirm) {
        setError({ text: 'Необходимо подтвердить заказ', type: 'error' });

        return;
    }

    const currentMerch = content.components.buy.merch.prizes[currentMerchIndex!];

    if (!currentMerch) {
        return;
    }

    await setAsyncState.call(this, { loadingKey: 'send' });

    try {
        const response = await AxiosInst.post<{}, ResponseT>('/AddUserPrize', {
            prize: currentMerch.code,
            ...(currentMerch.code === 'DOBRO' ? { count: currentCustomValue } : {}),
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
    } catch (e) {}

    await setAsyncState.call(this, { loadingKey: undefined });
};

export default send;
