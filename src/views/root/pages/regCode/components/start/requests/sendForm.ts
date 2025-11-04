import getAuth from '@functions/getAuth.ts';
import AxiosInst from '@functions/initAxios.ts';
import sendGoal from '@functions/sendGoal.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function () {
    const { model } = this.state;
    const { setStep } = this.props;
    await setAsyncState.call(this, { loadingKey: 'send' });

    try {
        const response = await AxiosInst.post<{}, ResponseT<{ isFirstCode?: boolean }>>(
            '/CodeRegistration',
            {
                code: model?.code,
            },
        );

        if (response.result === 'OK') {
            await getAuth();
            await setStep('result');

            sendGoal('regCodeSuccess', true);

            if (response.data?.isFirstCode) {
                sendGoal('regFirstCode', true);
            }

            return;
        }
    } catch (e) {
        const error = e as ResponseErrorT;

        await setAsyncState.call(this, { error: error?.errorText });

        sendGoal('regCodeError', true);
    }

    await setAsyncState.call(this, { loadingKey: undefined });
};

export default sendForm;
