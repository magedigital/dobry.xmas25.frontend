import getAuth from '@functions/getAuth.ts';
import AxiosInst from '@functions/initAxios.ts';
import setAsyncState from '@functions/setAsyncState.ts';
import setAsyncTimer from '@functions/setAsyncTimer.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function (again) {
    const { code, loadingKey } = this.state;
    const { login, isConfirm, mode } = this.props;

    if (loadingKey) {
        return;
    }

    await setAsyncState.call(this, { loadingKey: again ? 'again' : 'send' });

    if (1) {
        await setAsyncTimer(300);
    }

    try {
        const response = await AxiosInst.post<{}, ResponseT>(again ? '/Registration' : '/Login', {
            login,
            ...(again === true ? {} : { password: code, isCode: true }),
            ...(isConfirm && !again ? { confirmEmail: true } : {}),
            mode,
        });

        if (response.result === 'OK') {
            await getAuth(true);
        }
    } catch (e) {
        const error = e as ResponseErrorT;

        await setAsyncState.call(this, { error: error?.errorText });
    }

    await setAsyncState.call(this, { loadingKey: undefined });
};

export default sendForm;
