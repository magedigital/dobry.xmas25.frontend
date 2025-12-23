import AxiosInst from '@functions/initAxios.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import { setError } from '../../../../../components/errors/utils/errorHandler.ts';

import I from '../types.ts';

const send: I['send'] = async function () {
    const { loadingKey, isConfirm, currentMerchIndex } = this.state;
    const { code, success } = this.props;

    if (loadingKey) {
        return;
    }

    if (!isConfirm) {
        setError({ text: 'Необходимо подтвердить заказ', type: 'error' });

        return;
    }

    await setAsyncState.call(this, { loadingKey: 'send' });

    console.log(currentMerchIndex);

    const prize = this.prizes[Object.keys(this.prizes)[0] as keyof typeof this.prizes]?.code;

    try {
        const response = await AxiosInst.post<{}, ResponseT>('/GivePrizeExtra', {
            prize,
            participant: code,
        });

        if (response.result === 'OK') {
            if (success) {
                success();
            }

            return;
        }
    } catch (e) {}

    await setAsyncState.call(this, { loadingKey: undefined });
};

export default send;
